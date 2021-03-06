import React, { Component } from 'react';
import { View } from 'react-native';
import { Thumbnail, Container, Header, Content, Card, Title, CardItem, Textarea, Form, Text, Button, Icon, Left, Body, Right } from 'native-base';
import * as firebase from 'firebase/app'
import "firebase/auth";
import "firebase/database";
import Loading from './Loading'
export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: "",
            uid: "",
            Loading: false,
            name: "",
            Subject: {},
            CM: {},
            Users: {}
        };
    }
    Submit = async () => {
        this.setState({ Loading: true })
        var now = await new Date().toLocaleDateString("en-US").toString()
        CM = await { detail: this.state.comment, time: now, uid: this.state.uid, name: this.state.name }
        await firebase
            .database()
            .ref("Subject")
            .child(this.props.ID)
            .child('comments')
            .push(CM)
        this.setState({ comment: '' })
        this.setState({ Loading: false })
    }
    async componentDidMount() {
        if (firebase.auth().currentUser !== null)
            await this.setState({ uid: firebase.auth().currentUser.uid, name: firebase.auth().currentUser.displayName })
        await firebase
            .database()
            .ref("Users")
            .on("value", snapshot => {
                this.setState({
                    Users: snapshot.val()
                });
            });
        await firebase
            .database()
            .ref("Subject")
            .on("value", snapshot => {
                this.setState({
                    Subject: snapshot.val()
                    , Loading: false,
                    CM: snapshot.val()[this.props.ID].comments
                });
            });

    }

    compare = (a, b) => {
        if (new Date(a.time) < new Date(b.time)) {
            return -1;
        }
        if (new Date(a.time) > new Date(b.time)) {
            return 1;
        }
        return 0;
    }
    render() {
        return (
            <Content padder style={{backgroundColor:'#a8d8ea'}}>
                <Loading Loading={this.state.Loading}></Loading>
                {Object.values(((this.state.CM == null) ? {} : this.state.CM)).sort(this.compare).map((item, index) => (
                    <Card key={index}>
                        <CardItem header>
                            <Thumbnail small source={{
                                uri: (this.state.Users == null) ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Image_of_none.svg/819px-Image_of_none.svg.png' :
                                    ((this.state.Users[item.uid] == null) ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Image_of_none.svg/819px-Image_of_none.svg.png' :
                                        (((this.state.Users[item.uid].photoURL == null || this.state.Users[item.uid].photoURL == '') ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Image_of_none.svg/819px-Image_of_none.svg.png' : this.state.Users[item.uid].photoURL)))
                            }} />
                            <Text>
                                {"  " + ((this.state.Users == null) ? item.uid : ((this.state.Users[item.uid] == null) ? item.uid : this.state.Users[item.uid].displayName)) + ' - '}
                            </Text>

                            <Text style={{ fontSize: 12 }}>
                                {item.time}
                            </Text>
                        </CardItem>
                        <CardItem style={{ backgroundColor: '#faebd7' }}  >
                            <Body >
                                <Text>
                                    {item.detail}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                ))}
                <Text Styled='bold'>Comment </Text>
                <Form style={{ backgroundColor: '#faebd7' }}>
                    <Textarea value={this.state.comment} onChangeText={(Text) => { this.setState({ comment: Text }) }} rowSpan={5} bordered placeholder="Add your comment here." />

                </Form>
                <Button onPress={() => this.Submit()} info style={{ margin: 10, backgroundColor: '#00008b' }}><Text>Submit</Text></Button>
            </Content>
        );
    }
}

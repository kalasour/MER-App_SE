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
        };
    }
    Submit = async () => {
        this.setState({ Loading: true })
        var now = await new Date().toLocaleDateString("en-US").toString()
        CM = await { detail: this.state.comment, time: now, uid: this.state.uid }
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
            await this.setState({ uid: firebase.auth().currentUser.uid })
    }
    render() {
        return (
            <Content padder>
                <Loading Loading={this.state.Loading}></Loading>
                {Object.values(this.props.Selected.comments).map((item, index) => (
                    <Card key={index}>
                        <CardItem header>
                            <Thumbnail small source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} />
                            <Text>
                                {"  " + item.uid + ' - '}
                            </Text>

                            <Text style={{ fontSize: 12 }}>
                                {item.time}
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    {item.detail}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                ))}
                <Text Styled='bold'>Comment </Text>
                <Form>
                    <Textarea value={this.state.comment} onChangeText={(Text) => { this.setState({ comment: Text }) }} rowSpan={5} bordered placeholder="Add your comment here." />

                </Form>
                <Button onPress={() => this.Submit()} info style={{ margin: 10 }}><Text>Submit</Text></Button>
            </Content>
        );
    }
}

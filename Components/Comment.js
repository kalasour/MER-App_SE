import React, { Component } from 'react';
import { View } from 'react-native';
import { Thumbnail,Container, Header, Content, Card, Title, CardItem, Textarea,  Form, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Content padder>
                {Object.values(this.props.Selected.comments).map((item, index) => (
                    <Card key={index}>
                        <CardItem header>
                        <Thumbnail small source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}} />
                            <Text>
                                {"  "+item.uid+' - '}
                            </Text>
                            
                            <Text style={{fontSize:12}}>
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
                    <Textarea rowSpan={5} bordered placeholder="Add your comment here." />

                </Form>
                <Button info style={{margin:10}}><Text>Submit</Text></Button>
            </Content>
        );
    }
}

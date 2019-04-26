import React, { Component } from 'react';
import { Image, YellowBox, TouchableHighlight } from 'react-native';
import { Container, Header, Item, Textarea, Input, Icon, Form, Button, Text, Content, Card, CardItem, Spinner, Left, Thumbnail, Body, Right, View } from 'native-base';
import { createDrawerNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";
import { Col, Row, Grid } from 'react-native-easy-grid'
import * as firebase from 'firebase/app'
import "firebase/auth";
import "firebase/database";
export default class SelectTeacher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Selected: { contact: {} },
            ID: "",
        };
    }
    async componentDidMount() {
        const { navigation } = this.props;
        this.setState({ Selected: navigation.getParam("Selected", "error"), ID: navigation.getParam("Key", "error") });
    }
    render() {
        return (
            <Container>
                <Content padder style={{ backgroundColor: '#ecedc1' }} >
                    <Col>
                        <Thumbnail square style={{ width: 280, height: 300, margin: 50, alignSelf: 'center' }} source={{ uri: this.state.Selected.profile }} />
                    </Col>
                    <Col>
                        <Row><Icon active name="rename-box" type="MaterialCommunityIcons" /><Text>Name : </Text></Row>
                        <Card style={{ marginBottom: 10 }}  >
                            <CardItem style={{ backgroundColor: '#ffd3b6' }}>
                                <Body>
                                    <Text >{this.state.Selected.name}</Text>
                                </Body>
                            </CardItem>
                        </Card>

                        <Row><Icon active name="contacts" type="AntDesign" /><Text>Contact : </Text></Row>
                        <Card style={{ marginBottom: 10 }}  >
                            <CardItem style={{ backgroundColor: '#ffd3b6' }}>
                                <Body>
                                    <Text >E-mail : {this.state.Selected.contact['E-mail']}</Text>
                                    <Text >Fax : {this.state.Selected.contact.Fax}</Text>
                                    <Text >Office Hours : {this.state.Selected.contact['Office Hours']}</Text>
                                    <Text >Phone : {this.state.Selected.contact.Phone}</Text>
                                    <Text >Room : {this.state.Selected.contact.Room}</Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Row><Icon active name="book" type="AntDesign" /><Text>Educations : </Text></Row>
                        <Card style={{ marginBottom: 10 }}  >
                            <CardItem style={{ backgroundColor: '#ffd3b6' }} >
                                <Body>
                                    <Text >{this.state.Selected.Educations}</Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Row><Icon active name="lab-flask" type="Entypo" /><Text>Research Interests : </Text></Row>
                        <Card style={{ marginBottom: 10 }}  >
                            <CardItem style={{ backgroundColor: '#ffd3b6' }}>
                                <Body>
                                    <Text >{this.state.Selected['Research Interests']}</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </Col>
                </Content>
            </Container>
        );
    }
}

import React, { Component } from 'react';
import { Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Container, Header, Content, Form, Item, Input, Button, Label, Left, Right, Body, Title, Text } from 'native-base';
import { createDrawerNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";
import * as firebase from 'firebase/app'
import "firebase/auth";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: "",
      Lastname: "",
      Email: "",
      Password: "",

    };
  }
  Register = (Firstname) => {
    firebase.auth().createUserWithEmailAndPassword(this.state.Email, this.state.Password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
      // ...
    }).then(() => {
      if(firebase.auth().currentUser!=null)firebase.auth().currentUser.updateProfile({displayName:Firstname})
      // const resetAction = StackActions.reset({
      //   index: 0,
      //   actions: [NavigationActions.navigate({ routeName: "Login" })]
      // });
      // this.props.navigation.dispatch(resetAction);
    });
  }
  render() {
    return (
      <Container>
        <Header renderHeader="center" backgroundColor="#2cba2c" >
          <Left />
          <Body>
            <Title>Register</Title>
          </Body>
          <Right />
        </Header>




        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Firstname</Label>
              <Input value={this.state.Firstname} onChangeText={(Text) => { this.setState({ Firstname: Text }) }} />
            </Item>

            <Item floatingLabel>
              <Label>Lastname</Label>
              <Input value={this.state.Lastname} onChangeText={(Text) => { this.setState({ Lastname: Text }) }} />
            </Item>

            <Item floatingLabel>
              <Label>Email</Label>
              <Input value={this.state.Email} onChangeText={(Text) => { this.setState({ Email: Text }) }} />
            </Item>

            <Item floatingLabel>
              <Label>Password</Label>
              <Input value={this.state.Password} secureTextEntry={true} onChangeText={(Text) => { this.setState({ Password: Text }) }} />
            </Item>

            <Button style={{ alignSelf: 'center', marginTop: 10 }} primary onPress={() => {
              this.Register(this.state.Firstname)
            }}><Text> Sign up </Text></Button>
          </Form>


        </Content>
      </Container>
    );
  }
}

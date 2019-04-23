/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  StackActions,
  NavigationActions
} from "react-navigation";
import * as firebase from 'firebase/app'

var config = {
  apiKey: "AIzaSyD7usezWxYIrAgLzCAMnBCtBPxUCH7Q37Q",
  authDomain: "mer-se.firebaseapp.com",
  databaseURL: "https://mer-se.firebaseio.com",
  projectId: "mer-se",
  storageBucket: "mer-se.appspot.com",
  messagingSenderId: "920413549139"
};
firebase.initializeApp(config);

export default class App extends Component {
  static navigationOptions = { title: 'Mer', header: null };
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    };
  }
  componentDidMount() {
    if (this.state.logged) {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Home" })]
      });
      this.props.navigation.dispatch(resetAction);
    }
    else {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Login" })]
      });
      this.props.navigation.dispatch(resetAction);
    }
  }
  render() {

    return (
      <Container  >
        <Header full />
        <Content >
          <Container style={{ alignSelf: 'center', alignItems: 'center' }} >
            <Button light onPress={() => { this.props.navigation.navigate('Home') }} ><Text> Home </Text></Button>
            <Button primary onPress={() => { this.props.navigation.navigate('Login') }}><Text> Login </Text></Button>
            <Button success onPress={() => { this.props.navigation.navigate('Register') }}><Text> Register </Text></Button>
            <Button info onPress={() => { this.props.navigation.navigate('Details') }}><Text> Details </Text></Button>
            <Button warning onPress={() => { this.props.navigation.navigate('Subject') }}><Text> Subject</Text></Button>
            <Button danger onPress={() => { this.props.navigation.navigate('Teacher') }}><Text> Teacher </Text></Button>
            <Button dark><Text> undefine </Text></Button>
          </Container>
        </Content>
      </Container>
    );
  }
}



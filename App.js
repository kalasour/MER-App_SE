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



export default class App extends Component {
  static navigationOptions = { title: 'Mer', header: null };
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
            <Button warning onPress={() => { this.props.navigation.navigate('Subject') }}><Text> subject</Text></Button>
            <Button danger><Text> undefine </Text></Button>
            <Button dark><Text> undefine </Text></Button>
          </Container>
        </Content>
      </Container>
    );
  }
}



import React, { Component } from 'react';
import { Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Container, Header, Content, Form, Item, Input, Button, Label, Left, Right, Body, Title, Text } from 'native-base';
import {
  StackActions,
  NavigationActions
} from "react-navigation";
export default class Login extends Component {
  static navigationOptions = { title: 'Mer', header: null };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container   >
        <Header renderHeader="center" backgroundColor="#84cee8" >
          <Left />
          <Body>
            <Title>log in</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Col style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 200, height: 200 }}
              source={require('./resources/logo.png')}
            />
          </Col>

          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button style={{ alignSelf: 'center', marginTop: 10 }} primary onPress={() => {
              const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: "Home" })]
              });
              this.props.navigation.dispatch(resetAction);
            }} ><Text> login </Text></Button>
          </Form>
        </Content>

      </Container>
    );
  }
}

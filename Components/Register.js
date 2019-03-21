import React, { Component } from 'react';
import { Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Container, Header, Content, Form, Item, Input,Button,Label,Left,Right,Body,Title,Text } from 'native-base';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <Header renderHeader = "center" backgroundColor = "#2cba2c" >
            <Left/>
              <Body>
                <Title>Register</Title>
              </Body>
            <Right />
        </Header>




        <Content>
          <Form>
              <Item floatingLabel>
                <Label>Firstname</Label>
                <Input />
              </Item>

              <Item floatingLabel>
                <Label>Lastname</Label>
                <Input />
              </Item>

              <Item floatingLabel>
                <Label>Username</Label>
                <Input />
              </Item>

              <Item floatingLabel>
                <Label>Password</Label>
                <Input />
              </Item>

              <Button style={{alignSelf:'center',marginTop:10}} primary><Text> Sign up </Text></Button>
            </Form>


        </Content>
      </Container>
    );
  }
}

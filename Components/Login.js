import React, { Component } from 'react';
import { Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Container, Header, Content, Form, Item, Input,Button,Label,Left,Right,Body,Title,Text } from 'native-base';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container   >
      <Header renderHeader = "center" backgroundColor = "#84cee8" >
           <Left/>
           <Body>
             <Title>Sign in</Title>
           </Body>
           <Right />
      </Header>     
      
      <Content>
        <Col style={{alignItems:'center'}}>
        <Image
      style= {{width: 200, height: 200}}
      source={require('./logo.png')}
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
            <Button primary><Text> Sign in </Text></Button>
          </Form>
      </Content>
      
    </Container>
    );
  }
}

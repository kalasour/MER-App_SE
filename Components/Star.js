import React, { Component } from 'react';
import { Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Container, Header, Content, Card, Title, CardItem, Textarea, Thumbnail, Form, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class Star extends Component {
  render() {
    ShowStar = (item) => {
      num = [1, 2, 3, 4, 5]
      avr = (Object.values(item).reduce((previous, current) => current += previous)) / Object.values(item).length;
      return num.map((item, index) => {
        if (item <= avr)
          return (<Icon key={index} type="FontAwesome" name="star" style={{ fontSize: 50, color: '#FEE12B' }} />)
        else
          return (<Icon key={index} type="FontAwesome" name="star" style={{ fontSize: 50, color: '#808080' }} />)
      })
    }
    return (
      <Container>

      <Header>
         <Left/>
        <Body>
            <Title>Rate It!</Title>
          </Body>
          <Right />
      </Header> 
        

        <Header>
          <Left />
          <Body>
            <Title>Rate It!</Title>
          </Body>
          <Right />
        </Header>


        <Content>
          {
            Object.keys(this.props.Selected.rate).map((key, index) => (
              <Card key={index}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text Styled='bold'>{key} </Text>
                      <Row>
                        {ShowStar(this.props.Selected.rate[key])}
                      </Row>
                    </Body>
                  </Left>
                </CardItem>


              </Card>
            ))

          }


        </Content>
      </Container>
    );
  }
}
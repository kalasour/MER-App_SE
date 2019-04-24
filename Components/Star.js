import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card,Title, CardItem,Textarea,Thumbnail,Form, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class Star extends Component {
  render() {
    return (
      <Container>
      <Header>
         <Left/>
        <Body>
            <Title>Rate It!</Title>
          </Body>
          <Right />
      </Header> 
        
        <Content>
          <Card>
            <CardItem>
              <Left>  
                <Icon type="FontAwesome" name="star" style={{fontSize: 50, color: '#FEE12B'}}/>
                <Body>
                  <Text Styled='bold'>Knowledge Level </Text>
                  <Image source={require('./resources/star.png')} style={{ height: 100, width: 600, flex: 1 }} />
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>

            <CardItem>
              <Left>  
                <Icon type="FontAwesome" name="star" style={{fontSize: 50, color: '#FEE12B'}}/>
                <Body>
                  <Text Styled='bold'>Hardness of content Level </Text>
                  <Image source={require('./resources/star.png')} style={{ height: 100, width: 600, flex: 1 }} />
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>  
                <Icon type="FontAwesome" name="star" style={{fontSize: 50, color: '#FEE12B'}}/>
                <Body>
                  <Text Styled='bold'>Assignmet Level </Text>
                  <Image source={require('./resources/star.png')} style={{ height: 100, width: 600, flex: 1 }} />
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>

                 <CardItem>
              <Left>  
                <Icon type="FontAwesome" name="star" style={{fontSize: 50, color: '#FEE12B'}}/>
                <Body>
                  <Text Styled='bold'>Hardness of examination Level </Text>
                  <Image source={require('./resources/star.png')} style={{ height: 100, width: 600, flex: 1 }} />
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>

                 <CardItem>
              <Left>  
                <Icon type="FontAwesome" name="star" style={{fontSize: 50, color: '#FEE12B'}}/>
                <Body>
                  <Text Styled='bold'>Funness Level </Text>
                  <Image source={require('./resources/star.png')} style={{ height: 100, width: 600, flex: 1 }} />
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          </Card>
          <Content padder>
          <Text Styled='bold'>Comment </Text>
          <Form>
            <Textarea rowSpan={5} bordered placeholder="Add your comment here." />
          </Form>
        </Content>
          
        </Content>
      </Container>
    );
  }
}
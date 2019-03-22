import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, Content, Card, CardItem, Col, Row, Left, Thumbnail, Body, Right } from 'native-base';
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import Teacher from './Teacher'
import Subject from './Subject'
import subject from './resources/subject.json'

class Home extends Component {
  static navigationOptions = {
    title: 'Home', header: null, drawerIcon: ({ tintColor }) => {
      return (<Icon name="home" style={{ width: 30, color: tintColor }} type="AntDesign" />);
    }
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    ListSubject = Object.keys(subject).map(key => {
      // if (
      //   Item.value.Detail.toLowerCase().search(
      //     this.state.SearchField.toLowerCase()
      //   ) != -1 ||
      //   Item.value.BE_ID.toLowerCase().search(
      //     this.state.SearchField.toLowerCase()
      //   ) != -1 ||
      //   Item.value.JM_ID.toLowerCase().search(
      //     this.state.SearchField.toLowerCase()
      //   ) != -1 ||
      //   Item.key.toLowerCase().search(this.state.SearchField.toLowerCase()) !=
      //   -1
      // )
      return (
        <Card key={key}  >
          <CardItem>
            <Left>
              <Thumbnail source={require('./resources/logo.png')} />
              <Body>
                <Text>{subject[key].name}</Text>
                <Text note>{key}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={require('./resources/logo.png')} style={{ height: 200, width: null, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>{parseInt(Math.random() * 20)} Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon style={{ color: '#f9ca2b' }} name="star" type="AntDesign" />
                <Text>{(Math.random() * 5).toPrecision(2)}</Text>
              </Button>
            </Body>
            <Right>
              <Button bordered info onPress={() => this.props.navigation.navigate("Details", {
                Selected: subject[key], Key: key
              })}><Text>See more</Text></Button>
            </Right>
          </CardItem>
        </Card>
      );
    });
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content padder >{ListSubject}</Content>
      </Container>
    );
  }
}


const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Subject: {
    screen: Subject,
  },
  Teacher: {
    screen: Teacher,
  },
  // Details: {
  //   screen: Details,
  // },
}, { drawerWidth: 200, navigationOptions: { title: 'Mer', header: null } });
export default MyDrawerNavigator;
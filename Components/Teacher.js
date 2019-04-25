import React, { Component } from 'react';
import { Image, YellowBox, TouchableHighlight } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, Content, Card, CardItem, Spinner, Col, Row, Left, Thumbnail, Body, Right, View } from 'native-base';
import { createDrawerNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";
import * as firebase from 'firebase/app'
import "firebase/auth";
import "firebase/database";
import Loading from './Loading'
export default class Teacher extends Component {
  static navigationOptions = {
    title: 'Teacher', header: null, drawerIcon: ({ tintColor }) => {
      return (<Icon name="chalkboard-teacher" style={{ width: 30, color: tintColor }} type="FontAwesome5" />);
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      Teacher: {},
      Loading: false,
      Search: ''
    };
  }
  async componentDidMount() {
    this.setState({ Loading: true })
    await firebase
      .database()
      .ref("Teacher")
      .on("value", snapshot => {
        this.setState({
          Teacher: snapshot.val()
          , Loading: false,
        });
      });

  }
  render() {
    return (
      <Container style={{backgroundColor:'#ecedc1'}}>
        <Loading Loading={this.state.Loading} ></Loading>
        <Header searchBar rounded style={{backgroundColor:'#ffaaa5'}}>
          <Item style={{backgroundColor:'#ffd3b6'}}>
            <Icon name="ios-search" />
            <Input placeholder="Search" value={this.state.Search} onChangeText={(Text) => { this.setState({ Search: Text }) }} />
            <TouchableHighlight disabled={this.state.Search == ''} onPress={() => this.setState({ Search: '' })}>
              <Icon name="circle-with-cross" type="Entypo" />
            </TouchableHighlight>
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <Content >
          {
            Object.keys(this.state.Teacher).sort((a, b) => {
              var nameA = this.state.Teacher[a].name.toLowerCase(), nameB = this.state.Teacher[b].name.toLowerCase()
              if (nameA < nameB)
                return -1
              if (nameA > nameB)
                return 1
              return 0
            }).filter((key) => {
              return ((this.state.Search == '') || (this.state.Teacher[key].name.toLowerCase().search(
                this.state.Search.toLowerCase()
              ) != -1))
            }).map(
              (key, index) => (
                <Card key={index} >
                  <CardItem button onPress={() => this.props.navigation.navigate("SelectTeacher", {
                    Selected: this.state.Teacher[key], Key: key
                  })} style={{backgroundColor:'#ffd3b6'}}>
                    <Icon active name="chalkboard-teacher" type="FontAwesome5" />
                    <Text> {this.state.Teacher[key].name} </Text>
                  </CardItem>
                </Card>
              )
            )
          }
        </Content>
      </Container>
    );
  }
}
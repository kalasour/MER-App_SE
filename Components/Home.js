import React, { Component } from 'react';
import { Image, YellowBox } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, Content, Card, CardItem, Spinner, Col, Row, Left, Thumbnail, Body, Right, View } from 'native-base';
import { createDrawerNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";
import Teacher from './Teacher'
import Subject from './Subject'
import Profile from './Profile'
import Loading from './Loading'
// import subject from './resources/subject.json'
import * as firebase from 'firebase/app'
import "firebase/auth";
import "firebase/database";
YellowBox.ignoreWarnings(['Setting a timer']);
class Home extends Component {
  static navigationOptions = {
    title: 'Home', header: null, drawerIcon: ({ tintColor }) => {
      return (<Icon name="home" style={{ width: 30, color: tintColor }} type="AntDesign" />);
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      Subject: {},
      Loading: true,
    };
  }
  GetData = async () => {
    await firebase
      .database()
      .ref("Subject")
      .on("value", snapshot => {
        this.setState({
          Subject: snapshot.val()
          , Loading: false
        });
      });
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // alert(email)

      } else {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Login" })]
        });
        this.props.navigation.dispatch(resetAction);
      }
    })

  };
  componentDidMount() {
    this.GetData();
  }
  render() {

    ListSubject = Object.keys(this.state.Subject).map(key => {
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
                <Text>{this.state.Subject[key].name}</Text>
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
                Selected: this.state.Subject[key], Key: key
              })}><Text>See more</Text></Button>
            </Right>
          </CardItem>
        </Card>
      );
    });
    return (
      <Container>
        <Loading Loading={this.state.Loading}></Loading>
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
  Profile: {
    screen: Profile,
  },
  // Details: {
  //   screen: Details,
  // },
}, { drawerWidth: 200, navigationOptions: { title: 'Mer', header: null } });
export default MyDrawerNavigator;
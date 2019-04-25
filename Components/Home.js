import React, { Component } from 'react';
import { Image, YellowBox, TouchableHighlight } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, Content, Picker, Card, CardItem, Spinner, Col, Row, Left, Thumbnail, Body, Right, View } from 'native-base';
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
      Search: "",
      Sort: 0,
      ASC: true
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
  calGPA = (key) => {
    weight = [4, 3, 3.5, 2, 2.5, 1, 1.5, 0]
    i = 0
    count = 0
    sum = 0;
    Object.values(((this.state.Subject[key].grade == null) ? {} : this.state.Subject[key].grade)).forEach(element => {
      sum += (element * weight[i])
      count += element
      i++
    });
    return (sum / ((count == 0) ? 1 : count)).toFixed(2)
  }
  componentDidMount() {
    this.GetData();
  }
  render() {

    ListSubject = Object.keys(this.state.Subject).sort((a, b) => {
      var nameA = this.state.Subject[a].name.toLowerCase()
      var nameB = this.state.Subject[b].name.toLowerCase()
      if (this.state.Sort == 0) {
        nameA = this.state.Subject[a].name.toLowerCase()
        nameB = this.state.Subject[b].name.toLowerCase()
      }
      if (this.state.Sort == 1) {
        nameA = this.calGPA(a)
        nameB = this.calGPA(b)
      }
      if (this.state.Sort == 2) {
        nameA = (this.state.Subject[a].viewed == null) ? 0 : this.state.Subject[a].viewed
        nameB = (this.state.Subject[b].viewed == null) ? 0 : this.state.Subject[b].viewed
      }
      if (nameA < nameB)
        return (this.state.ASC?-1:1)
      if (nameA > nameB)
        return (this.state.ASC?1:-1)
      return 0
    }).map(key => {
      if (
        this.state == "" ||
        key.toLowerCase().search(
          this.state.Search.toLowerCase()
        ) != -1 ||
        this.state.Subject[key].name.toLowerCase().search(
          this.state.Search.toLowerCase()
        ) != -1 ||
        this.state.Subject[key].detail.toLowerCase().search(
          this.state.Search.toLowerCase()
        ) != -1 ||
        this.state.Subject[key].teacher.toLowerCase().search(
          this.state.Search.toLowerCase()
        ) != -1
      )
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
              <Image source={require('./resources/computerEngineering.png')} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Text>
                    GPA : {this.calGPA(key)}
                  </Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Text style={{ color: '#f9ca2b', textAlign: 'left' }}>Viewed : {(this.state.Subject[key].viewed == null) ? 0 : this.state.Subject[key].viewed}</Text>
                </Button>
              </Body>
              <Right>
                <Button info onPress={async () => {
                  this.setState({ Loading: true })
                  firebase
                    .database()
                    .ref("Subject").child(key).child('viewed').set((this.state.Subject[key].viewed == null) ? 1 : (this.state.Subject[key].viewed + 1))
                  this.setState({ Loading: false })
                  this.props.navigation.navigate("Details", {
                    Selected: this.state.Subject[key], Key: key
                  })
                }}>

                  <Text style={{ color: '#EEF6F2' }}>See more</Text></Button>
              </Right>
            </CardItem>
          </Card>
        )
    });
    return (
      <Container style={{backgroundColor:'#a8e6cf'}}>
        <Loading Loading={this.state.Loading}></Loading>
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
        <Content padder >
          <Item picker>
          <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.Sort}
              onValueChange={(value) => this.setState({ Sort: value })}
            >
              <Picker.Item label="Name" value={0} />
              <Picker.Item label="GPA" value={1} />
              <Picker.Item label="Viewed" value={2} />
            </Picker>

            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.ASC}
              onValueChange={(value) => this.setState({ ASC: value })}
            >
              <Picker.Item label="ASC" value={true} />
              <Picker.Item label="DESC" value={false} />
            </Picker>
          </Item>
          {ListSubject}
        </Content>
      </Container>
    );
  }
}


const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  // Subject: {
  //   screen: Subject,
  // },
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
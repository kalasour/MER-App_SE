import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button,Form,Item,Label,Input } from 'native-base';
import { createDrawerNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";
import * as firebase from 'firebase/app'
import "firebase/auth";
export default class Profile extends Component {
  static navigationOptions = {
    title: 'Profile', header: null, drawerIcon: ({ tintColor }) => {
      return (<Icon name="person" style={{ width: 30, color: tintColor }} type="MaterialIcons" />);
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      Firstname: "",
      Lastname: "",
      Email: "",
      Password: "",
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
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
        this.setState({ Firstname: displayName, Email: email })

      } else {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Login" })]
        });
        this.props.navigation.dispatch(resetAction);
      }
    })
  }
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Firstname</Label>
              <Input value={this.state.Firstname} onChangeText={(Text) => { this.setState({ Firstname: Text }) }} />
            </Item>

            <Item floatingLabel>
              <Label>Lastname</Label>
              <Input value={this.state.Lastname} onChangeText={(Text) => { this.setState({ Lastname: Text }) }} />
            </Item>

            <Item floatingLabel>
              <Label>Email</Label>
              <Input value={this.state.Email} onChangeText={(Text) => { this.setState({ Email: Text }) }} />
            </Item>

            {/* <Item floatingLabel>
              <Label>Password</Label>
              <Input value={this.state.Password} secureTextEntry={true} onChangeText={(Text) => { this.setState({ Password: Text }) }} />
            </Item> */}

            <Button bordered full primary onPress={() => {
              var user=firebase.auth().currentUser
              user.updateProfile({displayName:this.state.Firstname})
              user.updateEmail(this.state.Email)
              alert('Updated')
              // firebase.auth().currentUser.updatePassword(this.state.Password)
            }}><Text> Save </Text></Button>
          </Form>
          <Button bordered full info onPress={() => {
            firebase.auth().signOut()
          }}><Text>Logout</Text></Button>
        </Content>
      </Container>
    );
  }
}
import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button, Form, Item, Label, Input, Thumbnail, Body, View } from 'native-base';
import { createDrawerNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";
import { Modal } from 'react-native';
import * as firebase from 'firebase/app'
import {

  TouchableHighlight
} from 'react-native';
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
      show: false,
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
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.show} >
          <View style={{ marginTop: 22 }}>
            <Text>Hello World!</Text>
            <TouchableHighlight
              onPress={() => {
                this.setState({ show: false })
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View> 
        </Modal>
        <Content>
          <Form>




            <CardItem >
              <TouchableHighlight onPress={() => this.setState({ show: true })}>
                <Thumbnail large source={{ uri: "https://lh3.googleusercontent.com/Row3WviPhvCPfld8ISJUz5oyEACXNG61f3g3tDgEGuVUaHGcsztmcM0AJU55Ue4OAxACa6NKrKxJxI7JVngKYe2PAoTgVk1IzIX35xJ1q9WG8B7IUDinvwb7-M8WxgSbHHeEfd3zT3wOYNHznRRg6T0lPaL1ulfPEXWuoLMz0wr7fSVU5RYUP326tD-IJE9ye2kj0ZNVdUqlXIIyKSgSQMrd1pE6PZ4oyuW6p0IxRqE5a4lGXFBNCEgFb6Bd7YXLHh6BXAC1qr6n8wNRYVgAtQJmDuzhxWaV46ySRV48JfbMbcxfp2za3OVbkr7kKDE2s6OmBA80iKgFfMM-_Zu-Bz3aCgo94KVVmF0SMNStT_fpVP4iL9J3RN81-DKmfv_pOS8mkvPpzNYVsTCy_Lpv6lRRHuuDVqo3BR0lbsZuhJhk78SmG8fNH_iPsQo91XppTgweXLuXmQQdJCn3UTYEbCf3h0_uj4FgVybfwM6Qp6BoY63FdoY9wbvfGKbkYiz5R0AOoTbFqbo_lqPeCRZWa3OiqlwwPHXXkisFa0c5gmtQsBMaUN0Zpz1LUQaSDrW3fl6kMgw-XrFzL-wHu3aVem-ctMcymH6DsbRmru25Iyv1UhFWMDe7Yddx5x2R2fLg28bQGWPnB-7l9CIpXrNYzA7VwIRvGkfptK1iAlac_XFwZAtj0d1k5xvI6WiFeIzlxia9cELEXBuZdu8CRhSSBTIf=s379-no" }} />
              </TouchableHighlight>
            </CardItem>

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
              <Input disabled value={this.state.Email} onChangeText={(Text) => { this.setState({ Email: Text }) }} />
            </Item>

            {/* <Item floatingLabel>
              <Label>Password</Label>
              <Input value={this.state.Password} secureTextEntry={true} onChangeText={(Text) => { this.setState({ Password: Text }) }} />
            </Item> */}
          </Form>


          <Row >
            <Col >
              <Button style={{ alignSelf: "center" }} bordered primary onPress={() => {
                var user = firebase.auth().currentUser
                user.updateProfile({ displayName: this.state.Firstname })
                user.updateEmail(this.state.Email)
                alert('Updated')
                // firebase.auth().currentUser.updatePassword(this.state.Password)
              }}><Text> Save </Text></Button>
            </Col>
            <Col >
              <Button style={{ alignSelf: "center" }} bordered danger onPress={() => {
                firebase.auth().signOut()
              }}><Text>Logout</Text></Button>
            </Col>
          </Row>
          
        </Content>
      </Container>
    );
  }
}
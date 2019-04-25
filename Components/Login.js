import React, { Component } from 'react';
import { Image,Modal ,TouchableHighlight} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Container, Header, Content, View,Form, Item,Spinner, Input, Button, Label, Left, Right, Body, Title, Text } from 'native-base';
import {
  StackActions,
  NavigationActions
} from "react-navigation";
import * as firebase from 'firebase/app'
import "firebase/auth";
export default class Login extends Component {
  static navigationOptions = { title: 'Mer', header: null };
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: "",
      logging:false,
    };
  }
  login = async () => {
    this.setState({logging:true})
    firebase.auth().signInWithEmailAndPassword(this.state.Username, this.state.Password).catch((error)=> {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
      this.setState({logging:false})

      // ...
    });
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        this.setState({logging:false})
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // alert(email)
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Home" })]
        });
        this.props.navigation.dispatch(resetAction);
      } else {
        
      }
    });
  }
  render() {
    return (
      <Container  style={{backgroundColor:'#a8d8ea'}} >
        <Header renderHeader="center" style={{backgroundColor:'#ffaaa5'}}>
          <Left />
          <Body>
            <Title>log in</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Col style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 200, height: 200 }}
              source={require('./resources/logo.png')}
            />
          </Col>
          <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.logging}
         >
         <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{marginTop: 22}}>
            <View>
            <Spinner color='red' />

            </View>
          </View>
          </Container>
        </Modal>
          <Form>
            <Item floatingLabel>
              <Label>E-mail</Label>
              <Input value={this.state.Username} onChangeText={(Text) => { this.setState({ Username: Text }) }} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input value={this.state.Password} secureTextEntry={true} onChangeText={(Text) => { this.setState({ Password: Text }) }} />
            </Item>
            <Button style={{ alignSelf: 'center', marginTop: 10 , backgroundColor: '#e0f9b5'}} primary onPress={() => {
              this.login()
            }} ><Text> login </Text></Button>
            <Button style={{ alignSelf: 'center', marginTop: 10 , backgroundColor: '#ffd3b6'}} primary onPress={() => {
              this.props.navigation.navigate('Register')
            }} ><Text> Register </Text></Button>
          </Form>
        </Content>

      </Container>
    );
  }
}

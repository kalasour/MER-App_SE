import React, { Component } from 'react';
import { Image, Modal, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid'
import { View, Container, Header, Content, Card, Title, CardItem, Textarea, Thumbnail, Form, Text, Button, Icon, Left, Body, Right } from 'native-base';
import * as firebase from 'firebase/app'
import "firebase/auth";
import "firebase/database";
import Loading from './Loading'
export default class Star extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      uid: '',
      loading: false,
    };
  }
  async componentDidMount() {
    if (firebase.auth().currentUser !== null)
      await this.setState({ uid: firebase.auth().currentUser.uid })

    await Object.keys(this.props.Selected.rate).map((key, index) => {
      this.setState({ [key]: ((this.props.Selected.rate[key][this.state.uid] == null) ? 0 : this.props.Selected.rate[key][this.state.uid]) })
    })
  }
  Submit = async () => {
    this.setState({ loading: true })
    await Object.keys(this.props.Selected.rate).map((key, index) => {
      this.props.Selected.rate[key][this.state.uid] = this.state[key]
    })
    await firebase
      .database()
      .ref("Subject").child(this.props.ID).update(this.props.Selected)
    this.setState({ loading: false, show: false })
  }
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

    ShowStarModal = (key) => {
      num = [1, 2, 3, 4, 5]
      avr = this.state[key]
      return num.map((item, index) => {
        if (item <= avr)
          return (<TouchableOpacity key={index} onPress={() => this.setState({ [key]: index + 1 })}><Icon key={index} type="FontAwesome" name="star" style={{ fontSize: 50, color: '#FEE12B' }} /></TouchableOpacity>)
        else
          return (<TouchableOpacity key={index} onPress={() => this.setState({ [key]: index + 1 })}><Icon key={index} type="FontAwesome" name="star" style={{ fontSize: 50, color: '#808080' }} /></TouchableOpacity>)
      })
    }
    return (
      <Container style={{backgroundColor:'#a8d8ea'}}>
      <Loading Loading={this.state.loading}></Loading>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.show}
        >
          <Container style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <Container style={{ width: '80%' }}>
              <Content >
                <Text style={{ margin: 20 }}>Fill your rate about this subject...</Text>
                {
                  Object.keys(this.props.Selected.rate).map((key, index) => {

                    return (
                      <Card key={index} >
                        <CardItem>
                          <Left>
                            <Body>
                              <Text Styled='bold'>{key} </Text>
                              <Row>
                                {ShowStarModal(key)}
                              </Row>
                            </Body>
                          </Left>
                        </CardItem>
                      </Card>
                    )
                  })
                }
                <Button full bordered success style={{ margin: 10 }} onPress={() => this.Submit()}><Text>Submit</Text></Button>
                <Button full bordered danger style={{ margin: 10 }} onPress={() => this.setState({ show: false })}><Text>Cancel</Text></Button>
              </Content>
            </Container>
          </Container>
        </Modal>
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
          <Button full bordered success style={{ margin: 10 }} onPress={() => this.setState({ show: true })}><Text>Your assessment</Text></Button>
        </Content>
      </Container>
    );
  }
}
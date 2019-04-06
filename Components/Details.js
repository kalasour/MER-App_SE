import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button,Textarea, Form,Card,CardItem } from 'native-base';
export default class Details extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Selected: {},
      ID: ""
    };
  }
  componentDidMount() {
    // const { navigation } = this.props;
    // this.setState({ Selected: navigation.getParam("Selected", "error"), ID: navigation.getParam("Key", "error") });
    // this.setState({ Selected:this.props.Selected, ID: this.props.ID });
  }
  render() {
    return (
      <Container>
        <Content>
          <Button transparent block style={{margin:15}}>
            <Text style={{color:'#000000'}}>{this.props.Selected.name}</Text>
          </Button>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="idcard" type="AntDesign" />
              </Button>
            </Left>
            <Body>
              <Text>Subject ID :</Text>
            </Body>
            <Right>
              <Text>{this.props.ID}</Text>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="chalkboard-teacher" type="FontAwesome5" />
              </Button>
            </Left>
            <Body>
              <Text>Teacher :</Text>
            </Body>
            <Right>
              <Text>{this.props.Selected.teacher}</Text>
            </Right>
          </ListItem>
          <Card style={{marginTop:15}}>
            <CardItem>
              <Body>
              <Text >{this.props.Selected.detail}</Text>
              </Body>
            </CardItem>
          </Card>
            
        </Content>
      </Container>
    );
  }
}

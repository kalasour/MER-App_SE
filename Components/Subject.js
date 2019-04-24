import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';

export default class Subject extends Component {
  static navigationOptions = {
    title: 'Subject', header: null, drawerIcon: ({ tintColor }) => {
      return (<Icon name="subject" style={{ width: 30, color: tintColor }} type="MaterialIcons" />);
    }
  };
    constructor(props) {
        super(props);
        this.state = {
        };``
      }
  
    render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Text> 261430 - Wireless Networks </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> 261421 - Computer Hardware Design  </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> 261497 - Selected Topics in Software (Competitive Programming)  </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> 261497 - Selected Topics in Software (iOS Development using Swift) </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> 261479 - Bioinformatics Programming </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> 261444 - Advanced Database Systems </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> 261499 - Selected Topic in CI (Natural Language Processing) </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> 261446 - Information Systems </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> 261449 - Software Testing </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> 261465 - Computer Graphics </Text>
             </CardItem>
           </Card>
        <Card>
            <CardItem>
              <Text> 261448 - Data Mining for Computer Engineering </Text>
             </CardItem>
           </Card>
        <Card>
            <CardItem>
              <Text> 261473 - Computer-Aided Manufacturing </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> 269431 - Wireless Sensor Network </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> 261433 - Network Programming </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> 261497 - Selected Topics in Software (Personal Software Process) </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> 261453 - Digital Image Processing </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> 269421 - Computer Network Traffic Analysis </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> 261494 - Adv./Selected Topics in CPE (R for Data science) </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> 261438 - MPLS </Text>
             </CardItem>
           </Card>
        </Content>
      </Container>
    );
  }
}
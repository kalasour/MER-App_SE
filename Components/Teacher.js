import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';

export default class Teacher extends Component {
  static navigationOptions = {
    title: 'Teacher', header: null, drawerIcon: ({ tintColor }) => {
      return (<Icon name="chalkboard-teacher" style={{ width: 30, color: tintColor }} type="FontAwesome5" />);
    }
  };
    constructor(props) {
        super(props);
        this.state = {
        };
      }
  
    render() {
    return (
      <Container>
        <Content>
           <Card>
            <CardItem>
              <Text> Anya Apavatjrut </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> Arnan Sipitakiat </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> Chinawat Isradisaikul </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> Dome Potikanond </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> Juggapong Natwichai </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> Karn Patanukhom </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> Kenneth Cosh </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> Lachana Ramingwong </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> Narathip Tiangtae </Text>
             </CardItem>
           </Card>
        <Card>
            <CardItem>
              <Text> Narissara Eiamkanitchat </Text>
             </CardItem>
           </Card>
        <Card>
            <CardItem>
              <Text> Paskorn Champrasert </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> Pruet Boonma </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> Patiwet Wuttisarnwattana </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> Sakgasit Ramingwong </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> Sansanee Auephanwiriyakul </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> Trasapong Thaiupathump </Text>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Text> Yuthapong Somchit </Text>
             </CardItem>
           </Card>
        </Content>
      </Container>
    );
  }
}
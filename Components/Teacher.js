import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right ,View} from 'native-base';

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
        <Header>
          <View >
            <Text style={{alignItems:'center',padding:15,fontSize:25,color:'#f0f8ff'}}>TEACHER</Text>
          </View>
        </Header>
          
        <Content>
          <Text>    A</Text>
          <Card>
            <CardItem  style={{backgroundColor:'#87cefa'}}>
              <Icon active name="chalkboard-teacher" type="FontAwesome5" />
              <Text> Anya Apavatjrut </Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem  style={{backgroundColor:'#87cefa'}}>
              <Icon active name="chalkboard-teacher" type="FontAwesome5" />
              <Text> Arnan Sipitakiat </Text>
            </CardItem >
          </Card>
          <Text>    C</Text>
          <Card>
            <CardItem style={{backgroundColor:'#87cefa'}}>
              <Icon active name="chalkboard-teacher" type="FontAwesome5" />
              <Text> Chinawat Isradisaikul </Text>
            </CardItem>
          </Card>
          <Text>    D</Text>
          <Card>
            <CardItem style={{backgroundColor:'#87cefa'}}>
              <Icon active name="chalkboard-teacher" type="FontAwesome5" />
              <Text> Dome Potikanond </Text>
            </CardItem>
          </Card>
          <Text>   J</Text>
          <Card>
            <CardItem  style={{backgroundColor:'#87cefa'}}>
              <Icon active name="chalkboard-teacher" type="FontAwesome5" />
              <Text> Juggapong Natwichai </Text>
            </CardItem>
          </Card>
          <Text>    K</Text>
          <Card>
            <CardItem  style={{backgroundColor:'#87cefa'}}>
              <Icon active name="chalkboard-teacher" type="FontAwesome5" />
              <Text> Karn Patanukhom </Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={{backgroundColor:'#87cefa'}}>
              <Icon active name="chalkboard-teacher" type="FontAwesome5" />
              <Text> Kenneth Cosh </Text>
            </CardItem>
          </Card>
          <Text>    L</Text>
          <Card>
            <CardItem style={{backgroundColor:'#87cefa'}}>
              <Icon active name="chalkboard-teacher" type="FontAwesome5" />
              <Text> Lachana Ramingwong </Text>
            </CardItem>
          </Card>
          <Text>    N</Text>
          <Card>
            <CardItem style={{backgroundColor:'#87cefa'}}>
              <Icon active name="chalkboard-teacher" type="FontAwesome5" />
              <Text> Narathip Tiangtae </Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={{backgroundColor:'#87cefa'}}>
              <Icon active name="chalkboard-teacher" type="FontAwesome5" />
              <Text> Narissara Eiamkanitchat </Text>
            </CardItem>
          </Card>
          <Text>    P</Text>
          <Card>
            <CardItem  style={{backgroundColor:'#87cefa'}}>
              <Icon active name="chalkboard-teacher" type="FontAwesome5" />
              <Text> Paskorn Champrasert </Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem  style={{backgroundColor:'#87cefa'}}>
              <Icon active name="chalkboard-teacher" type="FontAwesome5" />
              <Text> Pruet Boonma </Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem  style={{backgroundColor:'#87cefa'}}>
              <Icon active name="chalkboard-teacher" type="FontAwesome5" />
              <Text> Patiwet Wuttisarnwattana </Text>
            </CardItem>
          </Card>
          <Text>    S</Text>
          <Card>
            <CardItem  style={{backgroundColor:'#87cefa'}}>
              <Icon active name="chalkboard-teacher" type="FontAwesome5" />
              <Text> Sakgasit Ramingwong </Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem  style={{backgroundColor:'#87cefa'}}>
              <Icon active name="chalkboard-teacher" type="FontAwesome5" />
              <Text> Sansanee Auephanwiriyakul </Text>
            </CardItem>
          </Card>
          <Text>    T</Text>
          <Card>
            <CardItem  style={{backgroundColor:'#87cefa'}}>
              <Icon active name="chalkboard-teacher" type="FontAwesome5" />
              <Text> Trasapong Thaiupathump </Text>
            </CardItem>
          </Card>
          <Text>    Y</Text>
          <Card>
            <CardItem  style={{backgroundColor:'#87cefa'}}>
              <Icon active name="chalkboard-teacher" type="FontAwesome5" />
              <Text> Yuthapong Somchit </Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
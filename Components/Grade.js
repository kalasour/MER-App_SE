import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, View,Left, Body} from 'native-base';

export default class Grade extends Component {
  render() {
    return (
      
      <Container>
        <Content>
          <Card style={{ height: 50,marginTop:10 }} >
          
            <View style={{alignItems: 'center',marginTop:10}}>
              <Text>STATISTICS </Text>
            </View>
          </Card>
          
          <Card style={{marginTop:10 }} >
            <CardItem>
              <View style={{marginTop:10}}>
              <Text >GRADE: A      20%</Text>
              </View>
            </CardItem> 
            
            <CardItem>
              <View style={{marginTop:10}}>
              <Text >GRADE: B+     20%</Text>
              </View>
            </CardItem>
           
            <CardItem>
              <View style={{marginTop:10}}>
              <Text >GRADE: B      20%</Text>
              </View>
            </CardItem>
          
            <CardItem>
              <View style={{marginTop:10}}>
              <Text >GRADE: C+     20%</Text>
              </View>
            </CardItem>
           
            <CardItem>
              <View style={{marginTop:10}}>
              <Text >GRADE: C      20%</Text>
              </View>
            </CardItem>
          
            <CardItem>
              <View style={{marginTop:10}}>
              <Text >GRADE: D+      20%</Text>
              </View>
            </CardItem>
         
            <CardItem>
              <View style={{marginTop:10}}>
              <Text >GRADE: D      20%</Text>
              </View>
            </CardItem>
           
            <CardItem>
              <View style={{marginTop:10}}>
              <Text >GRADE: F      20%</Text>
              </View>
            </CardItem>
           </Card>
            
        </Content>
      </Container>

     
    );
}
}

     
      
 
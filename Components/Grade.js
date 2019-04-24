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

     
      
 
=======
import { View } from 'react-native';
import { Thumbnail, Container, Header, Content, Card, Title, CardItem, Textarea, Form, Text, Button, Icon, Left, Body, Right } from 'native-base';
import LineChart from "react-native-responsive-linechart";
export default class Grade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            labels: [],
        };
    }
    componentDidMount() {
        this.setState({ data: Object.values(this.props.Selected.grade), labels: Object.keys(this.props.Selected.grade) })
    }
    render() {

        const config = {
            line: {
                visible: true,
                strokeWidth: 2,
                strokeColor: "#341f97"
            },
            area: {
                visible: false
            },
            yAxis: {
                visible: true,
                labelFormatter: v => String(v) + " peoples"
            },
            xAxis: {
                visible: true
            },
            grid: {
                stepSize: 1
            },
            insetY: 10,
            insetX: 10
        };
        return (
                <LineChart style={{ flex: 1 }} config={config} data={this.state.data} xLabels={this.state.labels} />
        );
    }
}
>>>>>>> 8109089b82e5aef06e645d8f97066b040a73e6b5

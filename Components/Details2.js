import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab,Text } from 'native-base';
import Rate from './Star'
import Details from './Details'
import * as firebase from 'firebase/app'
import "firebase/auth";
import "firebase/database";
import Comment from './Comment'
import Grade from './Grade'
// import Tab1 from './tabOne';

// import Tab5 from './tabFive';
export default class Details2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Selected: {},
      ID: ""
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    this.setState({ Selected: navigation.getParam("Selected", "error"), ID: navigation.getParam("Key", "error") });
  }
  calGPA=()=>{
    weight=[4,3,3.5,2,2.5,1,1.5,0]
    i=0
    count=0
    sum=0;
    Object.values((this.state.Selected.grade==null)?{}:this.state.Selected.grade).forEach(element => {
      sum+=(element*weight[i])
      count+=element
      i++
    });
    return (sum/((count==0)?1:count)).toFixed(2)
  }
  render() {
    return (
      <Container>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Details" >
            <Details Selected={this.state.Selected} ID={this.state.ID} />
          </Tab>
          <Tab heading="Grade">
          <Text style={{textAlign:"center",fontSize:20,margin:10}}>GPA  :  {this.calGPA()}</Text>
            <Grade Selected={this.state.Selected} ID={this.state.ID}></Grade>
            <Text> </Text>
          </Tab>
          <Tab heading="Comment">
            <Comment Selected={this.state.Selected} ID={this.state.ID}></Comment>
          </Tab>
          <Tab heading="Rating">
            <Rate Selected={this.state.Selected} ID={this.state.ID} />
          </Tab>
          <Tab heading="Tab5">
            {/* <Tab5 /> */}
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
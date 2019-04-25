import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab, Text, Picker, Item, Icon } from 'native-base';
import Rate from './Star'
import Details from './Details'
import * as firebase from 'firebase/app'
import "firebase/auth";
import "firebase/database";
import Comment from './Comment'
import Grade from './Grade'
import Loading from './Loading'
// import Tab1 from './tabOne';

// import Tab5 from './tabFive';
export default class Details2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Selected: {},
      ID: "",
      uid: '',
      Loading: false
    };
  }
  async componentDidMount() {
    const { navigation } = this.props;
    this.setState({ Selected: navigation.getParam("Selected", "error"), ID: navigation.getParam("Key", "error") });
    if (firebase.auth().currentUser !== null)
      await this.setState({ uid: firebase.auth().currentUser.uid })
  }
  calGPA = () => {
    weight = [4, 3, 3.5, 2, 2.5, 1, 1.5, 0]
    i = 0
    count = 0
    sum = 0;
    Object.values((this.state.Selected.grade == null) ? {} : this.state.Selected.grade).forEach(element => {
      sum += (element * weight[i])
      count += element
      i++
    });
    return (sum / ((count == 0) ? 1 : count)).toFixed(2)
  }
  Change = async (text) => {
    this.setState({ Loading: true })
    if (this.state.Selected[this.state.uid] != null)
      await this.setState((previousState) => {
        previousState.Selected.grade[this.state.Selected[this.state.uid]] = previousState.Selected.grade[this.state.Selected[this.state.uid]] - 1;
        return previousState;
      })

    if (text != null)
      await this.setState((previousState) => {
        previousState.Selected.grade[text] = previousState.Selected.grade[text] + 1;
        return previousState;
      })

    await this.setState((previousState) => {
      previousState.Selected[this.state.uid] = text
      return previousState;
    })
    await firebase
      .database()
      .ref("Subject").child(this.state.ID).update(this.state.Selected)
    this.setState({ Loading: false })
  }
  render() {
    return (
      <Container>
        <Loading Loading={this.state.Loading}></Loading>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Details" >
            <Details Selected={this.state.Selected} ID={this.state.ID} />
          </Tab>
          <Tab heading="Grade">
            <Text style={{ textAlign: "center", fontSize: 20, margin: 10 }}>GPA  :  {this.calGPA()}</Text>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your Grade"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.Selected[this.state.uid]}
                onValueChange={(text) => { this.Change(text) }}
              >
                <Picker.Item label="Select your Grade" value={null} />
                <Picker.Item label="A" value="A" />
                <Picker.Item label="B+" value="B+" />
                <Picker.Item label="B" value="B" />
                <Picker.Item label="C+" value="C+" />
                <Picker.Item label="C" value="C" />
                <Picker.Item label="D+" value="D+" />
                <Picker.Item label="D" value="D" />
                <Picker.Item label="F" value="F" />
              </Picker>
            </Item>
            <Grade Selected={this.state.Selected} ID={this.state.ID}></Grade>
            <Text></Text>
          </Tab>
          <Tab heading="Comment">
            <Comment Selected={this.state.Selected} ID={this.state.ID}></Comment>
          </Tab>
          <Tab heading="Rating">
            <Rate Selected={this.state.Selected} ID={this.state.ID} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
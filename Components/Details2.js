import React, { Component } from 'react';
<<<<<<< HEAD
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import Rate from './star'
// import Tab1 from './tabOne';
=======
import { Container, Header, Tab, Tabs, ScrollableTab,Text } from 'native-base';
import Details from './Details';
>>>>>>> beb7f59f04db3c13ad86fd71ca02291b3c2a0416

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
  render() {
    return (
      <Container>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Details" >
            <Details Selected={this.state.Selected}  ID={this.state.ID} />
          </Tab>
          <Tab heading="Grade">
            {/* <Tab2 /> */}
          </Tab>
          <Tab heading="Comment">
            {/* <Tab3 /> */}
          </Tab>
          <Tab heading="Rating">
            <Rate/>
          </Tab>
          <Tab heading="Tab5">
            {/* <Tab5 /> */}
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
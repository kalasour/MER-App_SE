import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
// import Tab1 from './tabOne';

// import Tab5 from './tabFive';
export default class Details2 extends Component {
  render() {
    return (
      <Container>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Details">
            {/* <Tab1 /> */}
          </Tab>
          <Tab heading="Grade">
            {/* <Tab2 /> */}
          </Tab>
          <Tab heading="Comment">
            {/* <Tab3 /> */}
          </Tab>
          <Tab heading="Rating">
            {/* <Tab4 /> */}
          </Tab>
          <Tab heading="Tab5">
            {/* <Tab5 /> */}
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
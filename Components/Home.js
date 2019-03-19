import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import Details from './Details'


class Home extends Component {
    static navigationOptions = { title: 'Mer', header: null };
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
        );
    }
}


const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Home,
    },
    Details: {
        screen: Details,
    },
}, { navigationOptions: { title: 'Mer', header: null } });
export default MyDrawerNavigator;
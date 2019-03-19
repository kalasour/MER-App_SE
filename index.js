/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from './Components/Login'
import Register from './Components/Register'
import Home from './Components/Home'
import Details from './Components/Details'
const AppNavigator = createStackNavigator({
    App: {
        screen: App
    }, Login: {
        screen: Login
    }, Register: {
        screen: Register
    }, Home: {
        screen: Home
    }, Details: {
        screen: Details
    }
},
    {
        initialRouteName: "App"
    });
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => createAppContainer(AppNavigator));

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
import Subject from './Components/Subject'
import Teacher from './Components/Teacher'
import Details2 from './Components/Details2'

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
        screen: Details2
    }, Subject:{
        screen: Subject
    }, Teacher:{
        screen: Teacher
    }
    

    
},
    {
        initialRouteName: "App"
    });
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => createAppContainer(AppNavigator));

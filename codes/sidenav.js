import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";

//library imports
import { Container, Content, Icon, Header, Body } from 'native-base'
import { DrawerNavigator, DrawerItems} from 'react-navigation'

//custom files

import SettingScreen from './SettingScreen';
import Profile from "./Profile";
import Favourites from "./Favourites";
import AddBusiness from "./AddBusiness";
import Logout from "./Logout";

export default class App extends Component {

  render() {
    return (
      <MyApp />
    )
  }
}



const MyApp = DrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Profile: {
    screen: Profile,
  },
  Settings: {
    screen: SettingScreen
  },
  Favourites: {
    screen: Favourites
  },
  AddBusiness: {
    screen: AddBusiness
  },
  Logout: {
    screen: Logout
  }

},{
    drawerPosition :'right'
  }

);

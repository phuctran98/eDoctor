import React, { Component } from 'react'
import TabNavigation from './screen/bottonNavigation'
import HomeScreen from './screen/Home'
import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';

const stack = createStackNavigator({
  TabNavigation: {
    screen: TabNavigation,
    navigationOptions: {
      header:null
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title:'Xet nghiem tai nha'
      // header:null
    }
  },
  // Trangchu: {
  //   screen: TrangchuScreen,
  //   navigationOptions: {
  //     header:null
  //   }
  // },
  },
  {
    initialRouteName: 'TabNavigation',
  },

)

export default createAppContainer(stack);


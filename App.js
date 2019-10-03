import React, { Component } from 'react'
import TabNavigation from './screen/bottonNavigation'
import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';

const stack = createStackNavigator({
  TabNavigation: {
    screen: TabNavigation,
    navigationOptions: {
      header:null
    }
  },
})

export default createAppContainer(stack);


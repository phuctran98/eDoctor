import React, { Component } from 'react'
import TabNavigation from './screen/bottonNavigation'
import XNTNScreen from './screen/XNTN'
import GoiXntqScreen from './screen/GoiXntq'
import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';

const stack = createStackNavigator({
  TabNavigation: {
    screen: TabNavigation,
    navigationOptions: {
      header:null
    }
  },
  XNTN: {
    screen: XNTNScreen,
    navigationOptions: {
      title:'Xét nghiệm tại nhà'
      // header:null
    }
  },
  GoiXntq: {
    screen: GoiXntqScreen,
    navigationOptions: {
      title:'Gói xét nghiệm tổng quát'
    }
  },
  },
  {
    initialRouteName: 'TabNavigation',
  },

)

export default createAppContainer(stack);


import React, { Component } from 'react'
import TabNavigation from './screen/bottonNavigation'
import XNTNScreen from './screen/XNTN'
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


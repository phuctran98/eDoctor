import React, { Component } from 'react'
import TabNavigation from './screen/bottonNavigation'
import XNTNScreen from './screen/XNTN'
import ItemXntnScreen from './component/ItemXntn'
import GoiXntqScreen from './screen/GoiXntq'
import datLichHenScreen from './screen/datLichHen'
import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screen/Login'

const stack = createStackNavigator({
  TabNavigation: {
    screen: TabNavigation,
    navigationOptions: {
      header:null
    },
    tabBarOptions :{
      activeTintColor : 'blue'
    }
  },
  XNTN: {
    screen: XNTNScreen,
    navigationOptions: {
      title:'Xét nghiệm tại nhà',
      // header:null
    }
  },
  ItemXntn: {
    screen: ItemXntnScreen,
    navigationOptions: {
      title:'Xét nghiệm tại nhà',
      header:null
    }
  },
  GoiXntq: {
    screen: GoiXntqScreen,
    navigationOptions: {
      title:'Gói xét nghiệm tổng quát',
      header:null
    }
  },
  datLichHen: {
    screen: datLichHenScreen,
    navigationOptions: {
      title:'Đặt lịch hẹn',
      // header:null
    }
  },
  login: {
    screen: Login,
    navigationOptions: {
      title:'Đặt lịch hẹn'
    }
  },
  },
  
  {
    initialRouteName: 'TabNavigation',
  },

)

export default createAppContainer(stack);


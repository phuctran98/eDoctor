import { createBottomTabNavigator} from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'
import {Text} from 'react-native'
import React, { Component } from 'react'
import Trangchu from './Trangchu'
import Lichhen from './Lichhen'
import Congdong from './Congdong'
import Hoso from './Hoso'

const TabNavigation = createBottomTabNavigator({
  Trangchu: {
    screen: Trangchu,
    navigationOptions: {
      title : 'Trang chủ',
      tabBarLabel: ({ tintColor }) => { return <Text style={{ color: "#94908f", textAlign:'center',fontSize : 12 }}>Trang chủ</Text> },
      tabBarIcon: (params) => {
        return <Icon color={"#94908f"} type='font-awesome' name="home" size={18} />
      }
    },
    
    // tabBarOptions:{activeTintColor:'blue'},

  },
  Lichhen: {  
    screen: Lichhen,
    navigationOptions: {
      tabBarLabel: ({ tintColor }) => { return <Text style={{ color: "#94908f", textAlign:'center',fontSize : 12 }}>Lịch hẹn</Text> },
      tabBarIcon: (params) => {
        return <Icon color={"#94908f"} type='font-awesome' name="calendar" size={18} />
      }, 
      title : 'Lịch hẹn',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    tabBarOptions:{activeTintColor:'blue'},
  },
  Congdong: {  
    screen: Congdong,
    navigationOptions: {
      // title : 'Cộng đồng',
      tabBarLabel: ({ tintColor }) => { return <Text style={{ color: "#94908f", textAlign:'center',fontSize : 12 }}>Cộng đồng</Text> },
      tabBarIcon: (params) => {
        return <Icon color={"#94908f"} type='font-awesome' name="users" size={18} />
      }, 
    },
  },
  Hoso: {  
    screen: Hoso,
    navigationOptions: {
      title : 'Hồ sơ',
      tabBarLabel: ({ tintColor }) => { return <Text style={{ color: "#94908f", textAlign:'center',fontSize : 12}}>Hồ sơ</Text> },
      tabBarIcon: (params) => {
        return <Icon color={"#94908f"} type='font-awesome' name="user-md" size={18} />
      }, 
    },
  },
},
{
  initialRouteName: 'Trangchu',
},
{
  tabBarOptions: {
  activeTintColor: '#e91e63',
  labelStyle: {
    fontSize: 12,
  },
  style: {
    backgroundColor: 'blue',
  },
}}

)
export default TabNavigation

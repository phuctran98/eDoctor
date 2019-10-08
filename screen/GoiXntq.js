import React from 'react';
import {StyleSheet,FlatList,Text,View} from 'react-native';
import datagoixntq from '../data/datagoixntq'
import ItemGoixntq from '../component/ItemGoixntq'
import { Icon } from 'react-native-elements';
// import { ScrollView } from 'react-native-gesture-handler';

export default class XNTN extends React.Component {
  constructor(props) {
    super(props);
    this.onPressBook = this.onPressBook.bind(this);
  }
  onPressBook(){
    this.props.navigation.navigate('GoiXntq')
  }
  render() {
    return (
      
            <FlatList 
            data={datagoixntq}
            renderItem={({item}) =><ItemGoixntq yyy={item} onPressBook={this.onPressBook.bind(this)} /> }

            />
      
    );
  }
}

const styles = StyleSheet.create({
  viewx:{
    height:700,
    width:'100%',
    backgroundColor:'#e9f7f1'
  },
  view_1:{
    height: 30,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:0.3,
    backgroundColor:'white',
  },
});

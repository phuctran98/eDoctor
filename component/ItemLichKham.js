import React from 'react';
import {StyleSheet,FlatList,Text,View, TouchableOpacity} from 'react-native';
import datalichkham from '../data/datalichkham'
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
export default class GoiXntq extends React.Component {
  constructor(){
    super()
  }
  render() {
    let selected =  this.props?.selectedIndex || 0;
    return (
      <TouchableOpacity onPress={()=>{this.props.selected(this.props.index)}} style = {[styles.viewx ,(selected === this.props.index) ?{borderColor:'red'}:{borderColor:'green'}]}>
                    <View style ={styles.view1}>
                        <View style={{flex:65,borderTopEndRadius:5,marginLeft:15}}>
                            <Text style={{fontSize:15}}>{this.props.item.day}</Text>
                        </View>
                    </View>
                    
                    <View style ={styles.view1}>
                        <View style={{flex:65,borderTopEndRadius:5,marginLeft:15}}>
                            <Text style={{fontSize:15}}>{this.props.item.time}</Text>
                        </View>
                    </View>
                    
                    {/* view1 */}         
      </TouchableOpacity> 
      
    );
  }
}

const styles = StyleSheet.create({
  viewx:{
    flex:1,
    height:'100%',
    borderRadius:5,
    backgroundColor:'white',
    borderWidth :2
  },
  


});

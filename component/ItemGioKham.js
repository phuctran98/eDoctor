import React from 'react';
import {StyleSheet,FlatList,Text,View, TouchableOpacity} from 'react-native';
export default class GoiXntq extends React.Component {
  constructor(){
    super()
  }
  render() {
    let picker =  this.props?.pickedIndex || 0;
    return (
                    <View style={{height:40,flexDirection:'row',}}>
                    <TouchableOpacity  onPress={()=>{this.props.picked(this.props.index)}} style = {[styles.time ,(picker === this.props.index) ?{backgroundColor:'blue'}:{backgroundColor:'#e9f7f1'}]}>
                          <Text style={{marginRight:5}}>{this.props.item.time}</Text>
                          <Text>{this.props.item.buoi}</Text>
                    </TouchableOpacity>
                </View>
    );
  }
}

const styles = StyleSheet.create({
    time:{
        flexDirection:'row',
        backgroundColor:'#e9f7f1',
        width:100,
        borderRadius:5,
        marginTop:15,
        marginLeft:12,
        justifyContent:'center',
        alignItems:'center'
      }


});

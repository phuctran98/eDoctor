import React from 'react';
import {StyleSheet,FlatList,Text,View, ImageBackground} from 'react-native';
import datagoixntq from '../data/datagoixntq'
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
export default class GoiXntq extends React.Component {

  render() {
    return (
      <ScrollView style = {styles.viewx}>
                    <View style ={styles.view1}>
                        <View style={{flex:65,borderTopEndRadius:5,marginLeft:15}}>
                            <Text style={{fontSize:15}}>{this.props.yyy.buoc}</Text>
                        </View>
                    </View>
                    
                    <View style ={styles.view1}>
                        <View style={{flex:65,borderTopEndRadius:5,marginLeft:15}}>
                            <Text style={{fontSize:15}}>{this.props.yyy.noi_dung}</Text>
                        </View>
                    </View>
                    
                    {/* view1 */}         
      </ScrollView> 
      
    );
  }
}

const styles = StyleSheet.create({
  viewx:{
    flex:1,
    height:'100%',
    backgroundColor:'#e9f7f1'
  },
  


});

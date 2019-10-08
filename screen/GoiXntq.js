import React from 'react';
import {StyleSheet,FlatList,Text,View, Image} from 'react-native';
import datagoixntq from '../data/datagoixntq'
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
export default class GoiXntq extends React.Component {

  render() {
    return (
      <ScrollView style = {styles.viewx}>
          <Image source={require('../avatar/doctor.jpg')} style={{width: '100%', height: '30'}}></Image>
            <View style = {styles.view0}>
            {/* view0 */}
                    <View style ={styles.view1}>
                        <View style={{flex:65,borderTopEndRadius:5,marginLeft:15}}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>Gói xét nghiệm tổng quát</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:15}}>
                            <Text style={{fontSize:14}}>Khu vực:</Text>
                            <Text style={{fontSize:14,marginLeft:10}}>Hà Nội</Text>
                        </View>
                    </View>

                    {/* view1 */}         
                    <View style={styles.view2}>
                        <View style={{flex:50,flexDirection:'row',marginTop:10,marginLeft:15, alignItems : "center"}}>
                            <Icon name='bullseye' type='font-awesome' color='grey' size={16}></Icon>
                            <Text style={{fontSize:14,marginLeft:5}}>Mọi người</Text>
                        </View>
                        <View style={{flex:50,flexDirection:'row',marginLeft:17,marginTop:10, alignItems : "center"}}>
                            <Icon name='thermometer' type='font-awesome' color='grey' size={16}></Icon>
                            <Text style={{fontSize:14,marginLeft:5}}>13 hạng mục xét nghiệm</Text>
                        </View>
                    </View>
                    {/* view2 */}
            </View>
            {/* ============== */}
            <Text style={{fontSize:18,fontWeight:'bold',marginLeft:20,marginTop:25}}>Chi tiết</Text>
            {/* ============== */}
            <View style = {styles.view00}>
            {/* view0 */}
                    {/* <FlatList 
                    data={datagoixntq}
                    renderItem={({item}) =><GoiXntnItem yyy={item}/> }

                    /> */}
                    {/* =========== */}
                    <View style ={styles.view1}>
                        <View style={{flex:65,borderTopEndRadius:5,marginLeft:15}}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>NỘI DUNG XÉT NGHIỆM</Text>
                        </View>
                    </View>
                    {/* ============ */}
                    {/* <FlatList 
                    data={datagoixntq}
                    renderItem={({item}) =><XntnItem yyy={item}/> } 

                    /> */}
                    
                    {/* view1 */}         
                    
            </View>
            {/* </Image> */}
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
  view0: {
    flex : 1,
    paddingBottom:20,
    borderRadius:5,
    marginLeft:17,
    marginTop:65,
    marginRight : 17,
    marginBottom:10,
    backgroundColor:'white',
  },
  view00: {
    flex : 1,
    paddingBottom:20,
    borderRadius:5,
    marginLeft:17,
    marginRight : 17,
    marginBottom:10,
    marginTop:10,
    backgroundColor:'white',
  },

  view1:{
    flex: 50,
    flexDirection:'column',
    marginTop:10,
    // backgroundColor:'tomato'
  },
  view2:{
    flex: 50,
    flexDirection:'column',
    marginTop:10,
    // backgroundColor:'green'
  },

});

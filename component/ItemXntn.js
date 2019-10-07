import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, Alert,TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class ItemXntn extends Component {
  render() {
    return (
        
            <View style = {styles.view0}>
            {/* view0 */}
                    <View style ={styles.view1}>
                        <View style={{flex:25}}>
                            <Image style={{width:70,height:60,borderRadius:5,marginLeft:10,marginTop:10, marginBottom : 10}} source={require('../avatar/doctor1.jpg')}></Image>
                        </View>
                        {/* image */}
                        <View style={{flex:65,borderTopEndRadius:5,marginTop:15,}}>
                            <Text style={{fontSize:14,fontWeight:'bold'}}>{this.props.xxx.ten_goi}</Text>
                            <Text style={{fontSize:14,color:'blue',fontWeight:'bold'}}>{this.props.xxx.gia_tien}</Text>
                        </View>
                    </View>
                    {/* view1 */}         
                    <View style={styles.view2}>
                         <Text style={{marginLeft:10,marginTop:10,marginBottom:5,width:'80%'}}>{this.props.xxx.mo_ta}</Text>  
                    </View>
                    {/* view2 */}

                    <View style={styles.view3}>
                        <View style={{flex:50,flexDirection:'row',marginTop:10,marginLeft:15, alignItems : "center"}}>
                            <Icon name='bullseye' type='font-awesome' color='blue' size={15} marginTop={2}></Icon>
                            <Text style={{fontSize:14,marginLeft:5}}>{this.props.xxx.doi_tuong}</Text>
                        </View>
                        {/* image */}
                        <View style={{flex:50,flexDirection:'row',marginLeft:15,marginTop:10, alignItems : "center"}}>
                            <Icon name='thermometer' type='font-awesome' color='blue' size={16}></Icon>
                            <Text style={{fontSize:14,marginLeft:5}}>{this.props.xxx.so_xn}</Text>
                        </View>
                    </View>
                    {/* view3 */}
            </View>
            // view0
    );
  }
}

const styles = StyleSheet.create({
  
  view0: {
    flex : 1,
    paddingBottom:20,
    borderRadius:5,
    marginLeft:17,
    marginTop:15,
    marginRight : 17,
    marginBottom:10,


    backgroundColor:'white',

  },

  view1:{
    flex: 40,
    flexDirection:'row',
    borderBottomWidth:0.3,
    borderTopStartRadius:5,
    borderTopEndRadius:5,
    // backgroundColor:'tomato'
  },

  view2:{
    flex : 40,
    flexDirection:'row',
    borderBottomWidth:0.3,
    // backgroundColor:'green',

  },
  view3:{
    flex : 20,
    flexDirection:'row',
    borderBottomStartRadius:5,
    borderBottomEndRadius:5,
    // backgroundColor:'violet',

  },
 
});
export default ItemXntn;
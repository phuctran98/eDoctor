import React from 'react';
import {StyleSheet,FlatList,Text,View, Image} from 'react-native';
import datagoixntq from '../data/datagoixntq'
import ItemGoixntq from '../component/ItemGoixntq'
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default class GoiXntqScreen extends React.Component {
  constructor(props) {
    super(props);
    this.onPressBook = this.onPressBook.bind(this);
  }
  onPressBook(){
    this.props.navigation.navigate('GoiXntq')
  }
  render() {
    return (
      <ScrollView style = {styles.viewx}>
          <Image source={require('../avatar/doctor.jpg')} style={{width: '100%', height: 100}}></Image>
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

            </View>

            <Text style={{fontSize:18,fontWeight:'bold',marginLeft:20,marginTop:25}}>Chi tiết</Text>

            <View style = {styles.view00}>

                    <View style ={styles.view1}>
                        <View style={{flex:65,borderTopEndRadius:5,marginLeft:15}}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>NỘI DUNG XÉT NGHIỆM</Text>
                        </View>
                    </View>
            </View>
            <FlatList 
            data={datagoixntq}
            renderItem={({item}) =><ItemGoixntq yyy={item} onPressBook={this.onPressBook.bind(this)} /> }
            />
      </ScrollView> 


    
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

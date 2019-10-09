import React from 'react';
<<<<<<< HEAD
import {StyleSheet,FlatList,Text,View, Image} from 'react-native';
=======
import {StyleSheet,FlatList,Text,View,TouchableOpacity} from 'react-native';
>>>>>>> 710b3eb1096e46a66890dfccd6658bdc3d17c2ed
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
<<<<<<< HEAD
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
=======
  <View style={{flex: 1}}>
        <ScrollView style = {styles.viewx}>
      {/* <ImageBackground source={require('../avatar/doctor.jpg')} style={{width: '100%', height: '100%'}}> */}
        <View style = {styles.view0}>
        {/* view0 */}
                <View style ={styles.view1}>
                    <View style={{flex:65,borderTopEndRadius:5,marginLeft:15}}>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>Gói xét nghiệm tổng quát</Text>
                    </View>
                    <View style={{flexDirection:'row',marginLeft:15}}>
                        <Text style={{fontSize:14}}>Khu vực:</Text>
                        <Text style={{fontSize:14,marginLeft:10}}>Hà Nội</Text>
>>>>>>> 710b3eb1096e46a66890dfccd6658bdc3d17c2ed
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

<<<<<<< HEAD

    
=======
            />      
        </View>
        {/* </ImageBackground> */}
      </ScrollView>
          <View style={{height:70,flexDirection:'column',margin:10}}>
              <View style={{flex:30,flexDirection:'row',marginLeft:10}}>
                <Text style={{width:'80%'}}>Giá dịch vụ</Text>
                <Text style={{width:'20%',fontWeight:'bold',fontSize:16}}>850.000đ</Text>
              </View>
              <View style={{flex:70,flexDirection:'row'}}>
          <TouchableOpacity style={styles.button}>
            <Text
              onPress={() => {
                this.onPressBook();
              }}
              style={{fontSize: 14, fontWeight: 'bold', color: 'white', textAlign: 'center', paddingTop:4,}}>
              Thêm vào giỏ hàng và đặt lịch
            </Text>
          </TouchableOpacity>
        </View>
          </View>
  </View>
       
            
      
>>>>>>> 710b3eb1096e46a66890dfccd6658bdc3d17c2ed
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

<<<<<<< HEAD
=======
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
  button: {
    margin: 10,
    width: '95%',
    borderRadius: 5,
    backgroundColor: '#23c4cc',
    height: 40,
    paddingTop: 5,
  },
>>>>>>> 710b3eb1096e46a66890dfccd6658bdc3d17c2ed
});

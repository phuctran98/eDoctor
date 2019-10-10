import React from 'react';
import {StyleSheet,FlatList,Text,View,TouchableOpacity,ImageBackground} from 'react-native';
import datagoixntq from '../data/datagoixntq'
import datagoixntq2 from '../data/datagoixntq2'
import ItemGoixntq from '../component/ItemGoixntq'
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default class XNTN extends React.Component {
  constructor(props) {
    super(props);
    this.onPressBook = this.onPressBook.bind(this);
  }
  onPressBook(){
    this.props.navigation.navigate('datLichHen')
  }
  render() {
    return (
  <View style={{flex: 1}}>
    
          
        <ScrollView style = {styles.viewx}>
      <ImageBackground source={require('../avatar/doctor.jpg')} style={{width: '100%', height: '45%'}}>
                    
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
        <FlatList 
            data={datagoixntq}
            renderItem={({item}) =><ItemGoixntq yyy={item}/> }

            />
             
        </View>
        {/* =========== */}
        <View style={{flex:65,borderTopEndRadius:5,marginLeft:20}}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>NỘI DUNG XÉT NGHIỆM</Text>
                        </View>
        {/* ============ */} 
        <View style = {styles.view00}>
        {/* view0 */}
        <FlatList 
            data={datagoixntq2}
            renderItem={({item}) =><ItemGoixntq yyy={item} /> }

            />      
        </View>
        </ImageBackground>
      </ScrollView>
          <View style={{height:70,flexDirection:'column',margin:10}}>
              <View style={{flex:30,flexDirection:'row',marginLeft:10}}>
                <Text style={{width:'80%'}}>Giá dịch vụ</Text>
                <Text style={{width:'20%',fontWeight:'bold',fontSize:16}}>850.000đ</Text>
              </View>
              <View style={{flex:70,flexDirection:'row'}}>
          <TouchableOpacity style={styles.button}>
            <Text
              onPress={() => {this.onPressBook()}}
              style={{fontSize: 14, fontWeight: 'bold', color: 'white', textAlign: 'center', paddingTop:4,}}>
              Thêm vào giỏ hàng và đặt lịch
            </Text>
          </TouchableOpacity>
        </View>
          </View>
          <View style={{position:'absolute',backgroundColor:'rgba(100,100,100,0.1)',height:30,width:'100%',top:0}}>
          <TouchableOpacity style={{flexDirection:'row',marginTop:5,marginLeft:15, alignItems : "center"}} onPress={() => {this.props.navigation.navigate('XNTN')}}>
                        <Icon name='arrow-left' type='font-awesome' color='white' size={18}></Icon>
          </TouchableOpacity>
    </View>
  </View>
       
            
      
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
    marginTop:200,
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
    marginTop:10,
    // backgroundColor:'white',
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
  button: {
    margin: 10,
    width: '95%',
    borderRadius: 5,
    backgroundColor: '#23c4cc',
    height: 40,
    paddingTop: 5,
  },
});
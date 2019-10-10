import React from 'react';
import {StyleSheet,FlatList,Text,View,TouchableOpacity} from 'react-native';
import datalichkham from '../data/datalichkham'
import ItemLichKham from '../component/ItemLichKham'
import { Icon,Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default class XNTN extends React.Component {
  constructor(props) {
    super(props);
    this.state={selected:0,backgroundColor: true}
    this.onPressBook = this.onPressBook.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  
  onPressBook(){
    this.props.navigation.navigate('datLichHen')
  }
  NewSelected(input)
  {
    this.setState({selected:input})
    console.log(input)
  }
  
  onClick(input) {
  console.log(input);
  this.setState(() =>this.backgroundColor =! this.backgroundColor); 
  }
  render() {
    return (
  <View style={{flex: 1}}>
        <ScrollView style = {styles.viewx}>
        <View style = {styles.view0}>
        {/* view0 */}
                <View style={{height:150,flexDirection:'column'}}>
                    <View style ={{flexDirection:'row',flex:70,margin:10,borderBottomWidth:0.3}}>
                      <View style={{margin:10}}>
                            <Avatar style={{height:60,width:60}} rounded size={150} source={require('../avatar/avatar.jpg')} />
                      </View>
                        <View style={{backgroundColor:'#bae8ff',flex:80,borderRadius:5,margin:30,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontWeight:'bold'}} >Tran Chan</Text>
                        </View>
                    </View>
                    <View style={{flex:30,borderTopEndRadius:5,alignItems:'center',justifyContent:'center'}}>
                          <Text style={{fontSize:16,fontWeight:'bold'}}>Gói xét nghiệm tổng quát</Text>
                    </View>
                </View>
                {/* view1 */}         
        </View>
        {/* ============== */}
        <View style={[{flex:65,borderTopEndRadius:5,marginLeft:20}]}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>THỜI GIAN LẤY MẪU</Text>
          </View>
        {/* ============ */} 
        <View style = {styles.view00}>
            {/* <Icon name='arrow-left' type='font-awesome' color='grey' size={18} marginRight={5}></Icon> */}
            <FlatList data={datalichkham} horizontal={false} numColumns={2} keyExtractor={(item, index) => index} renderItem={({item,index}) =><ItemLichKham item={item} index={index} selected={(input)=> this.NewSelected(input)} selectedIndex = {this.state.selected}/> } />
            {/* <Icon name='arrow-right' type='font-awesome' color='grey' size={18} marginLeft={5}></Icon> */}
        </View>
        {/* =========== */}
        <View style = {styles.view0}>
                <View style={{height:40,flexDirection:'row',}}>
                    <TouchableOpacity onPress={ this.onClick }  style={[styles.time, (this.backgroundColor)? {backgroundColor:'blue'} : {backgroundColor:'#e9f7f1'} ]}>
                          <Text style={{marginRight:5}}>05:30</Text>
                          <Text>sáng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={ this.onClick }  style={[styles.time, (this.backgroundColor)? {backgroundColor:'blue'} : {backgroundColor:'#e9f7f1'}]}>
                          <Text style={{marginRight:5}}>06:00</Text>
                          <Text>sáng</Text>
                    </TouchableOpacity>
                </View>
        </View>
      </ScrollView>

      {/* =============== */}
        <View style={{height:70,flexDirection:'column',margin:10}}>
              <View style={{flex:30,flexDirection:'row',marginLeft:10}}>
                <Text style={{width:'80%'}}>Tạm tính</Text>
                <Text style={{width:'20%',fontWeight:'bold',fontSize:16}}>850.000đ</Text>
              </View>
              <View style={{flex:70,flexDirection:'row'}}>
              <TouchableOpacity onPress={() => {this.onPressBook()}} style={styles.button}>
                <Text
                  style={{fontSize: 14, fontWeight: 'bold', color: 'white', textAlign: 'center', paddingTop:4,}}>
                  Hoàn tất
                </Text>
              </TouchableOpacity>
            </View>
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
    flexDirection : 'column',
    paddingBottom:20,
    borderRadius:5,
    marginLeft:17,
    marginTop:20,
    marginRight : 17,
    marginBottom:10,
    backgroundColor:'white',
  },
  view00: {
    flex:0.5,
    flexDirection : 'row',
    padding:20,
    borderRadius:5,
    marginLeft:17,
    marginRight : 17,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
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
  button: {
    margin: 10,
    width: '95%',
    borderRadius: 5,
    backgroundColor: '#23c4cc',
    height: 40,
    paddingTop: 5,
  },
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
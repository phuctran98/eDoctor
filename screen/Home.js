import React from 'react';
import {StyleSheet,FlatList,Text,View} from 'react-native';
import List from '../data/dataxntn'
import CustomItem from './CustomItem'
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import {getSNTN} from '../networking/Server'
export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      datafromServer : []
    })
  }
  // componentDidMount(){
  //   this.refresDataFromServer();
  // }
  // refresDataFromServer=()=>{
  //   getSNTN().then((data)=>{
  //     this.setState({datafromServer : data})
  //   }).catch((error)=>{
  //     this.setState({datafromServer:[]})
  //   });
  // }
  render() {
    return (
      <ScrollView style = {styles.viewx}>
            <View style={styles.view_1}>
                <Text style={{color:'grey',marginRight:5}}>{"Dịch vụ tại"}</Text>
                <Icon name='map-marker' type='font-awesome' color='blue' size={16}></Icon>
                <Text style={{marginLeft:5}}>{"Hà Nội"}</Text>
            </View>
            {/* view_1 */}
            <FlatList 
            // data={List}
            data = {List}
            renderItem={({item}) =><CustomItem xxx={item}/> } keyExtractor ={(xxx)=>xxx.ten_goi}
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
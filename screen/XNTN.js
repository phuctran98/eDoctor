import React from 'react';
import {StyleSheet,FlatList,Text,View} from 'react-native';
import dataxntn from '../data/dataxntn'
import ItemXntn from '../component/ItemXntn'
import { Icon } from 'react-native-elements';
// import { ScrollView } from 'react-native-gesture-handler';

export default class XNTN extends React.Component {
  constructor(props) {
    super(props);
    this.onPressDetail = this.onPressDetail.bind(this);
  }
  onPressDetail(){
    this.props.navigation.navigate('GoiXntq')
  }
  render() {
    return (
      <View style = {styles.viewx} >
            <View style={styles.view_1}>
                <Text style={{color:'grey',marginRight:5}}>{"Dịch vụ tại"}</Text>
                <Icon name='map-marker' type='font-awesome' color='blue' size={16}></Icon>
                <Text style={{marginLeft:5}}>{"Hà Nội"}</Text>
            </View>
            {/* view_1 */}
            <FlatList 
            data={dataxntn}
            renderItem={({item}) =><ItemXntn xxx={item} onPressDetail={this.onPressDetail.bind(this)} /> } keyExtractor ={(xxx)=>xxx.key}

            />
      </View>
      
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

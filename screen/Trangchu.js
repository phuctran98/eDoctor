import React, { Component } from 'react'
import {View,Text, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Avatar } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler'
import datasukien from '../data/datasukienn'
import datadichvuphobien from '../data/dataDichvuphobien'
import Itemsukien from '../component/Itemsukien'
import Itemdichvuphobien from '../component/Itemdichvuphobien'
import {getSKNB} from '../networking/Server'
export default class Trangchu extends Component {
    constructor(){
        super();
        this.state = ({
            sknbFromServer : []
        })
    }
    componentDidMount(){
        this.refresDataFromServer();
    }
    refresDataFromServer = ()=>{
        getSKNB().then((sknb)=>{
            this.setState({ sknbFromServer:sknb })
        }).catch((error)=>{
            this.setState({sknbFromServer : []})
        })
    }
    render() {
        return (
            <View style = {styles.container}>
                <View style = {{width : "100%", height : 45,flexDirection:'row', backgroundColor:'white',alignItems:'center'}}>
                    <Image source = {require('../avatar/images.png')} style={{width:30, height:30, marginLeft: 15}}>
                    </Image>
                    <Text style={{fontWeight:'bold'}}>eDoctor</Text>
                </View>
                <ScrollView >
                <Text style = {{fontSize : 18, fontWeight: 'bold', marginLeft : 10}}>Dịch vụ</Text> 
                <View style= {styles.dichvu}>
                    <View style = {{flexDirection : 'row'}}>
                        {/* 1 */}
                        <TouchableOpacity style = {styles.viewChill}>
                            <Image source = {require('../avatar/813850_people_512x512.png')} style={{ height: 35, width: 35, borderRadius: 10 }}/>
                            <Text style = {styles.text}>
                                {"Khám và"}
                            </Text>
                            <Text style = {styles.text2}>
                                {"xét nghiệm"}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.viewChill} onPress={() => this.props.navigation.navigate('XNTN')}>
                            <Image source = {require('../avatar/813850_people_512x512.png')} style={{ height: 35, width: 35, borderRadius: 10 }}>
                                </Image>
                                <Text style = {styles.text}>
                                {"Xét nghiệm"}
                            </Text>
                            <Text style = {styles.text2}>
                                {"tại nhà"}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.viewChill}>
                            <Image source = {require('../avatar/813850_people_512x512.png')} style={{ height: 35, width: 35, borderRadius: 10 }}>
                                </Image>
                                <Text style = {styles.text}>
                                {"Xét nghiệm"}
                            </Text>
                            <Text style = {styles.text2}>
                                {"di truyền"}
                            </Text >
                        </TouchableOpacity>
                    
                        </View>
                    <View style = {{flexDirection : 'row', marginTop : 5}}>
                        {/* 2 */}
                        <TouchableOpacity style = {styles.viewChill}>
                            <Image source = {require('../avatar/813850_people_512x512.png')} style={{ height: 35, width: 35, borderRadius: 10 }}/>
                            <Text style = {styles.text}>
                                {"Sức khỏe &"}
                            </Text>
                            <Text style = {styles.text2}>
                            {"Sắc đẹp &"}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.viewChill}>
                            <Image source = {require('../avatar/813850_people_512x512.png')} style={{ height: 35, width: 35, borderRadius: 10 }}>
                                </Image>
                                <Text style = {styles.text}>
                                {"Khám định kỳ"}
                            </Text>
                            <Text style = {styles.text2}>
                            {"DN"}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.viewChill}>
                            <Image source = {require('../avatar/813850_people_512x512.png')} style={{ height: 35, width: 35, borderRadius: 10 }}>
                                </Image>
                                <Text style = {styles.text}>
                                {"Thông tin"}
                            </Text>
                            <Text style = {styles.text2}>
                            {"sức khỏe "}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {{flexDirection : 'row', marginTop : 5}}>
                        {/* 3 */}
                        <TouchableOpacity style = {{flex : 1, alignItems : 'center',  justifyContent : 'center',marginBottom:14,marginLeft:5}}>
                            <Image source = {require('../avatar/813850_people_512x512.png')} style={{ height: 35, width: 35, borderRadius: 10 }}/>
                            <Text style = {styles.text}>
                            {"Hỏi Bác sĩ"}
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.viewChill}>
                            <Image source = {require('../avatar/813850_people_512x512.png')} style={{ height: 35, width: 35, borderRadius: 10 }}>
                                </Image>
                                <Text style = {styles.text}>
                                {"Chat với"}
                            </Text>
                            <Text style = {styles.text2}>
                            {"bác sĩ"}
                            </Text>
                        </TouchableOpacity>
                        <View style = {styles.viewChill}>

                        </View>

                    </View>
                </View>
                <Text style = {{fontSize : 18, fontWeight: 'bold', marginLeft : 10, marginTop : 20}}>
                    {"Sự kiện nổi bật"}
                </Text>
                <FlatList horizontal = {true} 
                // data ={datasukien}
                data = {this.state.sknbFromServer} 
                renderItem = {({item})=><Itemsukien xxx={item}></Itemsukien>} keyExtractor ={(xxx)=>xxx.header}>

                </FlatList>
                <Text style = {{fontSize : 18, fontWeight: 'bold', marginLeft : 10, marginTop : 20}}>
                    {"Dịch vụ phổ biến"}
                </Text>

                <FlatList horizontal = {true} data ={datadichvuphobien} renderItem = {({item})=><Itemdichvuphobien xxx={item}></Itemdichvuphobien>} keyExtractor ={(xxx)=>xxx.header}>

                </FlatList>
            </ScrollView>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#e9f7f1"

    },
    dichvu:{
        flex : 1,
        marginTop : 20,
    },
    text:{
        marginTop : 2,
        alignSelf : 'center',
        fontSize : 12
    },
    text2:{
        fontSize : 12
    },
    viewChill : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        margin : 5
    }
})

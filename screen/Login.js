import {View,StyleSheet, TouchableOpacity,Text,Image, TextInput} from 'react-native'
import React, { Component } from 'react'
import { Icon } from 'react-native-elements'

export default class Login extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <View>
                    <View style = {{ flexDirection : "row",justifyContent: "space-between"}}>
                        <TouchableOpacity style = {{justifyContent : 'flex-start', marginTop : 7, marginLeft: 7}}>
                            <Icon color={"#94908f"} type='font-awesome' name="times" size={25}>
                            </Icon>        
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.vechungtoi}>
                        <Text style = {{ fontSize : 10, alignSelf: "center", color : "#457dd6"}}>
                                {"Về chúng tôi"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {{justifyContent : "center", alignItems : "center"}}>
                    <View style ={{justifyContent : "center",alignItems:"center", marginTop : 40}}>
                        <Image source = {require('../avatar/edoctor_io.jpg')} style={{width: 150,height:100}}>
                        </Image>
                        <Text style = {{fontSize : 20,fontWeight:"bold", marginTop : 20}}>
                            Đăng Nhập
                        </Text>
                    </View>
                    <TouchableOpacity style = {{width :200, borderWidth :0.2, alignItems: "center",justifyContent : "center", borderRadius : 20, marginTop : 30}}>
                        <TextInput style ={{fontSize : 12, alignSelf : "center" , marginTop : 7}} placeholder = {"Nhập số điện thoại"}>
                            {/* {"Nhập số điện thoại"} */}
                        </TextInput>
                    </TouchableOpacity>
                    <Text style = {{marginTop: 20}}>
                        {"Hoặc"}
                    </Text>
                </View>
               
                
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container :{
        flex : 1,

    },
    vechungtoi:{
        marginTop : 7,
        marginRight: 10,
        backgroundColor : "#bfd4f5", 
        width : 90, 
        height:28, 
        justifyContent:"center",
        borderRadius:5,
    }
})
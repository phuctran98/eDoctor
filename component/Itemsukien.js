import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
import { Avatar, Icon } from 'react-native-elements'
import { thisExpression } from '@babel/types'

export default class Itemsukien extends Component {
    constructor(props){
        super(props)
        this.state ={
            image :"",
            header : "",
            text : "" 
        }
    }
    render() {
        let screenWidth = Dimensions.get('window').width;
        return (          
            <TouchableOpacity style = {{
                flex : 1,       
                borderRadius : 15,
                // borderWidth : 1,
                // borderColor : "black",
                backgroundColor : "white",
                marginTop : 15,
                marginLeft : 10,
                width : screenWidth - 50}}>
                <View style = {{flex : 30 }} >
                        {this.props.xxx.image}
                </View>
                <View style = {{flex : 70 , width : screenWidth - 50 , height : screenWidth * 666/1440 - 20}}>
                    {/*text*/}
                    <Text style = {{fontSize : 15,fontWeight : 'bold', marginLeft : 15 , marginTop : 18, marginRight : 15}}>
                        {this.props.xxx.header}
                    </Text>
                    <Text style = {{fontSize : 10 , marginLeft : 15, marginTop : 5 , marginRight : 15}}>
                        {this.props.xxx.text}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}
const styles =StyleSheet.create({
    container : {
        borderRadius : 50,
        // borderWidth : 1,
        // borderColor : "black",
        marginTop : 20,
        marginLeft : 10,
    },

})
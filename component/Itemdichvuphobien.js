import {View,Text,StyleSheet,Dimensions,TouchableOpacity}from 'react-native'
import React, { Component } from 'react'
export default class Itemdichvuphobien extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        return (
            <TouchableOpacity style = {styles.container}>
                <View style = {{flex : 30 }} >
                    {this.props.xxx.image}
                </View>
                <View style = {{ width : screenWidth - 50 , height : screenWidth * 666/1440 - 80, borderBottomWidth : 0.3,marginLeft : 12 , marginTop : 18, marginRight : 12 }}>
                    <Text style = {{fontSize : 15,fontWeight : 'bold'}}>
                        {this.props.xxx.header}
                    </Text>
                    <Text style = {{fontSize : 10, marginTop : 10}}>
                    {this.props.xxx.text}
                    </Text>
                </View>
                <View style = {{flex : 20,marginLeft : 15 , marginTop : 10, marginRight : 15 , marginBottom: 10}}>  
                    <Text style ={{fontSize:12}}>
                        {"Giá từ"}
                    </Text>
                    <Text style ={{fontSize:12, color: 'blue'}}>
                        {this.props.xxx.gia}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,       
        borderRadius : 15,
        backgroundColor : "white",
        marginTop : 15,
        marginLeft : 10,
    }
})

import React, { Component } from 'react'
import {View,Text, ScrollView, StyleSheet, Image} from 'react-native'
import { Avatar } from 'react-native-elements'

export default class Trangchu extends Component {
    render() {
        return (
            <ScrollView style = {styles.container}>
                <Text style = {{fontSize : 18, fontWeight: 'bold', marginLeft : 10}}>Dịch vụ</Text> 
                <View style= {styles.dichvu}>
                    <View style = {{flexDirection : 'row',justifyContent: 'center'}}>
                        {/* 1 */}
                        <View style = {{flex : 1, justifyContent : 'center'}}>
                            <Image source = {require('../avatar/813850_people_512x512.png')} style={{ height: 30, width: 30, borderRadius: 10 }}>

                            </Image>
                            <Text>
                                Khám và xét nghiệm hhh
                            </Text>
                        </View>
                        <View style = {{flex : 1}}>
                            <Avatar>

                            </Avatar>
                            <Text>
                                
                            </Text>
                        </View>
                        <View style = {{flex : 1}}>
                            <Avatar>

                            </Avatar>
                            <Text>
    
                            </Text>
                        </View>
                    </View>
                    <View>
                        {/* 2 */}
                    </View>
                    <View>
                        {/* 3 */}
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    dichvu:{
        
    }
})

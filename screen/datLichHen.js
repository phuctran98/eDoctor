import React, { Component } from 'react'
import {View,Text, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Avatar } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler'
import datasukien from '../data/datasukienn'
import Itemsukien from '../component/Itemsukien'

export default class datLichHen extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{flex:1,backgroundColor:'violet',height:'100%'}}>
                    <View style={{flexDirection:'row',backgroundColor:'green'}}>
                        <Text>hi</Text>
                    </View>
                    <View style={{flexDirection:'row',backgroundColor:'tomato'}}>
                        <Text>hi</Text>
                    </View>
                        <View style={{flexDirection:'row',backgroundColor:'tan'}}>
                    <Text>hi</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    
})

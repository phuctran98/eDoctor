import {Image,Dimensions} from 'react-native'
import React,{Component} from 'react'

let screenWidth = Dimensions.get('window').width;
var datassukien = [
    {
        image : <Image source = {require('../avatar/bannerungthu.jpg')} style = {{ width : screenWidth - 20 , height : screenWidth * 666/1440 - 20, }}/>,
        header : "Chương trình cà phê sức khỏe chủ đê Hiếu đúng và Sống khỏe với Đái tháo đường ",
        text : "Tặng miễn phí gói tầm soát tiểu đường cho khách tham dự chương trình cà phể sức khỏe cùng THs BS Diệp Thị Thanh Bình" 
    },
    {
        image : <Image source = {require('../avatar/bannerungthu.jpg')} style = {{ width : screenWidth - 20 , height : screenWidth * 666/1440 - 20,}}/>,
        header : "Chương trình cà phê sức khỏe chủ đê Hiếu đúng và Sống khỏe với Đái tháo đường ",
        text : "Tặng miễn phí gói tầm soát tiểu đường cho khách tham dự chương trình cà phể sức khỏe cùng THs BS Diệp Thị Thanh Bình" 
    },
    
]

export default datassukien;
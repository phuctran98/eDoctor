import {Image,Dimensions} from 'react-native'
import React,{Component} from 'react'

let screenWidth = Dimensions.get('window').width;
var datadichvuphobien = [
    {

        image : <Image source = {require('../avatar/bannerungthu.jpg')} style = {{ width : screenWidth - 20 , height : screenWidth * 666/1440 - 20, }}/>,
        header : "Gói khám sức khỏe cơ bản",
        text : "Khu vực: Bình Dương, Hồ Chí Minh, Cần Thơ, Hà Nội, Đồng Nai, Đà Nẵng\nĐược chọn: 36 phòng khám",
        gia : "1.490.000đ" 
    },
    {

        image : <Image source = {require('../avatar/2.jpg')} style = {{ width : screenWidth - 20 , height : screenWidth * 666/1440 - 20,}}/>,
        header : "Chương trình cà phê sức khỏe chủ đê Hiếu đúng và Sống khỏe với Đái tháo đường ",
        text : "Tặng miễn phí gói tầm soát tiểu đường cho khách tham dự chương trình cà phể sức khỏe cùng THs BS Diệp Thị Thanh Bình",
        gia : "1.490.000đ" 
    },
      
    {
        image : <Image source = {require('../avatar/vdj.png')} style = {{ width : screenWidth - 20 , height : screenWidth * 666/1440 - 20}}/>,
        header : "Việt Nam có 20 triệu người mang virus viên gan B và C",
        text : "Ngay lúc này hãy khám gan ngay nếu có thể vì bạn và gia đình bạn cũng có thể bị bệnh Gan",
        gia : "1.490.000đ" 

    },
    
]

export default datadichvuphobien;
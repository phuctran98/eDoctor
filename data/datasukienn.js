import {Image,Dimensions} from 'react-native'
import React,{Component} from 'react'

let screenWidth = Dimensions.get('window').width;
var datasukien = [
    {
<<<<<<< HEAD
        image : <Image source = {require('../avatar/bannerungthu.jpg')} style = {{ width : screenWidth - 20 , height : screenWidth * 666/1440 - 20, }}/>,
=======
        image : <Image source = {require('../avatar/bannerungthu.jpg')} style = {{ width : screenWidth - 20 , height : screenWidth * 666/1440 - 20}}/>,
>>>>>>> 3da005cc988c031031de51ad9bef9c5b98aec9fd
        header : "Chương trình cà phê sức khỏe chủ đê Hiếu đúng và Sống khỏe với Đái tháo đường ",
        text : "Tặng miễn phí gói tầm soát tiểu đường cho khách tham dự chương trình cà phể sức khỏe cùng THs BS Diệp Thị Thanh Bình. \nÁp dụng chp khách hàng tham dự chương trình cà phê sức khỏe trong ngày 05/10/2019" 
    },
    {
<<<<<<< HEAD
        image : <Image source = {require('../avatar/bannerungthu.jpg')} style = {{ width : screenWidth - 20 , height : screenWidth * 666/1440 - 20,}}/>,
        header : "Chương trình cà phê sức khỏe chủ đê Hiếu đúng và Sống khỏe với Đái tháo đường ",
        text : "Tặng miễn phí gói tầm soát tiểu đường cho khách tham dự chương trình cà phể sức khỏe cùng THs BS Diệp Thị Thanh Bình" 
=======
        image : <Image source = {require('../avatar/2.jpg')} style = {{ width : screenWidth - 20 , height : screenWidth * 666/1440 - 20}}/>,
        header : "Tại sao nên khám sức khỏe định kỳ 6 tháng/ 1 lần?",
        text : "Theo tính toán của tôt chức y tế thế giới cho phí cho việc phòng bệnh thấp hơn nhiều lần chi phí chữa bệnh" 
    },
    {
        image : <Image source = {require('../avatar/vdj.png')} style = {{ width : screenWidth - 20 , height : screenWidth * 666/1440 - 20}}/>,
        header : "Việt Nam có 20 triệu người mang virus viên gan B và C",
        text : "Ngay lúc này hãy khám gan ngay nếu có thể vì bạn và gia đình bạn cũng có thể bị bệnh Gan" 
>>>>>>> 3da005cc988c031031de51ad9bef9c5b98aec9fd
    },
    
]

export default datasukien;
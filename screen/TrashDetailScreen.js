import React, { Component,Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Modal
} from "react-native";

import clockData from "../json/clock.json";
import ClockDetail from "./ClockDetail";
//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 

class TrashDetailScreen extends Component {
  
    constructor(){
        super();
        this.state={
            show:false
        }
    }

  render() {
    return (
    <ScrollView style={styles.trash_content}>
        <Text style={styles.trash_text}>資源回收</Text>
        <View style={styles.trash_select}>
            <View style={styles.trash_btn_box}><Text style={styles.trash_btn}>立體類</Text></View>
            <View style={styles.trash_btn_box}><Text style={styles.trash_btn}>平面類</Text></View>
            <View style={styles.trash_btn_box}><Text style={styles.trash_btn}>其他類</Text></View>
            <TouchableOpacity onPress={()=>{this.setState({show:true})}}>
                <Image source={require('../image/btn_info.png')} style={styles.trash_btn_information}/>
            </TouchableOpacity>
            <Modal
            transparent={true}
            visible={this.state.show}
            >
                <View style={styles.info_modal}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Image source={require('../image/img_info_modal.png')} style={{width:30,height:30,margin:15,marginLeft:0}}/>
                        <TouchableOpacity onPress={()=>{this.setState({show:false})}}>
                        <Image source={require('../image/btn_info_modal_close.png')} style={{width:20,height:20,margin:20}}/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <Text style={styles.info_modal_text}>
                        一、平面類：{"\n"}
                        （一）各種乾淨舊衣物 {"\n"}
                        （二）廢紙類 {"\n"}
                        （三）塑膠袋類 {"\n"}
                        （四）舊書 {"\n"}{"\n"}
                        二、立體類： {"\n"}
                        （一）一般類資源物{"\n"}
                         （二）乾淨保麗龍 {"\n"}{"\n"}
                         三、 其他類： {"\n"}
                         （一）照明光源燈管、電池、廢油及其他類 {"\n"}
                         （二）堆肥廚餘類{"\n"}{"\n"}
                        </Text>
                    </ScrollView>
                    
                </View>
            </Modal>
        </View>
        
    </ScrollView>
      

    )
  }

}

export default TrashDetailScreen;

const styles = StyleSheet.create({
    info_modal:{
        marginTop:310,
        alignSelf:"center",
        width:350,
        height:350,
        borderRadius:20,
        backgroundColor:"#7FB134",
        opacity:0.92,
        paddingLeft:20
        
    },
    info_modal_text:{
        color:"white",
        fontSize:18,
        lineHeight:30
    },
    trash_content:{
        marginLeft:"6%",
        marginTop:60
    },
    trash_text:{
      fontSize:24,
      marginBottom:15,
      fontWeight:"300"
    },
    trash_select:{
        flexDirection:"row",
        alignContent:"center",
        
    },
    trash_btn:{
      width:100,
      fontSize:18,
      textAlign:"center",
      marginRight:10,
      fontWeight:"300"
      
      // shadowOffset:{  width: 10,  height: 10,  },
      // shadowColor: 'black',
      // shadowOpacity: 1.0,
      
    },
    trash_btn_box:{
      backgroundColor:"#FFDADA",
      width:100,
      paddingTop:12,
      paddingBottom:12,
      borderRadius:10,
      borderWidth:2,
      borderColor:"#FFDADA",
      marginRight:5,
      //overflow: "hidden",

      shadowColor: '#000000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      shadowOffset: {
      height: 3,
      width: 4,
      },
    },
    trash_btn_information:{
      width:50,
      height:50,

      shadowColor: '#000000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      shadowOffset: {
      height: 3,
      width: 4,
      }
    },
    
});
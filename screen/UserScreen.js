import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground
} from "react-native";

//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 

class UserScreen extends Component {
  
  static navigationOptions = {
    drawerIcon : ({tintColor}) => (
      <Image 
      source={require('../assets/icon_drawer_setting.png')}
      style = {{width:24 ,height:24,marginBottom:20,marginTop:20,tintColor:tintColor}}
      />
    )
  }

  render() {
    return (
      <View style={{flex:1}}>
    <SafeAreaView style={{ backgroundColor: '#7FB134' }}/>
    <ImageBackground source={require('../image/img_user_background.png')} style={{flex: 1,width:"100%",height:"100%"}} >
  
      <View style={styles.header5}>
          
          <Text style={styles.header_text5}>綠色使者</Text>

          
      </View>

      
      
    
    
  </ImageBackground>
</View>
      

    )
  }

}

export default UserScreen;

const styles = StyleSheet.create({
  header5:{
    flexDirection:"row",
    height:"12%",
    marginBottom:55,
    justifyContent:"center",
    alignSelf:"center"
  },
  header_text5:{
    color:"white",
    fontSize:24,
    letterSpacing:2,
    justifyContent:"center",
    alignSelf:"center"
  },
});
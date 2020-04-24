import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 

class SettingsScreen extends Component {
  
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
      <SafeAreaView style={{ backgroundColor: '#00b49f' }}>   
      <View style={styles.container4}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                  <Image style={{ width: 50, height: 50,marginLeft:16,backgroundColor:"#00b49f"}}
                    source={require('../assets/btn_navbar_mobile.png')}
                  />
        </TouchableOpacity>
    </View>
      <Text style={{color:"black",backgroundColor: '#ffffff'}}>SettingsScreen</Text>
    </SafeAreaView>
      

    )
  }

}

export default SettingsScreen;

const styles = StyleSheet.create({
  container4: {
    backgroundColor: '#00b49f'
  },
});
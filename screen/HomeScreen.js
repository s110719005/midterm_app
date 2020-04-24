import React, { Component,Fragment } from "react";
import {
  Text,
  StatusBar,
  Button,
  StyleSheet,
  Platform,
  API,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 

class HomeScreen extends Component {
  
  static navigationOptions = {
    drawerIcon : ({tintColor}) => (
      <Image 
      source={require('../assets/icon_drawer_mybook_pressed.png')}
      style = {{width:24 ,height:24,marginBottom:20,marginTop:20,tintColor:tintColor}}
      />
    )
  }

  state={
    toggle:false,
    tlist1:false
  }

  _onPress(){
    const newState = !this.state.toggle;
    this.setState({toggle:newState})
  }

  _list1Press(){
    const newState = !this.state.tlist1;
    this.setState({tlist1:newState})
  }

  render() {
    const {toggle,tlist1} = this.state;
    
    const buttonBg = toggle?"#FC6068":"rgba(0,0,0,0)";
    const textcolor = toggle?"white":"#FC6068";
    const listcolor = tlist1?"#f0f0f0":"#f8f8f8";
    return (
      <Fragment>
      <SafeAreaView style={{ flex:0,backgroundColor: '#00b49f' }} />
      {/* <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }} > */}
      <View style={styles.headerStyle}>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                  <Image style={{ width: 50, height: 50,marginLeft:16}}
                    source={require('../assets/btn_navbar_mobile.png')}
                  />
        </TouchableOpacity>
        <Text style={{ color:"white",fontSize:20,fontWeight:"500"}}>
          My Book
        </Text>
        <Image style={{ width: 50, height: 50,marginRight:16}}
          source={require('../assets/btn_search.png')}
        />
      </View>
      
      <ScrollView style={styles.contentStyle}>
        <TouchableWithoutFeedback onPress={() => this._list1Press()}>
        <View style={[styles.listStyle,{backgroundColor:listcolor}]}>
          <View style={styles.imageStyle}> 
            <Image style={{height:180,width:120,borderWidth:3,borderColor:"white",}}
              source={require('../assets/img_the_immortalists.png')}
            />
          </View>
          <View style={styles.listtextStyle}>
            <Text style={{ color:"black",fontSize:18,fontWeight:"500",margin:10}}>
              The Immortalists
            </Text>
            <Text style={{ color:"#717171",fontSize:14,fontWeight:"500",margin:10}}>
              Chloe Benjamin
            </Text>
            <Text style={{ color:"#b1b1b1",fontSize:12,fontWeight:"500",margin:10}}>
              If you were told the date of your death, how would it shape your…
            </Text>
            <View style={styles.listlineStyle}>
              <View style={styles.listline1Style}></View>
              <View style={styles.listline2Style}></View>
            </View>
            
            <Text style={{ color:"#b1b1b1",fontSize:12,fontWeight:"500",margin:10}}>
              50% completed
            </Text>
          </View>
        </View>
        </TouchableWithoutFeedback>
        <View style={{height:1,width:"100%",backgroundColor:"#d1d1d1"}}></View>
        
        <View style={styles.listStyle}>
          <View style={styles.imageStyle}> 
            <Image style={{height:180,width:120,borderWidth:3,borderColor:"white",}}
              source={require('../assets/img_gristmillroad.png')}
            />
          </View>
          <View style={styles.listtextStyle}>
            <Text style={{ color:"black",fontSize:18,fontWeight:"500",margin:10}}>
              Grist Mill Road
            </Text>
            <Text style={{ color:"#717171",fontSize:14,fontWeight:"500",margin:10}}>
              Christopher J.
            </Text>
            <Text style={{ color:"#b1b1b1",fontSize:12,fontWeight:"500",margin:10}}>
              Twenty-six years ago Hannah had her eye shot out. Now she wants…
            </Text>
            <View style={styles.listlineStyle}>
              <View style={styles.listline2Style}></View>
              <View style={styles.listline2Style}></View>
            </View>
            
            <TouchableOpacity onPress={() => this._onPress()}
            style={{backgroundColor:buttonBg,width:92,marginLeft:10,borderRadius:5,height:20}}
            >
            
            <Text style={{color:textcolor,fontWeight:"600",paddingLeft:2}}>START READ</Text>
                  
            </TouchableOpacity>
            
            
          </View>
        </View>
        
        <View style={{height:1,width:"100%",backgroundColor:"#d1d1d1"}}></View>

        <View style={styles.listStyle}>
          <View style={styles.imageStyle}> 
            <Image style={{height:180,width:120,borderWidth:3,borderColor:"white",}}
              source={require('../assets/img_streetartactivitybook.png')}
            />
          </View>
          <View style={styles.listtextStyle}>
            <Text style={{ color:"black",fontSize:18,fontWeight:"500",margin:10}}>
              Street Art Activity Book
            </Text>
            <Text style={{ color:"#717171",fontSize:14,fontWeight:"500",margin:10}}>
              Mitchell Beazley
            </Text>
            <Text style={{ color:"#b1b1b1",fontSize:12,fontWeight:"500",margin:10}}>
              Street art is colorful, vibrant, diverse and exciting.Now, you can create…
            </Text>
            <View style={styles.listlineStyle}>
              <View style={styles.listline1Style}></View>
              <View style={styles.listline2Style}></View>
            </View>
            
            <Text style={{ color:"#b1b1b1",fontSize:12,fontWeight:"500",margin:10}}>
              50% completed
            </Text>
          </View>
        </View>
        <View style={{height:1,width:"100%",backgroundColor:"#d1d1d1"}}></View>

        <View style={styles.listStyle}>
          <View style={styles.imageStyle}> 
            <Image style={{height:180,width:120,borderWidth:3,borderColor:"white",}}
              source={require('../assets/img_streetartactivitybook.png')}
            />
          </View>
          <View style={styles.listtextStyle}>
            <Text style={{ color:"black",fontSize:18,fontWeight:"500",margin:10}}>
              Street Art Activity Book
            </Text>
            <Text style={{ color:"#717171",fontSize:14,fontWeight:"500",margin:10}}>
              Mitchell Beazley
            </Text>
            <Text style={{ color:"#b1b1b1",fontSize:12,fontWeight:"500",margin:10}}>
              Street art is colorful, vibrant, diverse and exciting.Now, you can create…
            </Text>
            <View style={styles.listlineStyle}>
              <View style={styles.listline1Style}></View>
              <View style={styles.listline2Style}></View>
            </View>
            
            <Text style={{ color:"#b1b1b1",fontSize:12,fontWeight:"500",margin:10}}>
              50% completed
            </Text>
          </View>
        </View>
      </ScrollView>
      
      {/* <View style={{height:1,width:"100%",backgroundColor:"#d1d1d1"}}></View>
      <View style={{backgroundColor:"#ffffff",height:80,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
        <View style={{}}>
          <Image style={{height:30,width:30,marginLeft:3}}
              source={require('../assets/icon_bottomnav_home.png')}
          />
          <Text style={{color:"#818181"}}>Home</Text>
        </View>
        <View style={{}}>
          <Image style={{height:30,width:30,marginLeft:12}}
              source={require('../assets/icon_bottomnav_mybook_selected.png')}
          />
          <Text style={{color:"#00b49f"}}>My Book</Text>
        </View>
        <View style={{}}>
          <Image style={{height:30,width:30,marginLeft:15}}
              source={require('../assets/icon_bottomnav_favorites.png')}
          />
          <Text style={{color:"#818181"}}>Favorites</Text>
        </View>
      </View> */}
    {/* </SafeAreaView> */}
    </Fragment>  

    )
  }

}

export default HomeScreen;

const styles = StyleSheet.create({
  container1: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container0: { flex: 1},
  contentStyle: {
    backgroundColor: "#f8f8f8",
    height:"100%",
    width:"100%"

  },
  headerStyle:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor: '#00b49f' 
  },
  listStyle:{
    padding:20,
    flexDirection:"row",
  },
  imageStyle:{
    width:120,
    height:180,
    backgroundColor:"white",
    borderColor:"#d1d1d1",
    borderWidth:0.5,
    shadowColor: '#000',
    shadowOffset: { width: 2.5, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 1,    
  },
  listtextStyle:{
    paddingLeft:15,
    paddingTop:7,
    width:"70%",
  },
  listlineStyle:{
    flexDirection:"row",
    margin:10
  },
  listline1Style:{
    backgroundColor:"#70b4a1",
    height:3,
    width:"50%",
  },
  listline2Style:{
    backgroundColor:"#c3c3c3",
    height:3,
    width:"50%"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  startStyle:{
    width:100
  }
});
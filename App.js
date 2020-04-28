import React, { Fragment } from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,Dimensions,Image } from 'react-native'

import {createDrawerNavigator,DrawerItems,createBottomTabNavigator} from 'react-navigation'
import {NavigationContainer, TabActions} from '@react-navigation/native';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {creat}


import HomeScreen from './screen/HomeScreen'
import SettingsScreen from './screen/SettingsScreen'
import AboutusScreen from './screen/AboutusScreen'
import FavoritesScreen from './screen/FavoritesScreen'
import MybookScreen from './screen/MybookScreen'
import { render } from 'react-dom';

//const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render(){

  
  return (
    <View style={{flex:1}}>
      {/* <AppDrawerNavigator/> */}
      
      {/* <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={MybookScreen} />
          <Tab.Screen name="Mybook" component={HomeScreen} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
        </Tab.Navigator>
      </NavigationContainer> */}
      <MytabNavigator/>
      {/* <HomeScreen/> */}
    </View>
    
  );
}
}



// const CustomDrawerComponent = (props) => (
//   <Fragment>
//   <SafeAreaView style={{flex:1,backgroundColor:"#00b49f"}}/>
//   <View style={{backgroundColor:"#ebebeb",height:"100%"}}>
//     <View style={{height:200,backgroundColor:"#00b49f"}}>
//       <Image 
//         source= {require('./assets/img_user_photo.png')}
//         style = {{height:80,width:80,marginTop:45,marginLeft:20}}
//       />
//       <View style={styles.userinfoStyle}>
//         <View>
//           <Text style={styles.userinfotextStyle}>
//             GamexHCl
//           </Text>
//           <Text style={styles.userinfotextStyle}>
//             gdlab2017@gmail.com
//           </Text>
//         </View>
//         <Image 
//           source= {require('./assets/btn_down_arrow.png')}
//           style = {{height:24,width:24}}
//         />
//       </View>
      
//     </View>
    
//     <ScrollView >
//       <DrawerItems {...props}/>
      
//     </ScrollView>
//   </View>
    
    
  
//   </Fragment>
  
// )


const MytabNavigator = createBottomTabNavigator({
  "Home":{
    screen:HomeScreen,
    navigationOptions: {
      tabBarIcon:({tintColor}) => (
        <Image 
          source={require('./image/icon_clock.png')}
          style = {{width:30 ,height:30,margin:0,justifyContent:"center",tintColor:tintColor}}
          />
      ),
      
    }
  },
  "My Book ":{
    screen:MybookScreen,
    navigationOptions: {
      tabBarIcon:({tintColor}) => (
        <Image 
          source={require('./image/icon_clock.png')}
          style = {{width:30 ,height:30,margin:0,justifyContent:"center",tintColor:tintColor}}
          />
      ),
      title:" "
    },
    
  },
  "Favorites ":{
    screen:FavoritesScreen,
    navigationOptions:{
      tabBarIcon:({tintColor}) => (
        <Image 
          source={require('./image/icon_clock.png')}
          style = {{width:30 ,height:30,margin:0,justifyContent:"center",tintColor:tintColor}}
          />
      ),
      title:" "
    }
  },
  "User":{
    screen:FavoritesScreen,
    navigationOptions:{
      tabBarIcon:({tintColor}) => (
        <Image 
          source={require('./image/icon_clock.png')}
          style = {{width:30 ,height:30,margin:0,justifyContent:"center",tintColor:tintColor}}
          />
      ),
      title:" "
    }
  }
},{
  initialRouteName: 'Home',
  
  tabBarOptions:{
    activeTintColor :'#FDD510',
    inactiveTintColor :'#FFFFFF',
    showLabel: false,
   labelStyle: {
    fontSize: 16,
    marginBottom:5
  },
   style:{
     margin:0,
     height:60,
     borderTopWidth:0,
     borderTopColor:'grey',
     backgroundColor:"#7FB134"
   }
  },
});


// const AppDrawerNavigator = createDrawerNavigator({
//   Home:MybookScreen,
//   "My Book":{
//     screen:MytabNavigator,
//     navigationOptions: {
//       drawerIcon : ({tintColor}) => (
//         <Image 
//         source={require('./assets/icon_drawer_mybook_pressed.png')}
//         style = {{width:24 ,height:24,marginBottom:20,marginTop:20,tintColor:tintColor}}
//         />
//       )
//     }
    
//   },
//   Favorites:FavoritesScreen,
//   Settings:SettingsScreen,
//   Aboutus:AboutusScreen
// },{
//   initialRouteName: 'My Book',
//   contentComponent:CustomDrawerComponent,
//   drawerWidth:335,
//   contentOptions:{
//     activeTintColor :'#ffffff',
//     inactiveTintColor :'#5c5c5c',

//    activeBackgroundColor :'#00b49f',
//    inactiveBackgroundColor :'#ebebeb',
   
//   },
//   index:2

// })



const styles = StyleSheet.create({
  
  userinfoStyle:{
    flexDirection:"row",
    marginLeft:20,
    marginTop:20
  },
  userinfotextStyle:{
    color:"white",
    marginRight:120
  }
});

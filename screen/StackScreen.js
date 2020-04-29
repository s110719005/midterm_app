import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen'
import TrashScreen from './TrashScreen'
//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 
const Stack = createStackNavigator();

const StackScreen = () => {
  
 

  
    return (
        
        <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home1" component={HomeScreen} />
          <Stack.Screen name="Detail" component={TrashScreen} />    
        </Stack.Navigator>
      </NavigationContainer>

    )
  }



export default StackScreen;

const styles = StyleSheet.create({
  
});
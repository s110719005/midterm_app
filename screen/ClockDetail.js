import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking,Switch} from "react-native";



const MessageDetail = ({clock}) => {
    
    

    return(
        <View style={styles.clock_pat}>
            <View style={styles.clock_pat_left}>

                <Text style={styles.clock_pat_text}>{clock.carname}</Text>
                <Text style={styles.clock_pat_text}>{clock.time}</Text>
                <Text style={styles.clock_pat_text}>{clock.address}</Text>
            </View>
            <View>
                <Switch/>
            </View>
        </View>
        
        
    );
}

const styles = StyleSheet.create({
    clock_pat:{
        flexDirection:"row",
        backgroundColor:"#FFF8D3",
        height:120,
        marginBottom:20,
        marginLeft:15,
        marginRight:15,
        alignItems:"center",
        borderRadius:15
    },
    clock_pat_left:{
        width:"80%"
    },
    clock_pat_text:{
        marginLeft:15,
        fontSize:18,
        marginBottom:5,
    }

    });

export default MessageDetail;
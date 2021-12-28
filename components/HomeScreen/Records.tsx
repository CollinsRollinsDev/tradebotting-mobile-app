import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Records = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Records
            </Text>
            <View style={styles.box}>
                <Text style={{fontSize:18, color:'white', fontWeight:'700'}}>Amount Invested</Text>
            </View>

            <View style={styles.box}>
                <Text style={{fontSize:18, color:'white', fontWeight:'700'}}>Amount Gained/Lost</Text>
            </View>
        </View>
    )
}

export default Records

const styles = StyleSheet.create({
    container:{
        padding:20,
        marginTop:10,
        flex:1,
        // backgroundColor:'red',
    },
    heading:{
        fontSize:17,
        fontWeight:'700',
        color:'white',
        fontStyle:'italic'
    },
    box:{
        width:'100%',
        height:200,
        marginTop:10,
        backgroundColor:'#090147',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
    }
})

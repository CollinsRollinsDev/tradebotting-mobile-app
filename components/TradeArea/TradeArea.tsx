import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image  } from 'react-native'
import FirstLayer from './FirstLayer'
import SecondLayer from './SecondLayer'
import ThirdLayer from './ThirdLayer'

const TradeArea = () => {
    return (
        <View style={styles.body}>
            <ScrollView>
                <FirstLayer />
                <SecondLayer />
                <ThirdLayer />
            </ScrollView>
        </View>
    )
}

export default TradeArea

const styles = StyleSheet.create({
    body:{
        flex:1,
        height:'auto',
        width:'100%',
        padding:20,
        backgroundColor:'#202fba'
    }
})

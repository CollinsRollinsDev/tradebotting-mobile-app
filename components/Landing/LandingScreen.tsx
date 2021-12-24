import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function LandingScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.imgDiv}>
            <Image source={require("../../assets/td.png")} style={{width: '100%', height: '100%'}} />
        </View>
      <Text style={styles.title}>TradeBotting v1.5</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
    width: '100%',
    // backgroundColor: '#202fba',
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgDiv: {
    height:100,
    width: 200,
    marginBottom:20,
    backgroundColor:'transparent'
  },
  title:{
    fontSize:25,
    fontWeight:'600',
    fontFamily: 'serif'
  },
});

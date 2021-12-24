import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Overview() {

    const display = (
        <View style={styles.box}>
        <View style={styles.top}>
            <View style={styles.imgDiv}>

            </View>
            <Text style={styles.topText}>Bitcoin</Text>
        </View>
        <View style={styles.bottom}>
            <View style={styles.bottomView}>
            <Text style={styles.price}>Current Price:</Text><Text style={styles.item}>$51,127</Text>
            </View>
            <View style={styles.bottomView}>
            <Text style={styles.price}>24hr Percent Change:</Text><Text style={styles.item}>$51,127</Text>
            </View>
            <View style={styles.bottomView}>
            <Text style={styles.price}>24hr Price Change:</Text><Text style={styles.item}>$51,127</Text>
            </View>
         
        </View>
      </View>
    )

  return (
    <View style={styles.container}>
     {display}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight:300,
    width: '100%',
    // backgroundColor: 'darkblue',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'row',
    padding:10,
  },
  box:{
    height:'90%',
    width: '85%',
    backgroundColor: 'darkblue',
    justifyContent:'flex-start',
    alignItems:'center',
    borderRadius:20,
    overflow:'hidden'
  },
  top:{
    flex:1.5,
    height:'100%',
    width: '100%',
    // backgroundColor: 'green',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingLeft:10,
  },
  imgDiv:{
    height:50,
    width:50,
    borderRadius:50,
    backgroundColor:'red',
    marginRight:10
  },
  topText:{
    fontSize:23,
    fontWeight:'700',
    color:'white',
    fontFamily:'serif',
    textShadowColor:'black',
    textShadowRadius:10

  },
  bottom:{
    flex:2.5,
    height:'100%',
    width: '100%',
    justifyContent:'space-around',
    alignItems:'flex-start',
    paddingLeft:10,
  },
  price:{
    fontSize:17,
    fontWeight:'700',
    width:'100%',
    color:'white'

  },
  bottomView:{
    maxWidth:'100%',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
  },
  item:{
      position:'absolute',
      right:20,
      fontWeight:'700',
      color:'white'
  },
});

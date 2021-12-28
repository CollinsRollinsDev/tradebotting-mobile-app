import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.headContainer}>
      {/* <View style={styles.left}>
        <Text style={styles.leftText}>TradeBotting v 1.8</Text>
      </View> */}
      <View style={styles.right}>
        {/* <View style={styles.bill}>

        </View>
        <View style={styles.profile}></View> */}
        <View style={styles.menu}></View>
      </View>
    </View>
  );
}
// {, top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}
const styles = StyleSheet.create({
  headContainer: {
    flex: 1,
    maxHeight:50,
    marginTop:30,
    width: '100%',
    // backgroundColor: '#202fba',
    justifyContent:'flex-end',
    alignItems:'center',
    flexDirection:'row',
    // padding:10,
    // position: 'absolute',
    // top: 0,
    // left:0,
    // right:0,
    // bottom:0,
    // justifyContent: 'center', 
    // alignItems: 'center',
    // zIndex:2
  },
  left:{
    flex:1,
    height:'100%',
    width:'100%',
    // backgroundColor:'red'
  },
  leftText:{
    fontSize:18,
    fontWeight:'700',
    color:'white'
  },
  right:{
    flex:1,
    height:'100%',
    width:'100%',
    backgroundColor:'yellow',
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    
  },
  bill:{
    height:35,
    width:35,
    borderRadius:35,
    backgroundColor:'grey',
    marginRight:10
  },
  profile:{
    height:35,
    width:35,
    borderRadius:35,
    backgroundColor:'grey',
    marginRight:30
  },
  menu:{
    height:35,
    width:35,
    borderRadius:35,
    backgroundColor:'grey'
  }
});

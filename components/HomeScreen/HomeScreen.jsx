import { StatusBar } from 'expo-status-bar';
import React, {useLayoutEffect} from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import ShowQuickGuide from '../Landing/ShowQuickGuide';
import Header from './Header';
import Overview from './Overview';

export default function HomeScreen({navigation}) {

  useLayoutEffect(() => {
    navigation.setOptions({
        title:'TradeBotting v 1.8',
        headerStyle:{backgroundColor: '#202fba'},
        headerTitleStyle: {color: 'white'},
        headerTintColor:'white',
        // headerLeft: () => (
        //     <View style={{marginRight:10}}>
        //         <TouchableOpacity activeOpacity={0.5} onPress={signOut}>
        //         <Avatar rounded source={{uri: auth?.currentUser?.photoURL }} />
        //         </TouchableOpacity>
        //     </View>
        // ),
        headerRight: () => (
            <View style={{flexDirection:'row', justifyContent:'space-between', width:120,  marginRight:20}}>
                <TouchableOpacity style={{flexDirection:'row', justifyContent:'flex-end', width:'100%'}} activeOpacity={0.5}>
                    {/* <AntDesign name="camerao" size={24} color="black" /> */}
                    {/* <Header /> */}
                    <View style={styles.menu}></View>
                    <View style={styles.menu}></View>
                </TouchableOpacity>
            </View>
        )
    })
 }, [])



  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      {/* <LandingScreen /> */}
      {/* <Header /> */}
      <Overview />
      <ShowQuickGuide />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
    width: '100%',
    backgroundColor: '#202fba',
  },
  menu:{
    height:35,
    width:35,
    borderRadius:35,
    backgroundColor:'grey',
    marginLeft:12,
  }
});

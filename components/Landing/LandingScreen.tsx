import { StatusBar } from 'expo-status-bar';
import React, {useLayoutEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function LandingScreen({navigation}:any) {

  useLayoutEffect(() => {
   const unsubscribe:any = setTimeout(() => {
    navigation.replace("HomeScreen")
   }, 4000);
  //  return unsubscribe;
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
        // title:'',
        // headerStyle:{backgroundColor: 'transparent'},
        // headerTitleStyle: {color: 'transparent'},
        // headerTintColor:'transparent',
        // headerLeft: () => (
        //     <View style={{marginRight:10}}>
        //         <TouchableOpacity activeOpacity={0.5} onPress={signOut}>
        //         <Avatar rounded source={{uri: auth?.currentUser?.photoURL }} />
        //         </TouchableOpacity>
        //     </View>
        // ),
        // headerRight: () => (
        //     <View style={{flexDirection:'row', justifyContent:'space-between', width:80,  marginRight:20}}>
        //         <TouchableOpacity activeOpacity={0.5}>
        //             <AntDesign name="camerao" size={24} color="black" />
        //         </TouchableOpacity>
        //         <TouchableOpacity onPress={() => navigation.navigate("AddChat")} activeOpacity={0.5}>
        //             <SimpleLineIcons name="pencil" size={24} color="black" />
        //         </TouchableOpacity>
        //     </View>
        // )
    })
 }, [])

  return (
    <View style={styles.container}>
        <View style={styles.imgDiv}>
            <Image source={require("../../assets/td.png")} style={{width: '100%', height: '100%'}} />
        </View>
      <Text style={styles.title}>TradeBotting v1.8</Text>
      <Text style={styles.credit}>By Collins Rollins</Text>
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
  credit:{
      fontSize:12,
      position:'absolute',
      top:'90%',
  }
});

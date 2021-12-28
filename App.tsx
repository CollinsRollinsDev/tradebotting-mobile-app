import { StatusBar } from 'expo-status-bar';
import React, {useLayoutEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './components/HomeScreen/Header';
import HomeScreen from './components/HomeScreen/HomeScreen';
import LandingScreen from './components/Landing/LandingScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { Store } from './reduxStore/store';
import TabNavigator from './components/HomeScreen/TabNavigator';

const Stack = createNativeStackNavigator()

export default function App() {


  const globalScreenOptions = {
    headerStyle:{backgroundColor: '#2C6BED'},
    headerTitleStyle: {color: 'white'},
    headerTintColor:'white'
  }

  const customScreen = {
    headerShown: true, title:'TradeBotting v 1.8',
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
  }

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}>
            <Stack.Screen name="LandingScreen" component={LandingScreen} />
            <Stack.Screen name="TabNavigator" component={TabNavigator} options={customScreen}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  menu:{
    height:35,
    width:35,
    borderRadius:35,
    backgroundColor:'grey',
    marginLeft:12,
  }
});

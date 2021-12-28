import { StatusBar } from 'expo-status-bar';
import React, {useLayoutEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/HomeScreen/Header';
import HomeScreen from './components/HomeScreen/HomeScreen';
import LandingScreen from './components/Landing/LandingScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator()

export default function App() {


  const globalScreenOptions = {
    headerStyle:{backgroundColor: '#2C6BED'},
    headerTitleStyle: {color: 'white'},
    headerTintColor:'white'
  }


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
          <Stack.Screen name="LandingScreen" component={LandingScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   {/* <LandingScreen /> */}
    //   {/* <Header /> */}
    //   <HomeScreen />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
    width: '100%',
    backgroundColor: '#fff',
  },
});

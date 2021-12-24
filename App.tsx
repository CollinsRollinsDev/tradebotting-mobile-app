import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/HomeScreen/Header';
import LandingScreen from './components/Landing/LandingScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LandingScreen /> */}
      <Header />
    </View>
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

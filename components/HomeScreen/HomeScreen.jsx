import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Overview from './Overview';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <LandingScreen /> */}
      <Header />
      <Overview />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
    width: '100%',
    backgroundColor: '#202fba',
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {
  return (
    <View style={styles.headContainer}>
      {/* <LandingScreen /> */}
        <Text>Testing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headContainer: {
    flex: 1,
    maxHeight:50,
    width: '100%',
    backgroundColor: '#202fba',
  },
});

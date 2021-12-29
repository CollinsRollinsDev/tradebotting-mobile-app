import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function LandingScreen({ navigation }: any) {
  useLayoutEffect(() => {
    const unsubscribe: any = setTimeout(() => {
      navigation.replace("TabNavigator");
    }, 4000);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imgDiv}>
        <Image
          source={require("../../assets/tdIcon.png")}
          style={{ width: "100%", height: "100%" }}
        />
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
    height: "100%",
    width: "100%",
    backgroundColor: "whitesmoke",
    alignItems: "center",
    justifyContent: "center",
  },
  imgDiv: {
    height: 100,
    width:100,
    marginBottom: 20,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    fontFamily: "serif",
  },
  credit: {
    fontSize: 12,
    position: "absolute",
    top: "90%",
  },
});

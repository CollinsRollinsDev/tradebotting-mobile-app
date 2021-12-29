import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  TextInput,
  Image,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import HomeScreen from "./HomeScreen";
import LandingScreen from "../Landing/LandingScreen";
import TradeArea from "../TradeArea/TradeArea";

// const Tab = createNativeTabNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = ({ navigation }) => {
  const { userDetails } = useSelector((state) => state.useTheReducer);
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            paddingHorizontal: 5,
            paddingBottom: 2,
            backgroundColor: "#dedee0",
            position: "absolute",
            borderTopWidth: 0,
          },
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === "HomeScreen") {
              iconName = "home";
              size = focused ? 20 : 17;
            } else if (route.name === "TradeArea") {
              iconName = "chart-line";
              size = focused ? 20 : 17;
              color = focused ? "brown" : "black";
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="TradeArea"
          component={TradeArea}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});

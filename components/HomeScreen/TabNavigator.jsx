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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import HomeScreen from "./HomeScreen";
import LandingScreen from "../Landing/LandingScreen";

// const Tab = createNativeTabNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = ({ navigation }) => {

  const { userDetails } = useSelector((state) => state.useTheReducer);
  return (
    <>
      <Tab.Navigator 
      screenOptions={({route})=> ({
        tabBarStyle: {
            paddingHorizontal: 5,
            paddingBottom: 2,
            backgroundColor: '#dedee0',
            position: 'absolute',
            borderTopWidth: 0,
        },
          tabBarIcon:({focused, size, color})=>{
            let iconName;
            if(route.name === "HomeScreen"){
                iconName = 'home';
                size = focused ? 20 : 17;
            } else if(route.name === "LandingScreen"){
                iconName = 'pen';
                size = focused ? 20 : 17;
                color = focused ? 'brown' : 'black'
            } else if(route.name === "Event"){
                iconName = 'calendar-alt';
                size = focused ? 20 : 17;
                color = focused ? 'brown' : 'black'
            } else if(route.name === "Notes"){
                iconName = 'sticky-note';
                size = focused ? 20 : 17;
                color = focused ? 'brown' : 'black'
            } else if(route.name === "Profile"){
                iconName = 'user-alt';
                size = focused ? 20 : 17;
                color = focused ? 'brown' : 'black'
            }else if(route.name === "Notification"){
              iconName = 'bell';
              size = focused ? 20 : 17;
              color = focused ? 'brown' : 'black'
          }
            return (
                <FontAwesome5 name={iconName} size={size} color={color}/>
            )

          }
      })}
      >
            <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
            {/* <Tab.Screen name="About" component={About} options={{ headerShown: false }}/> */}
            <Tab.Screen name="LandingScreen" component={LandingScreen} options={{ headerShown: false }}/>
            {/* <Tab.Screen name="ReadPage" component={ReadPage} options={{ headerShown: false }}/> */}
            {/* <Tab.Screen name="Event" component={Event} options={{ headerShown: false }}/> */}
            {/* <Tab.Screen name="Notes" component={Notes} options={{ headerShown: false }}/> */}
            {/* <Tab.Screen name="Notification" component={Notification} options={{ headerShown: false }}/> */}
            {/* <Tab.Screen name="UpdateNote" component={UpdateNote} options={{ headerShown: false }}/> */}
            {/* <Tab.Screen name="Note" component={Note} options={{ headerShown: false }}/> */}
            {/* <Tab.Screen name="AddNote" component={AddNote} options={{ headerShown: false }}/> */}
            {/* <Tab.Screen name="Profile" component={Profile_Settings} options={{ headerShown: false }}/> */}
          {/* <Tab.Screen name="Profile" component={Profile_Settings} />{" "} */}
        </Tab.Navigator>
    </>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({

});
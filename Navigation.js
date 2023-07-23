import { View, Text,StyleSheet } from "react-native";
import React from "react";
import Calls from "./src/screens/Calls";
import ChatScreen from "./src/screens/ChatScreen";
import Community from "./src/screens/Community";
import StatusScreen from "./src/screens/StatusScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarIndicatorStyle: { backgroundColor: "white" },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: "#0e806a",
        },
      }}
    >
      <Tab.Screen
        name="Community"
        component={Community}
              options={{
                  tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name='account-group' size={24}  color={color} />
                  ),
                  tabBarLabelStyle: styles.tabBarLabel
              }}
      />
      <Tab.Screen name="Chats" component={ChatScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({
    tabBarLabel: {
        display:'none'
    }
})

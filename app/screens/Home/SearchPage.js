import React, { Component } from "react";
import { Text, StyleSheet, View, Platform } from "react-native";
import { SearchBar } from "react-native-elements";
import BaseComponent from "../../common-components/BaseComponent";
import { userLogic } from "../../logic/user-logic";
import SearchList from "./SearchList";
import SearchDetailPage from "./SearchDetailPage";
import VisitedUserProfilePage from "./VisitedUserProfilePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default class SearchPage extends BaseComponent {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { height: 0, width: 0, display: "none" },
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="SearchDetail"
          options={{
            tabBarVisible: false,
          }}
          component={SearchDetailPage}
        />
        <Tab.Screen
          name="VisitedProfile"
          options={{
            tabBarVisible: false,
          }}
          component={VisitedUserProfilePage}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({});

import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import BaseComponent from "../../common-components/BaseComponent";
import SearchDetailPage from "./SearchDetailPage";
import VisitedUserProfilePage from "./VisitedUserProfilePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CommentPage from "../CommentPage";

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
        <Tab.Screen
          name="Comment"
          component={CommentPage}
          options={{
            tabBarButton: () => null,
            tabBarVisible: false, // if you don't want to see the tab bar
          }}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({});

import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FlowPage from "./FlowPage";
import ProfilePage from "./ProfilePage";
import NewEventPage from "./NewEventPage";
import SearchPage from "./SearchPage";
import { Icon } from "react-native-elements";
const Tab = createBottomTabNavigator();

// rnc
// rnf
// rnfs
// rnfe
// rnfes
// rncs
// rnce

class HomePage extends Component {
  state = {};
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            if (route.name == "Flow")
              return (
                <Icon
                  name="home"
                  size={30}
                  type="antdesign"
                  color={focused ? "black" : "gray"}
                />
              );
            else if (route.name == "Profile")
              return (
                <Icon
                  name="user"
                  size={40}
                  type="evilicon"
                  color={focused ? "black" : "gray"}
                />
              );
            else if (route.name == "Search")
              return (
                <Icon
                  name="search1"
                  type="antdesign"
                  size={30}
                  color={focused ? "black" : "gray"}
                />
              );
            else if (route.name == "NewEvent")
              return (
                <Icon
                  name="create-outline"
                  type="ionicon"
                  size={32}
                  color={focused ? "black" : "gray"}
                />
              );
          },

          tabBarActiveTintColor: "red",
          headerStatusBarHeight: 5,
          headerTitleStyle: { color: "black" },
          headerTitleAlign: "center",
          title: "BeSocial",
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name="Flow" component={FlowPage} />
        <Tab.Screen name="Search" component={SearchPage} />
        <Tab.Screen name="NewEvent" component={NewEventPage} />
        {/* <Tab.Screen
          options={{
            tabBarButton: () => null,
            tabBarVisible: false, // if you don't want to see the tab bar
          }}
          name="VisitedProfile"
          component={VisitedUserProfilePage}
        /> */}
        <Tab.Screen name="Profile" component={ProfilePage} />
      </Tab.Navigator>
    );
  }
}

export default HomePage;

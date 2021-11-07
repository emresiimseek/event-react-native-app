import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import FlowPage from './FlowPage';
import ProfilePage from './ProfilePage';
import NewEventPage from './NewEventPage';
import { Pressable, TouchableOpacity } from 'react-native';
const Tab = createBottomTabNavigator();

// rnc
// rnf
// rnfs
// rnfe
// rnfes
// rncs
// rnce

class HomePage extends Component {
    state = {}
    render() {
        return (
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    if (route.name == "Flow")
                        return <Icon name="home" size={30} color={focused ? "black" : "gray"} ></Icon>
                    else if (route.name == "Profile")
                        return <Icon name="user" size={30} color={focused ? "black" : "gray"} />
                    else if (route.name == "NewEvent")
                        return <Icon name="plus-circle" size={30} color={focused ? "black" : "gray"} />
                },

                tabBarActiveTintColor: "red",
                headerStatusBarHeight: 10,
                headerTitleStyle: { color: "black", },
                headerTitleAlign: "center",
                title: 'BeSocial',
                tabBarShowLabel: false,
            })}  >
                <Tab.Screen name="NewEvent" component={NewEventPage} />

                <Tab.Screen name="Flow" component={FlowPage} />
                <Tab.Screen name="Profile" component={ProfilePage} />

            </Tab.Navigator >
        )
    }
}

export default HomePage;
import React, { Component } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import FlowPage from './FlowPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

// imrc
// ims
// slr
// ccs
// cccs
// ees


class HomePage extends Component {
    state = {}
    render() {
        return (
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: () => {
                    if (route.name == "Flow")
                        return <Icon name="home" size={30} />
                },
                headerStyle: { backgroundColor: '#00000050' },
                headerTitleStyle: { color: "white", },
                headerTitleAlign: "center",
                title: 'Akış',
                tabBarShowLabel: false,
            })} >
                <Tab.Screen name="Flow" component={FlowPage} />
            </Tab.Navigator >
        )
    }
}

export default HomePage;
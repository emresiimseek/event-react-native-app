import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomePage from './app/screens/WelcomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from './app/common-components/CoButton';
import LoginPage from './app/screens/LoginPage';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={WelcomePage} >
        <Stack.Screen name="Welcome" component={WelcomePage}
          options={{
            headerStyle: { backgroundColor: '#00000050', },
            headerTitleStyle: { color: "white", },
            title: 'BeSocial',
          }} />
        <Stack.Screen name="Login" component={LoginPage}
          options={{
            headerStyle: { backgroundColor: '#00000050', },
            headerTitleStyle: { color: "white", },
            title: 'Giriş',
          }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

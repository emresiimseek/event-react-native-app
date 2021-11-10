import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomePage from "./app/screens/WelcomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Button from "./app/common-components/CoButton";
import LoginPage from "./app/screens/LoginPage";
import SignIn from "./app/screens/SignIn";
import Toast from "react-native-toast-message";
import HomePage from "./app/screens/Home/HomePage";
import FlowPage from "./app/screens/Home/FlowPage";
import ProfilePage from "./app/screens/Home/ProfilePage";
import NewEventPage from "./app/screens/Home/NewEventPage";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <React.Fragment>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={HomePage}>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{
              headerStyle: { backgroundColor: "#00000050" },
              headerTitleStyle: { color: "white" },
              headerTitleAlign: "center",
              headerShown: false,
              title: "Ana Sayfa",
            }}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomePage}
            options={{
              headerStyle: { backgroundColor: "#00000050" },
              headerTitleStyle: { color: "white" },
              headerTitleAlign: "center",
              title: "BeSocial",
            }}
          />

          <Stack.Screen name="NewEvent" component={NewEventPage} />
          <Stack.Screen name="Flow" component={FlowPage} />
          <Stack.Screen name="Profile" component={ProfilePage} />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{
              headerStyle: { backgroundColor: "#00000050" },
              headerTitleStyle: { color: "white" },
              headerTitleAlign: "center",
              title: "Giriş",
            }}
          />
          <Stack.Screen
            name="Signin"
            component={SignIn}
            options={{
              headerStyle: { backgroundColor: "#00000050" },
              headerTitleStyle: { color: "white" },
              headerTitleAlign: "center",
              title: "Kayıt Ol",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button } from "react-native-elements";

function WelcomePage({ props, navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/img/fun.jpg")}
    >
      <SafeAreaView>
        <View style={styles.topArea}>
          <View style={styles.slideArea}>
            <Text style={styles.textArea}>
              BeSocail ile tanış!{"\n"}
              {"\n"}
              Etkinlikler oluştur,{"\n"}
              Etkinliklere katıl,{"\n"}
              Yeni insanlar ile tanış.{"\n"}
            </Text>
          </View>
        </View>
        <View style={styles.bottomArea}>
          <Button
            title="Giriş"
            icon={{ name: "login", type: "antdesign", color: "white" }}
            onPress={() => navigation.navigate("Login")}
            buttonStyle={{ backgroundColor: "black", marginBottom: 10 }}
            iconContainerStyle={{ marginLeft: 10 }}
          />

          <Button
            title="Kaydol"
            iconPosition="left"
            icon={{
              name: "app-registration",
              type: "materialicon",
              color: "white",
            }}
            iconContainerStyle={{ marginLeft: 10 }}
            onPress={() => navigation.navigate("Signin")}
            buttonStyle={{ backgroundColor: "black" }}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  bottomArea: {
    height: "20%",
    marginHorizontal: 10,
  },
  topArea: {
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  slideArea: {
    backgroundColor: "#00000050",
    width: "90%",
    height: "60%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textArea: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
});

export default WelcomePage;

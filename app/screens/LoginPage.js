import React, { Component } from "react";
import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import BaseComponent from "../common-components/BaseComponent";
import UserLogic, { userLogic } from "../logic/user-logic";
import { Button, Input } from "react-native-elements";
import { getValidationItems } from "../logic/validations-utils";

class LoginPage extends BaseComponent {
  state = { userName: "", password: "", ...this.baseState };

  login = async () => {
    const result = await this.handleRequest(() => userLogic.login(this.state));
    const errors = result?.errors?.flatMap((x) => x.errors);

    if (errors?.length) {
      errors.forEach((element) => {
        Toast.show({
          type: "error",
          text1: element,
          position: "bottom",
        });
      });
    }

    if (result?.model?.length) {
      Toast.show({
        type: "success",
        text1: "Giriş Başarılı.",
        position: "top",
      });

      AsyncStorage.setItem("user", JSON.stringify(result.model[0]));

      this.props.navigation.navigate("Home");
    }
  };

  render() {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 5,
            color: "black",
          }}
        >
          BeSocail
        </Text>
        <Input
          placeholder="Kullanıcı Adı"
          leftIcon={{ type: "antdesign", name: "mail", size: 20 }}
          style={{ color: "black" }}
          value={this.state.userName}
          onChangeText={(userName) => this.setState({ userName })}
          errorMessage={getValidationItems(
            this.state.validations,
            "UserName",
            "Kullanıcı Adı"
          )}
        />
        <Input
          placeholder="Parola"
          leftIcon={{ type: "antdesign", name: "lock", size: 20 }}
          style={{ color: "black" }}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          secureTextEntry
          errorMessage={getValidationItems(
            this.state.validations,
            "Password",
            "Parola"
          )}
        />

        <Button
          loading={this.state.loading}
          title="Giriş"
          onPress={() => this.login()}
          buttonStyle={{ backgroundColor: "black" }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default LoginPage;

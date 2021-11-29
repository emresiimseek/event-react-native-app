import { SafeAreaView } from "react-native-safe-area-context";
import {
  ImageBackground,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import DefaultPageLayout from "../common-components/DefaultPageLayout";
import React, { Component } from "react";
import BaseComponent from "../common-components/BaseComponent";
import FormInput from "../common-components/FormInput";
import { userLogic } from "../logic/user-logic";
import Toast from "react-native-toast-message";
import { Button, Input } from "react-native-elements";
import { getValidationItems } from "../logic/validations-utils";

class SignIn extends BaseComponent {
  state = {
    user: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    },
    error: "",
    ...this.baseState,
  };

  signIn = async () => {
    const result = await this.handleRequest(() =>
      userLogic.save(this.state.user)
    );
    if (result?.errors?.length) {
      result.errors.forEach((element) => {
        Toast.show({
          type: "error",
          text1: element.errors.join("|"),
          position: "top",
        });
      });
    }

    if (result?.model?.length) {
      Toast.show({
        type: "success",
        text1: "Kullanıcı başarılı bir şekilde oluşturuldu.",
        position: "top",
      });

      this.state.user = {};

      this.props.navigation.navigate("Login");
    }
  };
  render() {
    return (
      <View style={{ padding: 20 }}>
        <Input
          value={this.state.user.firstName}
          onChangeText={(firstName) =>
            this.setState({ user: { ...this.state.user, firstName } })
          }
          placeholder="Adınız"
          rightIcon={{ name: "user", type: "antdesign" }}
          errorMessage={getValidationItems(
            this.state.validations,
            "FirstName",
            "Adınız"
          )}
        />

        <Input
          value={this.state.user.lastName}
          rightIcon={{ name: "user", type: "antdesign" }}
          onChangeText={(lastName) =>
            this.setState({ user: { ...this.state.user, lastName } })
          }
          placeholder="Soyadınız"
          errorMessage={getValidationItems(
            this.state.validations,
            "LastName",
            "Soyad"
          )}
        />

        <Input
          value={this.state.user.userName}
          rightIcon={{ name: "user", type: "antdesign" }}
          onChangeText={(userName) =>
            this.setState({ user: { ...this.state.user, userName } })
          }
          placeholder="Kullanıcı Adınız"
          errorMessage={getValidationItems(
            this.state.validations,
            "UserName",
            "Kullanıcı Adı"
          )}
        />

        <Input
          value={this.state.user.email}
          rightIcon={{ name: "mail", type: "antdesign" }}
          onChangeText={(email) =>
            this.setState({ user: { ...this.state.user, email } })
          }
          placeholder="E-Postanız"
          errorMessage={getValidationItems(
            this.state.validations,
            "Email",
            "E-Posta"
          )}
        />

        <Input
          value={this.state.user.password}
          secureTextEntry
          rightIcon={{ name: "lock", type: "antdesign" }}
          onChangeText={(password) =>
            this.setState({ user: { ...this.state.user, password } })
          }
          placeholder="Parolanız"
          errorMessage={getValidationItems(
            this.state.validations,
            "Password",
            "Parola"
          )}
        />

        <Button
          loading={this.state.loading}
          title="Kaydet"
          buttonStyle={{ backgroundColor: "black" }}
          onPress={() => this.signIn()}
        />

        <View style={{ alignItems: "center", flexDirection: "column" }}>
          {!!this.state.error && (
            <Text
              style={{
                color: "white",
                backgroundColor: "red",
                marginBottom: 5,
                padding: 3,
                borderRadius: 5,
                textAlign: "center",
                textTransform: "capitalize",
              }}
            >
              {this.state.error}
            </Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    color: "black",
    borderColor: "gray",
    backgroundColor: "white",
  },
});

export default SignIn;

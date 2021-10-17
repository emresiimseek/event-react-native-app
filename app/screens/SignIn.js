import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, StyleSheet, Text, ToastAndroid, View } from "react-native";
import DefaultPageLayout from "../common-components/DefaultPageLayout";
import React, { Component } from 'react';
import BaseComponent from "../common-components/BaseComponent";
import FormInput from "../common-components/FormInput";
import Button from "../common-components/CoButton";
import { userLogic } from "../logic/user-logic";
import Toast from "react-native-toast-message";

class SignIn extends BaseComponent {

    state = { user: { firstName: "", lastName: "", userName: "", email: "", password: "", }, error: "", ...this.baseState }

    signIn = async () => {
        const result = await this.handleRequest(() => userLogic.save(this.state.user));
        if (result.errors.length) {
            result.errors.forEach(element => {
                Toast.show({
                    type: 'error',
                    text1: element.errors.join("|"),
                    position: "top"
                });
            });
        }


        if (result.model.length) {
            Toast.show({
                type: 'success',
                text1: 'Kayıt başarılı bir şekilde oluşturuldu.',
                position: "top"
            });
        }

    }
    render() {
        return (
            <DefaultPageLayout>
                <Text style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: 15,
                    color: "white"
                }}>
                    Hesap Oluştur
                </Text>
                <FormInput style={styles.input}
                    value={this.state.user.firstName}
                    onChangeText={firstName => this.setState({ user: { ...this.state.user, firstName } })}
                    placeholder="İsim"
                    validations={this.state.validations}
                    fieldName="FirstName"
                />
                <FormInput style={styles.input}
                    value={this.state.user.lastName}
                    onChangeText={lastName => this.setState({ user: { ...this.state.user, lastName, } })}
                    placeholder="Soyisim"
                    validations={this.state.validations}
                    fieldName="LastName"
                />
                <FormInput style={styles.input}
                    value={this.state.user.userName}
                    onChangeText={userName => this.setState({ user: { ...this.state.user, userName } })}
                    placeholder="Kullanıcı Adı"
                    validations={this.state.validations}
                    fieldName="UserName"
                />
                <FormInput style={styles.input}
                    value={this.state.user.email}
                    onChangeText={email => this.setState({ user: { ...this.state.user, email } })}
                    placeholder="E-Posta"
                    validations={this.state.validations}
                    fieldName="Email"
                />
                <FormInput style={styles.input}
                    value={this.state.user.password}
                    onChangeText={password => this.setState({ user: { ...this.state.user, password, } })}
                    placeholder="Parola"
                    validations={this.state.validations}
                    fieldName="Password"
                    secureTextEntry={true}
                />
                <View style={{ alignItems: "center", flexDirection: "column" }}>
                    {!!this.state.error &&
                        <Text style={{
                            color: "white",
                            backgroundColor: "red",
                            marginBottom: 5,
                            padding: 3,
                            borderRadius: 5,
                            textAlign: 'center',
                            textTransform: "capitalize"
                        }}>{this.state.error}</Text>}


                    <Button loading={this.state.loading} text="Kaydet" color="black" width={50} onPress={() => this.signIn()} />

                </View>
            </DefaultPageLayout >
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
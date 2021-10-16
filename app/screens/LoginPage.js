import React, { Component } from 'react';
import { ActivityIndicator, Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import BaseComponent from '../common-components/BaseComponent';
import CoButton from '../common-components/CoButton';
import FormInput from '../common-components/FormInput';
import UserLogic, { userLogic } from '../logic/user-logic';

class LoginPage extends BaseComponent {
    state = { userName: "", password: "", error: "", ...this.baseState }

    login = async () => {
        const result = await this.handleRequest(() => userLogic.login(this.state));
        const error = result?.errors?.flatMap(x => x.errors).join(",") ?? "";
        this.setState({ error });
    }

    render() {
        return (
            <ImageBackground style={styles.background} source={require("../assets/img/fun.jpg")}>

                <View style={styles.loginContainer}>

                    <View style={styles.formContainer}>
                        <Text style={{
                            fontSize: 30,
                            fontWeight: "bold",
                            textAlign: "center",
                            marginBottom: 15,
                            color: "white"
                        }}>
                            BeSocail
                        </Text>
                        <FormInput style={styles.input}
                            value={this.state.userName}
                            onChangeText={userName => this.setState({ userName })}
                            placeholder="Kullanıcı Adı"
                            validations={this.state.validations}
                            fieldName="UserName"
                        />

                        <FormInput style={styles.input}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            placeholder="Parola"
                            validations={this.state.validations}
                            secureTextEntry={true}
                            fieldName="Password"
                        />

                        <View style={{ alignItems: 'center', }}>
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


                            <CoButton loading={this.state.loading} text="Giriş" color="black" width={50} onPress={() => this.login()} />
                        </View>

                    </View>

                </View>
            </ImageBackground>
        );
    }

}
const styles = StyleSheet.create({
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
    background: {
        flex: 1,
    },
    loginContainer: {
        justifyContent: 'center',
        flex: 1,
        marginBottom: 60,
    },
    formContainer: {
        backgroundColor: '#00000050',
        padding: 60,
        margin: 5,
        borderRadius: 5,
    }
});

export default LoginPage;
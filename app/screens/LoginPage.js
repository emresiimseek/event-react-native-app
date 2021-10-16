import React, { Component } from 'react';
import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import CoButton from '../common-components/CoButton';
import UserLogic, { userLogic } from '../logic/user-logic';

class LoginPage extends Component {
    state = { userName: "", password: "" }


    render() {
        return (
            <ImageBackground style={styles.background} source={require("../assets/img/fun.jpg")}>

                <View style={styles.loginContainer}>

                    <View style={styles.formContainer}>
                        <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", marginBottom: 15, color: "white" }}>BeSocail</Text>
                        <TextInput style={styles.input}
                            value={this.state.userName}
                            onChangeText={userName => this.setState({ userName })}
                            placeholder="Kullanıcı Adı"
                        />
                        <TextInput style={styles.input}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            placeholder="Parola"
                            secureTextEntry={true}
                        />
                        <View style={{ width: '50%', left: '25%' }}>
                            <CoButton text="Giriş" onPress={() => userLogic.login(this.state)} />

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
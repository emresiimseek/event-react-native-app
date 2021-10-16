import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View } from "react-native";

class DefaultPageLayout extends Component {
    state = {}
    render() {
        return (
            <ImageBackground style={styles.background} source={require("../assets/img/fun.jpg")}>
                <View style={styles.loginContainer}>
                    <View style={styles.formContainer}>
                        {this.props.children}
                    </View>
                </View>
            </ImageBackground >
        );
    }
}

const styles = StyleSheet.create({

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


export default DefaultPageLayout;
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function Button(props) {
    const { text = "Kaydet", onPress } = props;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
            activeOpacity={0.6}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "black",
        padding: 15,
        borderRadius: 5,
        margin: 5,
    },

    text: {
        color: "white"
    }
})

export default Button;
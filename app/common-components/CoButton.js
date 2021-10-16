import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Button(props) {
    const { text = "Kaydet", onPress, width = 100, color = "blue", padding = 10, loading = false } = props;

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={loading}
            style={styles.button}
            activeOpacity={0.6}
            style={{
                width: `${width}%`,
                backgroundColor: color,
                alignItems: "center",
                padding,
                marginBottom: 5,
                borderRadius: 5,

            }}
        >

            {loading ? <ActivityIndicator size="small" color="white" /> : <Text style={styles.text}>{text}</Text>}
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({

    text: {
        color: "white"
    }
})

export default Button;
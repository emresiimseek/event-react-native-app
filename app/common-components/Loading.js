import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

export default function Loading() {
    return (
        <ActivityIndicator size="large" style={styles.laoding} color="black" />
    )
}

const styles = StyleSheet.create({
    laoding: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFFFFF50",
        zIndex: 100,

    }
})


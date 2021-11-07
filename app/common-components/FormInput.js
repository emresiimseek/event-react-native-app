import React, { Component } from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native';
import ValidationList from "../common-components/ValidationList";


class FormInput extends Component {


    render() {
        const { value, onChangeText, placeholder, validations = [], fieldName, secureTextEntry = false, disabled } = this.props;

        return (

            <View style={{ alignItems: "center" }}>
                <TextInput style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    editable={!disabled}
                    selectTextOnFocus={!disabled}
                />
                <ValidationList validations={validations} fieldName={fieldName} placeHolder={placeholder} />
            </View>


        )
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
        width: '100%'
    },
});

export default FormInput

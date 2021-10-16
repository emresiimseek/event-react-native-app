import React, { Component } from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native';

const ValidationList = ({ validations, fieldName, labelName }) => {
    const values = setValidationItems(validations, fieldName, labelName);

    if (values.length) {
        return values.map(value => <Text style={{
            backgroundColor: "red", color: "white", marginBottom: 3, borderRadius: 5, padding: 3
        }} key={value}>{value}</Text>);
    }
    else return <View style={{ margin: 0, padding: 0 }}></View>
}

setValidationItems = (values, fieldName, labelName) => {
    let items = [];

    for (const key in values) {
        if (key == fieldName) {
            const data = values[key];
            items = data.map((d) => {
                const firstIndex = d.indexOf("'");
                const lastIndex = d.lastIndexOf("'");
                const value = d.slice(firstIndex + 1, lastIndex);
                return d.replace(value, labelName);
            });
        }
    }
    return items;

}


class FormInput extends Component {


    render() {
        const { value, onChangeText, placeholder, validations = [], fieldName, secureTextEntry = false } = this.props;

        return (

            <View style={{ alignItems: "center" }}>
                <TextInput style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                />
                <ValidationList validations={validations} fieldName={fieldName} labelName={placeholder} />
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

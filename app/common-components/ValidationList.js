import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ValidationList(props) {
  const { validations, fieldName, placeHolder } = props;

  const setValidationItems = (values, fieldName, labelName) => {
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
  };

  const List = ({ validations, fieldName, labelName }) => {
    const values = setValidationItems(validations, fieldName, labelName);

    if (values.length) {
      return values.map((value) => (
        <Text
          style={{
            backgroundColor: "red",
            color: "white",
            marginBottom: 3,
            borderRadius: 5,
            padding: 3,
          }}
          key={value}
        >
          {value}
        </Text>
      ));
    } else return <View style={{ margin: 0, padding: 0 }}></View>;
  };

  return (
    <View>
      <List
        validations={validations}
        fieldName={fieldName}
        labelName={placeHolder}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

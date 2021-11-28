import React from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import ValidationList from "../common-components/ValidationList";

export default function SelectPicker(props) {
  const {
    setSelectedValue,
    selectedValue,
    items,
    placeHolder = "Seçiniz",
    validations,
    fieldName,
  } = props;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item color="gray" label={placeHolder} />
          {items.map((item) => (
            <Picker.Item
              key={item.value}
              label={item.text}
              value={item.value}
            />
          ))}
        </Picker>
      </View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <ValidationList
          validations={validations}
          fieldName={fieldName}
          placeHolder={placeHolder}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    minHeight: 40,
    flex: 1,
    justifyContent: "center",
  },
});

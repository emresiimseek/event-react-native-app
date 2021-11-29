import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import FormInput from "./FormInput";
import Button from "../common-components/CoButton";
import moment from "moment";
import DateUtils from "../logic/date-utils";
import ValidationList from "../common-components/ValidationList";
import { Icon, Input } from "react-native-elements";
import { getValidationItems } from "../logic/validations-utils";

export default function DatePicker(props) {
  const {
    type,
    placeHolder = "Seçiniz",
    dateSelected,
    validations = [],
    fieldName,
  } = props;

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === "ios");

    if (event.type == "dismissed") return;

    const currentDate = selectedDate || date;
    setDate(currentDate);

    type == "time"
      ? setText(moment(currentDate).format("LT"))
      : setText(moment(currentDate).format("LL"));

    emitDate();
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const emitDate = () => {
    dateSelected(type == "time" ? date.toTimeString() : date.toDateString());
  };

  return (
    <View>
      {type == "time" ? (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Input
            value={text}
            rightIcon={{
              name: "clockcircleo",
              type: "antdesign",
              size: 20,
            }}
            onFocus={() => showTimepicker()}
            placeholder={placeHolder}
            errorMessage={getValidationItems(
              validations,
              fieldName,
              placeHolder
            )}
          />
        </View>
      ) : (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Input
            value={text}
            rightIcon={{
              name: "calendar",
              type: "antdesign",
              size: 20,
            }}
            onFocus={() => showDatepicker()}
            placeholder={placeHolder}
            errorMessage={getValidationItems(
              validations,
              fieldName,
              placeHolder
            )}
          />
        </View>
      )}

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});

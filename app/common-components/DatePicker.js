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
  const [text, setText] = useState("Boş");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
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
          <View style={{ flex: 2, marginRight: 5 }}>
            <FormInput placeholder={placeHolder} value={text} disabled={true} />
          </View>
          <View style={{ paddingTop: 4 }}>
            <Button
              icon="clock-o"
              color="black"
              text="Saat Seç"
              onPress={showTimepicker}
            />
          </View>
        </View>
      ) : (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 2, marginRight: 5 }}>
            <FormInput placeholder={placeHolder} value={text} disabled={true} />
          </View>
          <View style={{ paddingTop: 4 }}>
            <Button
              icon="calendar"
              color="black"
              text="Tarih Seç"
              onPress={showDatepicker}
            />
          </View>
        </View>
      )}
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <ValidationList
          validations={validations}
          fieldName={fieldName}
          placeHolder={placeHolder}
        />
      </View>

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

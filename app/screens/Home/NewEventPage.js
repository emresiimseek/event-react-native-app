import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Component } from "react";
import { Text, StyleSheet, View, Alert, ScrollView } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import Toast from "react-native-toast-message";
import BaseComponent from "../../common-components/BaseComponent";
import DatePicker from "../../common-components/DatePicker";
import FormInput from "../../common-components/FormInput";
import SelectPicker from "../../common-components/SelectPicker";
import dateUtils from "../../logic/date-utils";
import { eventLogic } from "../../logic/event-logic";
import { getValidationItems } from "../../logic/validations-utils";

export default class NewEventPage extends BaseComponent {
  state = {
    event: {
      title: "",
      description: "",
      eventDate: undefined,
      activityCategories: [],
      userActivities: [],
    },
    date: "",
    time: "",
    selectedCategoryId: undefined,
    categories: [],
    ...this.baseState,
  };

  setDate = (date) => {
    const value = dateUtils.dateToApiDate(new Date(date), true);
    this.setState({ date: value });
  };

  setTime = (time) => {
    this.setState({ time });
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    const categories = await eventLogic.getCategories();
    this.setState({ categories });
  };

  saveEvent = async () => {
    const user = JSON.parse(await AsyncStorage.getItem("user"));
    this.setEventDate();

    this.setState({
      event: {
        ...this.state.event,
        userActivities: [
          {
            userId: user?.id ?? 1,
            activityId: 0,
          },
        ],
      },
    });

    this.setState({
      event: {
        ...this.state.event,
        activityCategories: [
          {
            categoryId: this.state.selectedCategoryId,
            activityId: 0,
          },
        ],
      },
    });

    const result = await this.handleRequest(() =>
      eventLogic.saveEvent(this.state.event)
    );

    if (result) {
      Toast.show({
        type: "success",
        text1: "Başarılı.",
        position: "bottom",
      });
    }
  };

  setEventDate = () => {
    if (!this.state.date || !this.state.time) return;

    const eventDate = dateUtils.setTimeToApiDate(
      this.state.date,
      this.state.time
    );
    this.setState({ event: { ...this.state.event, eventDate } });
  };

  render() {
    return (
      <ScrollView>
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 5,
            height: "100%",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
            >
              Etlinlik Oluştur
            </Text>

            <Input
              value={this.state.event.title}
              rightIcon={{ name: "pencil", type: "evilicon" }}
              onChangeText={(title) =>
                this.setState({ event: { ...this.state.event, title } })
              }
              placeholder="Başlık"
              errorMessage={getValidationItems(
                this.state.validations,
                "Title",
                "Başlık"
              )}
            />

            <Input
              value={this.state.event.description}
              rightIcon={{ name: "pencil", type: "evilicon" }}
              onChangeText={(description) =>
                this.setState({
                  event: { ...this.state.event, description },
                })
              }
              placeholder="Açıklama"
              errorMessage={getValidationItems(
                this.state.validations,
                "Description",
                "Açıklama"
              )}
            />

            <DatePicker
              type="date"
              dateSelected={this.setDate}
              validations={this.state.validations}
              fieldName="EventDate"
              placeHolder="Tarih"
            />

            <DatePicker
              type="time"
              dateSelected={this.setTime}
              validations={this.state.validations}
              fieldName="EventDate"
              placeHolder="Saat"
            />

            <SelectPicker
              selectedValue={this.state.selectedCategoryId}
              placeHolder="Kategoriler"
              validations={this.state.validations}
              fieldName="ActivityCategories"
              setSelectedValue={(selectedCategoryId) =>
                this.setState({ selectedCategoryId })
              }
              items={this.state.categories}
            />
          </View>

          <Button
            onPress={() => this.saveEvent()}
            buttonStyle={{ backgroundColor: "black", marginTop: 10 }}
            icon={
              <Icon
                type="antdesign"
                name="save"
                size={20}
                style={{ marginRight: 5 }}
                color="white"
              />
            }
            title="Kaydet"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});

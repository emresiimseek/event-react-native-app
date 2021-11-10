import React, { Component } from "react";
import { ActivityIndicator, Button, ScrollView, View } from "react-native";
import BaseComponent from "../../common-components/BaseComponent";
import CardComponent from "../../common-components/CardComponent";
import CardList from "../../common-components/CardList";
import Loading from "../../common-components/Loading";
import { eventLogic } from "../../logic/event-logic";
import AsyncStorage from "@react-native-async-storage/async-storage";

class FlowPage extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = { events: [], ...this.baseState };
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents = async () => {
    const user = JSON.parse(await AsyncStorage.getItem("user"));

    // will delete
    const result = await this.handleRequest(() =>
      eventLogic.getEvents(user.id ?? 1)
    );

    if (result.length) {
      this.setState({ events: result });
    }
  };

  render() {
    return (
      <View style={{ backgroundColor: "white" }}>
        {this.state.loading && <Loading />}

        <CardList events={this.state.events} />
      </View>
    );
  }
}

export default FlowPage;

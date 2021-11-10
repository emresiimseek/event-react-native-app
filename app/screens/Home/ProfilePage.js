import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import BaseComponent from "../../common-components/BaseComponent";
import CardList from "../../common-components/CardList";
import { eventLogic } from "../../logic/event-logic";
import { userLogic } from "../../logic/user-logic";
import ProfileHeader from "./ProfileHeader";

export default class ProfilePage extends BaseComponent {
  state = { user: undefined, events: [] };

  getUser = async () => {
    const result = await this.handleRequest(() => userLogic.getUser(1));

    this.setState({ user: { result } });
  };

  getUserAvtivites = async () => {
    const result = await this.handleRequest(() =>
      eventLogic.getUserWithActivities(1)
    );

    this.setState({ events: result });
  };

  componentDidMount() {
    this.getUserAvtivites();
    this.getUser();
  }

  render() {
    return (
      <ScrollView>
        <ProfileHeader />
        <CardList events={this.state.events} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});

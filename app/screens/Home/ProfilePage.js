import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import BaseComponent from "../../common-components/BaseComponent";
import CardList from "../../common-components/CardList";
import Loading from "../../common-components/Loading";
import { eventLogic } from "../../logic/event-logic";
import { userLogic } from "../../logic/user-logic";
import ProfileHeader from "./ProfileHeader";

export default class ProfilePage extends BaseComponent {
  state = {
    user: undefined,
    events: [],
    userId: undefined,
    currentUserId: undefined,
    ...this.baseState,
  };

  getUser = async () => {
    const result = await this.handleRequest(() =>
      userLogic.getUser(this.state?.userId ?? this.state.currentUserId)
    );
    this.setState({ user: result });
  };

  getUserAvtivites = async () => {
    const result = await this.handleRequest(() =>
      eventLogic.getUserWithActivities(
        this.state?.userId ?? this.state.currentUserId
      )
    );

    this.setState({ events: result });
  };

  get = async () => {
    await this.setState({ userId: this.props?.route?.params?.userId });
    await this.setCurrentUser();
    await this.getUserAvtivites();
    await this.getUser();
  };

  setCurrentUser() {
    const user = () => JSON.parse(AsyncStorage.getItem("user"));
    this.setState({ currentUserId: 1 });
  }

  componentDidMount() {
    this.willFocusSubscription = this.props.navigation.addListener(
      "focus",
      () => {
        this.get();
      }
    );
  }

  render() {
    return (
      <ScrollView>
        {this.state.user && (
          <ProfileHeader
            user={this.state.user}
            eventCount={this.state.events.length}
            currentUserId={this.state.currentUserId}
          />
        )}
        {this.state.loading && <Loading />}

        <CardList events={this.state.events} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});

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
    currentUser: undefined,
    visitedUser: undefined,
    myUserId: undefined,
    events: [],
    ...this.baseState,
  };

  getCurrentUser = async () => {
    const result = await this.handleRequest(() =>
      userLogic.getUser(this.state.myUserId)
    );
    this.setState({ currentUser: result });
  };

  getVisitedUser = async () => {
    const id = this.props?.route?.params?.visitedUserId;

    if (!id) return;

    const result = await this.handleRequest(() => userLogic.getUser(id));
    this.setState({ visitedUser: result });
  };

  getUserAvtivites = async () => {
    const result = await this.handleRequest(() =>
      eventLogic.getUserWithActivities(this.state.myUserId)
    );

    this.setState({ events: result });
  };

  get = async () => {
    this.setCurrentUser();
    await this.getVisitedUser();
    await this.getCurrentUser();
    await this.getUserAvtivites();
  };

  setCurrentUser() {
    const user = () => JSON.parse(AsyncStorage.getItem("user"));
    this.setState({ myUserId: 1 });
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
        {this.state.currentUser && (
          <ProfileHeader
            user={this.state.currentUser}
            eventCount={this.state.events.length}
            currentUser={this.state.currentUser}
          />
        )}

        {this.state.loading && <Loading />}

        <CardList events={this.state.events} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});

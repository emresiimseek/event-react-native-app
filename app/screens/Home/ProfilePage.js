import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { StyleSheet } from "react-native";
import BaseComponent from "../../common-components/BaseComponent";
import CardList from "../../common-components/CardList";
import Page from "../../common-components/Page";
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
    // this.willFocusSubscription = this.props.navigation.addListener(
    //   "focus",
    //   () => {}
    // );
    this.get();
  }

  render() {
    return (
      <Page loading={this.state.loading} onRefresh={() => this.get()}>
        {this.state.currentUser && (
          <ProfileHeader
            user={this.state.currentUser}
            eventCount={this.state.events.length}
            currentUser={this.state.currentUser}
          />
        )}
        <CardList events={this.state.events} />
      </Page>
    );
  }
}

const styles = StyleSheet.create({});

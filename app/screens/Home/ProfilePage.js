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
    user: null,
    myUserId: null,
    events: [],
    ...this.baseState,
  };

  getCurrentUser = async () => {
    const result = await this.handleRequest(() =>
      userLogic.getUser(this.state.myUserId)
    );
    this.setState({ user: result });
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
    this.forceUpdate();
  };

  get = async () => {
    await this.setCurrentUser();
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
        {this.state.user && (
          <ProfileHeader
            user={this.state.user}
            eventCount={this.state.events.length}
            isVisibleHeader={true}
          />
        )}
        <CardList
          events={this.state.events}
          likedEvent={() => this.getUserAvtivites()}
        />
      </Page>
    );
  }
}

const styles = StyleSheet.create({});

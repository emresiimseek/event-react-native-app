import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { StyleSheet } from "react-native";
import BaseComponent from "../../common-components/BaseComponent";
import CardList from "../../common-components/CardList";
import Page from "../../common-components/Page";
import { eventLogic } from "../../logic/event-logic";
import { userLogic } from "../../logic/user-logic";
import ProfileHeader from "./ProfileHeader";

export default class VisitedUserProfilePage extends BaseComponent {
  state = {
    currentUser: null,
    visitedUser: null,
    myUserId: null,
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
      eventLogic.getUserWithActivities(this.state.visitedUser.id)
    );

    this.setState({ events: result });
  };

  get = async () => {
    this.setCurrentUser();
    await this.getVisitedUser();
    await this.getCurrentUser();
    await this.getUserAvtivites();
  };

  setCurrentUser = () => {
    const user = () => JSON.parse(AsyncStorage.getItem("user"));
    this.setState({ myUserId: 1 });
  };

  componentDidMount() {
    this.willFocusSubscription = this.props.navigation.addListener(
      "focus",
      () => {
        this.get();
      }
    );
  }

  followUser = async () => {
    await this.handleRequest(() =>
      userLogic.follow({
        userParentId: this.state.myUserId,
        userChildId: this.state.visitedUser.id,
      })
    );
    await this.get();
    this.forceUpdate();
  };

  unFollowUser = async () => {
    await this.handleRequest(() =>
      userLogic.unFollow({
        userParentId: this.state.myUserId,
        userChildId: this.state.visitedUser.id,
      })
    );

    await this.get();
    this.forceUpdate();
  };

  render() {
    return (
      <Page loading={this.state.loading} onRefresh={this.get}>
        {this.state.visitedUser && (
          <ProfileHeader
            user={this.state.visitedUser}
            eventCount={this.state.events.length}
            currentUser={this.state.currentUser}
            followClicked={() => this.followUser()}
            unFollowClicked={() => this.unFollowUser()}
            isVisibleBack={true}
          />
        )}

        <CardList events={this.state.events} />
      </Page>
    );
  }
}

const styles = StyleSheet.create({});

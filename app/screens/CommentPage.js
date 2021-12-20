import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Avatar, Button, Icon, Input, ListItem } from "react-native-elements";
import BaseComponent from "../common-components/BaseComponent";
import Page from "../common-components/Page";
import { eventLogic } from "../logic/event-logic";
import { commentLogic } from "../logic/comment-logic";

import { directNested, navigate } from "../RootNavigation.js";

export default class CommentPage extends BaseComponent {
  state = {
    event: null,
    comments: [],
    commentText: "",
    currentComment: { userId: null, activityId: null, text: null, user: null },
    ...this.baseState,
  };

  componentDidMount() {
    Promise.all([this.getEvent(), this.getComments()]);
  }

  getEvent = async () => {
    const event = await this.handleRequest(() =>
      eventLogic.getMainEvent(this.props.route.params.eventId, 1)
    );

    if (!event) return;

    this.setState({ event });
  };

  getComments = async () => {
    const comments = await this.handleRequest(() =>
      commentLogic.getComments(this.props.route.params.eventId)
    );

    this.setState({ comments: comments });
  };

  saveComment = () => {
    const activityId = this.props.route.params.eventId;
    const userId = 1;

    this.setState({
      currentComment: { ...this.state.currentComment, activityId, userId },
    });

    const value = this.handleRequest(() =>
      commentLogic.saveComment(this.state.currentComment)
    );
  };

  replyComment = () => {
    alert("reply comment");
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Page loading={this.state.loading} onRefresh={() => this.getEvent()}>
          {this.state.event && (
            <ListItem
              style={{ marginVertical: 10 }}
              onPress={() =>
                navigate("VisitedProfile", {
                  visitedUserId: this.state.event.userId,
                })
              }
              bottomDivider
            >
              <Avatar
                rounded
                title={this.state.event.avatarLetter.toUpperCase()}
                containerStyle={{ backgroundColor: "gray" }}
                titleStyle={{ color: "white" }}
                size={40}
              />

              <ListItem.Content>
                <ListItem.Title>{this.state.event.userName}</ListItem.Title>
                <ListItem.Subtitle>
                  <Text style={{ fontWeight: "bold" }}>
                    {this.state.event.activityTitle}
                  </Text>
                  {"\n"}
                  <Text style={{ fontWeight: "bold" }}>
                    {this.state.event.activityDescription}
                  </Text>
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )}

          {this.state.comments?.length ? (
            this.state.comments.map((c) => (
              <ListItem.Swipeable
                key={c.text}
                bottomDivider
                onPress={() =>
                  navigate("VisitedProfile", {
                    visitedUserId: this.state.event.userId,
                  })
                }
                rightContent={
                  <Button
                    onPress={() => this.replyComment()}
                    title="Cevapla"
                    icon={{ name: "reply", color: "white", type: "entypo" }}
                    buttonStyle={{
                      minHeight: "100%",
                    }}
                  />
                }
              >
                <Icon name="user" type="evilicon" size={50} />
                <ListItem.Content>
                  <ListItem.Title>{c.user.userName}</ListItem.Title>
                  <ListItem.Subtitle>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ fontWeight: "bold", flex: 1 }}>
                        {c.text}
                      </Text>

                      <Button
                        title="Cevapla"
                        buttonStyle={{ backgroundColor: "transparent" }}
                        titleStyle={{ color: "#00BFFF", fontSize: 10 }}
                        onPress={() => this.replyComment()}
                      />
                    </View>
                  </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem.Swipeable>
            ))
          ) : (
            <Text
              style={{
                textAlign: "center",
                fontWeight: "100",
                color: "gray",
                marginTop: 5,
                flex: 1,
                padding: 20,
                backgroundColor: "white",
              }}
            >
              Yorum yok
            </Text>
          )}
        </Page>

        {this.state.event && (
          <View
            style={{
              width: "100%",
              position: "absolute", //Here is the trick
              backgroundColor: "white",
              flexDirection: "row",
              borderTopColor: "#e0e0e0",
              alignItems: "center",
              borderTopWidth: 1,
              padding: 20,
              bottom: 0, //Here is the trick
            }}
          >
            <Avatar
              rounded
              title={this.state.event.avatarLetter.toUpperCase()}
              containerStyle={{ backgroundColor: "gray" }}
              titleStyle={{ color: "white" }}
              size={40}
            />
            <TextInput
              style={{
                margin: 12,
                minHeight: 40,
                borderBottomWidth: 1,
                borderBottomColor: "#c7c7c7",
                flex: 1,
              }}
              multiline={true}
              numberOfLines={1}
              onChangeText={(text) =>
                this.setState({
                  currentComment: { ...this.state.currentComment, text },
                })
              }
              value={this.state.currentComment.text}
            />

            <Button
              title="Gönder"
              buttonStyle={{ backgroundColor: "transparent" }}
              titleStyle={{ color: "#00BFFF" }}
              onPress={() => this.saveComment()}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

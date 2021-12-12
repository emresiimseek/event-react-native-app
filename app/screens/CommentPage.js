import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Avatar, Button, Icon, ListItem } from "react-native-elements";
import BaseComponent from "../common-components/BaseComponent";
import Page from "../common-components/Page";
import { eventLogic } from "../logic/event-logic";
import { directNested, navigate } from "../RootNavigation.js";

export default class CommentPage extends BaseComponent {
  state = { event: null, comments: [], commentText: "", ...this.baseState };

  componentDidMount() {
    this.getEvent();
  }

  getEvent = async () => {
    const event = await this.handleRequest(() =>
      eventLogic.getMainEvent(this.props.route.params.eventId, 1)
    );

    if (!event) return;

    this.setState({ event });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Page loading={this.state.loading} onRefresh={() => this.getEvent()}>
          {this.state.event && (
            <ListItem
              style={{ marginTop: 10 }}
              onPress={() =>
                directNested("Search", "VisitedProfile", {
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
              <ListItem
                style={{ marginTop: 10 }}
                onPress={() =>
                  navigate("Search", {
                    visitedUserId: this.state.event.userId,
                  })
                }
                bottomDivider
              >
                <Icon name="user" type="evilicon" size={50} />
                <ListItem.Content>
                  <ListItem.Title>{c.userName}</ListItem.Title>
                  <ListItem.Subtitle>
                    <Text style={{ fontWeight: "bold" }}>{c.comment}</Text>
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
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
                borderWidth: 1,
                borderColor: "#c7c7c7",
                flex: 1,
                borderRadius: 5,
              }}
              multiline={true}
              numberOfLines={2}
              onChangeText={(value) => this.setState({ commentText: value })}
              value={this.state.commentText}
            />
            <Button
              title="Gönder"
              buttonStyle={{ backgroundColor: "transparent" }}
              titleStyle={{ color: "#00BFFF" }}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

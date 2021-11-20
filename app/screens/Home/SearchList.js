import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import BaseComponent from "../../common-components/BaseComponent";
import { ListItem, Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import * as RootNavigation from "../../RootNavigation.js";

export default class SearchList extends BaseComponent {
  render() {
    return (
      <View style={{ marginTop: 10 }}>
        {this.props?.users?.map((l, i) => (
          <ListItem
            onPress={() =>
              RootNavigation.navigate("VisitedProfile", { visitedUserId: l.id })
            }
            key={i}
            bottomDivider
          >
            <Icon name="user-circle" size={30} />
            <ListItem.Content>
              <ListItem.Title style={{ textTransform: "capitalize" }}>
                {l.firstName + " " + l.lastName}
              </ListItem.Title>
              <ListItem.Subtitle>@{l.userName}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

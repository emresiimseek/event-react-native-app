import moment from "moment";
import "moment/locale/tr";
import React, { Component } from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { eventLogic } from "../logic/event-logic";
import BaseComponent from "../common-components/BaseComponent";

class CardComponent extends BaseComponent {
  state = { event: null, ...this.baseState };

  likeEvent = async () => {
    await this.handleRequest(() =>
      eventLogic.likeEvent(1, this.props.event.activityId)
    );
  };

  render() {
    moment.locale("tr");

    return (
      <View style={styles.cardContainer}>
        <View style={styles.header}>
          <View
            style={{
              flex: 1,
              marginLeft: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon name="user" type="evilicon" size={40} />
            <Text style={{ marginLeft: 5 }}>{this.props.event.userName}</Text>
          </View>

          <Icon
            name="ellipsis-v"
            style={{ marginRight: 10 }}
            type="font-awesome-5"
            color="gray"
            size={18}
          />
        </View>
        <View style={styles.body}>
          <ImageBackground
            style={{ width: "100%", height: "100%" }}
            source={{ uri: "https://reactjs.org/logo-og.png" }}
          />
        </View>
        <View style={styles.footer}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              {this.props.event?.usersLikes?.find((ul) => ul.userId == 1) ? (
                <Icon
                  name="heart"
                  onPress={() => alert("hello")}
                  type="font-awesome"
                  color="red"
                  size={20}
                />
              ) : (
                <Icon
                  style={{ marginRight: 5 }}
                  name="heart-o"
                  type="font-awesome"
                  onPress={() => this.likeEvent()}
                  onPressOut={this.props.likedEvent}
                  size={20}
                />
              )}

              <Icon
                style={{ marginRight: 5, marginLeft: 5 }}
                type="font-awesome-5"
                name="comment"
                size={20}
              />
              <Icon name="paper-plane-o" type="font-awesome" size={20} />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Icon name="users" type="entypo" size={16} />
              <Text style={{ fontSize: 12, marginLeft: 5 }}>
                15 Kişi Katılıyor
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <Text style={{ fontWeight: "bold", flex: 1 }}>
              {this.props.event.activityTitle}
            </Text>
            <View
              style={{
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text>
                  {moment(this.props.event.activityDate).format("LLL")}{" "}
                </Text>
                <Icon name="calendar" type="ant-design" />
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text>
                  {this.props.event.categories?.map((cat) => (
                    <Text key={cat.id}>{cat.title}</Text>
                  ))}{" "}
                </Text>
                <Icon name="tagso" type="ant-design" />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    borderColor: "#D3D3D3",
    backgroundColor: "white",
    borderBottomWidth: 1,
    flexDirection: "column",
    minHeight: 500,
  },
  header: {
    flex: 0.3,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  body: {
    marginTop: 5,
    flex: 4,
    borderTopColor: "#D3D3D3",
    borderTopWidth: 1,
  },
  footer: {
    borderTopColor: "#D3D3D3",
    borderTopWidth: 1,
    padding: 10,
    flexDirection: "column",
  },
});

export default CardComponent;

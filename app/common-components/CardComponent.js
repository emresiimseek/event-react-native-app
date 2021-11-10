import moment from "moment";
import "moment/locale/tr";
import React, { Component } from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class CardComponent extends Component {
  state = {};

  render() {
    moment.locale("tr");
    const {
      event = {
        userId: "",
        userName: "",
        userFullName: "",
        activityDescription: "",
        activityTitle: "",
        categories: [],
        activityDate: "",
      },
    } = this.props;

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
            <Icon name="user-circle" size={25} />
            <Text style={{ marginLeft: 5 }}>{event.userName}</Text>
          </View>

          <Icon
            name="ellipsis-v"
            style={{ marginRight: 10 }}
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
          <View style={{ flex: 1, justifyContent: "space-around" }}>
            <Text style={{ fontWeight: "bold" }}>{event.activityTitle}</Text>
            <Text style={{ fontSize: 10 }}>
              <Icon name="users" size={15} /> 15 Kişi Katılıyor
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "flex-end",
            }}
          >
            <Text>
              {moment(event.activityDate).format("LLL")}{" "}
              <Icon name="calendar" />
            </Text>
            <Text>
              {event.categories.map((cat) => (
                <Text key={cat.id}>{cat.title}</Text>
              ))}{" "}
              <Icon name="tag" />
            </Text>
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
    flexDirection: "row",
  },
});

export default CardComponent;

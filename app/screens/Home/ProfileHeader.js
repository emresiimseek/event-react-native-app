import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import BaseComponent from "../../common-components/BaseComponent.js";
import { userLogic } from "../../logic/user-logic.js";
import * as RootNavigation from "../../RootNavigation.js";

export default function ProfileHeader(props) {
  const { user, eventCount, currentUser, followClicked, unFollowClicked } =
    props;

  const emitFollow = () => {
    followClicked();
  };

  const emitUnFollow = () => {
    unFollowClicked();
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        marginTop: 5,
        marginBottom: 10,
        borderRadius: 5,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{ padding: 10, fontSize: 15, fontWeight: "bold", flex: 1 }}
        >
          {user?.userName}
        </Text>
        <Icon
          onPress={() => RootNavigation.navigate("Welcome")}
          name="sign-out-alt"
          size={20}
          style={{ marginRight: 5, padding: 10 }}
        />
        <Icon name="bars" size={20} style={{ marginRight: 5, padding: 10 }} />
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 80,
            marginRight: 10,
          }}
        >
          <Icon
            name="user-circle"
            size={50}
            style={{
              padding: 15,
            }}
          />
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: "column",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 20,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Etkinlik:{eventCount}</Text>
            <Text style={{ fontWeight: "bold" }}>
              Takipçi:{user?.areFirendsWithMe?.length}
            </Text>
            <Text style={{ fontWeight: "bold" }}>
              Takip:{user?.iAmFriendsWith?.length}
            </Text>
          </View>
          {user?.id != props?.currentUser?.id && (
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-evenly",
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              {currentUser?.iAmFriendsWith.some(
                (u) => u.userChildId == user?.id
              ) ? (
                <Icon.Button onPress={() => emitUnFollow()} name="user-minus">
                  Takip Çık
                </Icon.Button>
              ) : (
                <Icon.Button onPress={() => emitFollow()} name="user-plus">
                  Takip Et
                </Icon.Button>
              )}
              <Icon.Button name="envelope">Mesaj</Icon.Button>
            </View>
          )}
        </View>
      </View>
      <Text
        style={{
          textTransform: "capitalize",
          paddingBottom: 15,
          paddingLeft: 10,
        }}
      >
        {user.firstName + " " + user.lastName}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});

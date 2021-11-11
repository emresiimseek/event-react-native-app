import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as RootNavigation from "../../RootNavigation.js";

export default function ProfileHeader(props) {
  const { user, eventCount, currentUserId } = props;

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
            height: 100,
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
            }}
          >
            <Text>Etkinlik:{eventCount}</Text>
            <Text>Takipçi:{user.areFirendsWithMe.length}</Text>
            <Text>Takip:{user.iAmFriendsWith.length}</Text>
          </View>
          {user.id != props?.currentUserId && (
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-evenly",
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <Icon.Button name="user-plus">Takip Et</Icon.Button>
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

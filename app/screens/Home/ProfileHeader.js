import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
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
        marginTop: 5,
        marginBottom: 10,
        borderRadius: 5,
      }}
    >
      <View
        style={{
          padding: 5,
          marginBottom: 5,
          backgroundColor: "white",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {props.isVisibleBack && (
          <FontAwesome5
            name="arrow-left"
            onPress={() => RootNavigation.navigate("SearchDetail")}
            size={25}
            style={{ marginLeft: 10 }}
          />
        )}

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <FontAwesome5
            onPress={() => RootNavigation.navigate("Welcome")}
            name="door-open"
            size={25}
            style={{ marginRight: 5, padding: 10 }}
          />
          <FontAwesome5
            name="bars"
            size={25}
            style={{ marginRight: 5, padding: 10 }}
          />
        </View>
      </View>
      <View style={{ backgroundColor: "white" }}>
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
            <Icon reverse name="user" type="antdesign" color="gray" size={33} />
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
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Etkinlik:{eventCount}
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Takipçi:{user?.areFirendsWithMe?.length}
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
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
                  <FontAwesome5.Button
                    onPress={() => emitUnFollow()}
                    name="user-minus"
                  >
                    Takip Çık
                  </FontAwesome5.Button>
                ) : (
                  <FontAwesome5.Button
                    onPress={() => emitFollow()}
                    name="user-plus"
                  >
                    Takip Et
                  </FontAwesome5.Button>
                )}
                <FontAwesome5.Button name="envelope">Mesaj</FontAwesome5.Button>
              </View>
            )}
          </View>
        </View>
        <Text
          style={{
            textTransform: "capitalize",
            paddingLeft: 10,
          }}
        >
          {user.firstName + " " + user.lastName}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            paddingBottom: 15,
            paddingLeft: 10,
          }}
        >
          {user?.userName}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

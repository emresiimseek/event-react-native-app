import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon } from "react-native-elements";

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
          <Icon
            name="arrowleft"
            onPress={() => RootNavigation.navigate("SearchDetail")}
            type="antdesign"
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
          <Icon
            name="logout"
            onPress={() => RootNavigation.navigate("Welcome")}
            type="antdesings"
            size={25}
            style={{ marginLeft: 10 }}
          />
          <Icon
            name="bars"
            type="antdesign"
            size={25}
            style={{ marginLeft: 10, marginRight: 10 }}
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
              marginTop: 10,
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
                  marginTop: 20,
                }}
              >
                {currentUser?.iAmFriendsWith.some(
                  (u) => u.userChildId == user?.id
                ) ? (
                  <Button
                    onPress={() => emitUnFollow()}
                    icon={
                      <Icon
                        type="antdesign"
                        name="deleteuser"
                        size={20}
                        style={{ marginRight: 5 }}
                        color="white"
                      />
                    }
                    title="Takipten Çık"
                  />
                ) : (
                  <Button
                    onPress={() => emitFollow()}
                    icon={
                      <Icon
                        type="antdesign"
                        name="adduser"
                        size={20}
                        style={{ marginRight: 5 }}
                        color="white"
                      />
                    }
                    title="Takip Et"
                  />
                )}
                <Button
                  icon={
                    <Icon
                      type="antdesign"
                      name="message1"
                      size={20}
                      style={{ marginRight: 5 }}
                      color="white"
                    />
                  }
                  title="Mesaj"
                />
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

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function ProfileHeader() {
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
          emresimsekm
        </Text>
        <Icon name="bars" size={20} style={{ marginRight: 5, padding: 10 }} />
      </View>
      <View
        style={{
          flexDirection: "row",
          padding: 15,
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
            name="user"
            size={50}
            style={{
              padding: 15,
            }}
          />
          <Text>Emre Simsek</Text>
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
            <Text>Etkinlik:5</Text>
            <Text>Takipçi:15</Text>
            <Text>Takip:10</Text>
          </View>
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
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
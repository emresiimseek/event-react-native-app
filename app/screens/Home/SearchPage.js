import React, { Component } from "react";
import { Text, StyleSheet, View, Platform } from "react-native";
import { SearchBar } from "react-native-elements";
import BaseComponent from "../../common-components/BaseComponent";
import { userLogic } from "../../logic/user-logic";
import SearchList from "./SearchList";
import { v4 as uuidv4 } from "uuid";

export default class SearchPage extends BaseComponent {
  state = { search: "", users: [], ...this.baseState };

  updateSearch = (search) => {
    this.setState({ search });
    this.getUser();
  };

  getUser = async () => {
    const result = await this.handleRequest(() =>
      userLogic.search(this.state.search, uuidv4())
    );

    this.setState({ users: result });
  };

  render() {
    return (
      <View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          lightTheme
          platform={Platform.OS == "ios" ? "ios" : "android"}
          value={this.state.search}
          showLoading={this.state.loading}
          loadingProps={{
            color: "black",
          }}
        />
        <SearchList users={this.state.users} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

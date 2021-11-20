import React, { Component } from "react";
import { ScrollView, RefreshControl } from "react-native";

export default class Page extends Component {
  render() {
    return (
      <React.Fragment>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.props.loading}
              onRefresh={this.props.onRefresh}
            />
          }
        >
          {this.props.children}
        </ScrollView>
      </React.Fragment>
    );
  }
}

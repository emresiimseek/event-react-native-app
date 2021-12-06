import React, { Component } from "react";
import BaseComponent from "./BaseComponent";
import CardComponent from "./CardComponent";
import Page from "./Page";

export default class CardList extends BaseComponent {
  state = { ...this.baseState };

  render() {
    return (
      <React.Fragment>
        <Page loading={this.props.loading} onRefresh={this.props.onRefresh}>
          {this.props.events?.map((event, i) => (
            <CardComponent
              event={event}
              key={i}
              likedEvent={this.props.likedEvent}
              navigation={this.props.navigation}
            />
          ))}
        </Page>
      </React.Fragment>
    );
  }
}

import React from "react";
import { View } from "react-native";
import BaseComponent from "../../common-components/BaseComponent";
import CardList from "../../common-components/CardList";
import { eventLogic } from "../../logic/event-logic";
import AsyncStorage from "@react-native-async-storage/async-storage";

class FlowPage extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = { events: [], ...this.baseState };
  }

  componentDidMount() {
    // this.willFocusSubscription = this.props.navigation.addListener(
    //   "focus",
    //   () => {}
    // );
    this.getEvents();
  }

  getEvents = async () => {
    const user = JSON.parse(await AsyncStorage.getItem("user"));

    // will delete
    const result = await this.handleRequest(() =>
      eventLogic.getEvents(user?.id ?? 1)
    );

    if (result?.length) {
      this.setState({ events: result });
    }
    this.forceUpdate();
  };

  render() {
    return (
      <View>
        <CardList
          onRefresh={() => this.getEvents()}
          events={this.state.events}
          loading={this.state.loading}
          likedEvent={() => this.getEvents()}
        />
      </View>
    );
  }
}

export default FlowPage;

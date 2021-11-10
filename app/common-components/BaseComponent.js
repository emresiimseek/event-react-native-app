import React, { Component } from "react";
import Toast from "react-native-toast-message";

class BaseComponent extends Component {
  baseState = { loading: false, validations: {} };

  async handleRequest(request) {
    this.setState({ loading: true });

    const result = await request();

    this.setState({
      validations: result?.errors?.response?.data?.errors ?? {},
    });

    if (result?.errors && !this.state.validations) {
      Toast.show({
        type: "error",
        text1: "Bir şeyler ters gitti.",
        position: "bottom",
      });
    }

    this.setState({ loading: false });

    return result?.errors ? undefined : result?.data;
  }

  render() {
    return <div></div>;
  }
}

export default BaseComponent;

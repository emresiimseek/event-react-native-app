import React, { Component } from "react";
import { Button, ScrollView, View } from "react-native";
import BaseComponent from "../../common-components/BaseComponent";
import Card from "../../common-components/CardComponent";
import { eventLogic } from "../../logic/event-logic";

class FlowPage extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = { events: [] };
    }

    componentDidMount() {
        this.getEvents();
    }

    getEvents = async () => {
        const result = await this.handleRequest(() => eventLogic.getEvents());
        if (result.length) {
            this.setState({ events: result })
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: "white" }}>
                <Button title="tıkla" onPress={() => this.getEvents()}></Button>

                <ScrollView>
                    {this.state.events.map((event, i) => <Card event={event} key={i} />)}
                </ScrollView>

            </View>
        );
    }
}

export default FlowPage;
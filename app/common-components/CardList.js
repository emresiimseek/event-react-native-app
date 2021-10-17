import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import CardComponent from './CardComponent'

export default function CardList(props) {
    const { events } = props;

    return (
        <React.Fragment>
            <ScrollView>
                {events.map((event, i) => <CardComponent event={event} key={i} />)}
            </ScrollView>

        </React.Fragment>
    )
}

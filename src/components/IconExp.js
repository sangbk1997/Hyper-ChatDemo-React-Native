import React, { Component } from 'react'
import { Icon } from 'react-native-elements'
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
    Button,
    FlatList
} from 'react-native'

export default class IconExp extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        // this.onPressLearnMore = this.onPressLearnMore.bind(this);
    }

    render() {
        return (
            <View style={{marginTop: 50}}>
                <Text>Hello Sang Tigo</Text>
                <Icon
                    name='rowing' />

                <Icon
                    name='g-translate'
                    color='#blue' />

                <Icon
                    name='sc-telegram'
                    type='evilicon'
                    color='blue'
                />

                <Icon
                    reverse
                    name='ios-american-football'
                    type='ionicon'
                    color='blue'
                />

                <Icon
                    raised
                    name='heartbeat'
                    type='font-awesome'
                    color='blue'
                    onPress={() => console.log('hello')} />
            </View>
        )
    }
}

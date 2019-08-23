import React, { Component } from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native'

export default class ButtonExp extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        // this.onPressLearnMore = this.onPressLearnMore.bind(this);
    }

    onPressLearnMore = () => {
        console.log('Hello');
    }

    render() {
        return (
            <View style={{marginTop: 50}}>
                <Button
                    onPress={this.onPressLearnMore}
                    title="Learn More"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        )
    }
}

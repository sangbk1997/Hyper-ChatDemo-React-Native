import React, { Component } from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
    Button,
    Picker,
    SectionList,
    BackHandler,
    DatePickerAndroid
} from 'react-native'

export default class DatePickerExp extends Component {

    constructor(props) {
        super(props);
        this.state = {language: 'java'};
        // this.onPressLearnMore = this.onPressLearnMore.bind(this);
    }

    openDatePicker = async () => {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
                // Use `new Date()` for current date.
                // May 25 2020. Month 0 is January.
                date: new Date(2020, 4, 25),
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // Selected year, month (0-11), day
            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }
    }
    render() {
        return (
            <View style={{marginTop: 100}}>
                <Text onPress={this.openDatePicker}>Open Date Picker</Text>
            </View>
        )
    }
}

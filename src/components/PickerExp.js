import React, { Component } from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
    Button,
    Picker
} from 'react-native'

export default class PickerExp extends Component {

    constructor(props) {
        super(props);
        this.state = {language: 'java'};
        // this.onPressLearnMore = this.onPressLearnMore.bind(this);
    }

    onPressLearnMore = () => {
        console.log('Hello');
    }

    render() {
        return (
            <Picker
                selectedValue="java"
                mode="dialog"
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        )
    }
}

import React, {Component} from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
    Button,
    Picker, StatusBar
} from 'react-native'

export default class StatusBarExp extends Component {
    render() {
        return (
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "blue" translucent = {true}/>        )
    }
}

import React, {Component} from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
    Button,
    Picker, StatusBar, ToolbarAndroid
} from 'react-native'

export default class ToolBarExp extends Component {
    onActionSelected(position) {
        if (position === 0
        ) { // index of 'Settings'
            Alert("Toolbar");
        }
    }

    render() {
        return (
            <ToolbarAndroid
                logo={require('../static/images/mail.png')}
                title="AwesomeApp"
                actions={[{title: 'Settings', icon: require('../static/images/user.png'), show: 'always'}]}
                onActionSelected={this.onActionSelected}/>
        )
    }
}

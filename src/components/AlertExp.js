import React, {Component} from 'react';
import {View, Button, ToastAndroid, StyleSheet, Alert} from 'react-native';

export  default  class AlertExp extends Component {
    constructor(props) {
        super(props);
    }

    handleButtonPress = () => {
        // Works on both iOS and Android
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
        );
    }

    handleButtonPress2 = () => {
        // Works on both iOS and Android
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Alert" onPress={this.handleButtonPress} />
                <Button title="Alert2" onPress={this.handleButtonPress2} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 100
    }
})

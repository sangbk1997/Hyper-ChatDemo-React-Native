import React, {Component} from 'react';
import {View, Button, ToastAndroid, StyleSheet} from 'react-native';

// a component that calls the imperative ToastAndroid API
const Toast = (props) => {
    if (props.visible) {
        // ToastAndroid.showWithGravityAndOffset(
        //     props.message,
        //     ToastAndroid.LONG,
        //     ToastAndroid.BOTTOM,
        //     25,
        //     50,
        // );
        // ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
        ToastAndroid.showWithGravity(
            'All Your Base Are Belong To Us',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
        // ToastAndroid.showWithGravityAndOffset(
        //     'A wild toast appeared!',
        //     ToastAndroid.LONG,
        //     ToastAndroid.BOTTOM,
        //     25,
        //     50,
        // );
        return null;
    }
    return null;
};

export  default  class ToastExp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    handleButtonPress = () => {
        this.setState(
            {
                visible: true,
            },
            () => {
                this.hideToast();
            },
        );
    };

    hideToast = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Toast visible={this.state.visible} message="Example" />
                <Button title="Toggle Modal" onPress={this.handleButtonPress} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 100
    }
})

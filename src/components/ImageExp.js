import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class DisplayAnImage extends Component {
    render() {
        return (
            <View>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('../static/images/messenger.png')}
                />
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
            </View>
        );
    }
}

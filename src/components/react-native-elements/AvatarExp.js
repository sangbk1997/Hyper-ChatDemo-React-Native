import React, {Component} from 'react';
import {View, Button, ToastAndroid, StyleSheet, Alert, Text} from 'react-native';
import {Avatar, Badge, Icon, withBadge} from 'react-native-elements';


export default class AvatarExp extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={{marginTop: 50}}>
                <Badge value="99+" status="error"/>
                <Badge value={<Text>My Custom Badge</Text>}/>

                <Badge status="success"/>
                <Badge status="error"/>
                <Badge status="primary"/>
                <Badge status="warning"/>

                <View>
                    <Avatar
                        rounded
                        source={{
                            uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                        }}
                        size="large"
                    />
                    <Badge
                        status="success"
                        containerStyle={{position: 'absolute', top: -4, right: -4}}
                    />
                </View>
            </View>
        )
    }
}


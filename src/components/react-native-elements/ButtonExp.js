import React, {Component} from 'react';
import {View, ToastAndroid, StyleSheet, Alert, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ButtonExp2 extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View>
                <Button
                    title="Solid Button"
                />

                <Button
                    title="Outline button"
                    type="outline"
                />

                <Button
                    title="Clear button"
                    type="clear"
                />

                <Button
                    icon={
                        <Icon
                            name="arrow-right"
                            size={15}
                            color="white"
                        />
                    }
                    title="Button with icon component"
                />

                <Button
                    icon={{
                        name: "arrow-right",
                        size: 15,
                        color: "white"
                    }}
                    title="Button with icon object"
                />

                <Button
                    icon={
                        <Icon
                            name="arrow-right"
                            size={15}
                            color="white"
                        />
                    }
                    iconRight
                    title="Button with right icon"
                />

                <Button
                    title="Loading button"
                    loading
                />
            </View>
        )
    }
}


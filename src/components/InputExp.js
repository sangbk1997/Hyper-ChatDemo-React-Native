import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

export default class InputExp extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }

    render() {
        return (
            <View style={{marginTop: 100}}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
            </View>
        );
    }
}

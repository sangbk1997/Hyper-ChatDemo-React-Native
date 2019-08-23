import React, {Component} from 'react';
import {View, Button, StyleSheet, KeyboardAvoidingView, TextInput} from 'react-native';

export default class KeyboardExp extends Component {
    constructor(props) {
        super(props);
        this.state = {text: 'Useless Placeholder'};
    }


    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <View style={styles.btn}>
                    <Button title="ABC"/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 200,
        backgroundColor: 'blue'
    },
    btn: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        backgroundColor: 'red'
    }
})

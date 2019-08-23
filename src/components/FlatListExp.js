import React, { Component } from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
    Button,
    FlatList
} from 'react-native'

export default class FlatListExp extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        // this.onPressLearnMore = this.onPressLearnMore.bind(this);
    }

    onPressLearnMore = () => {
        console.log('Hello');
    }

    render() {
        return (
            <View style={{marginTop: 50}}>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />
            </View>
        )
    }
}

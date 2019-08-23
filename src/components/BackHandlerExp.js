import React, { Component } from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
    Button,
    Picker,
    SectionList,
    BackHandler
} from 'react-native'

export default class BackHandlerExp extends Component {

    constructor(props) {
        super(props);
        this.state = {language: 'java'};
        // this.onPressLearnMore = this.onPressLearnMore.bind(this);
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        this.backHandler.remove()
    }

    handleBackPress = () => {
        alert("Back")
        this.backHandler.remove()
        return true;
    }

    render() {
        return (
            // Example 1 (Homogeneous Rendering)
            <SectionList
                renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={{fontWeight: 'bold'}}>{title}</Text>
                )}
                sections={[
                    {title: 'Title1', data: ['item1', 'item2']},
                    {title: 'Title2', data: ['item3', 'item4']},
                    {title: 'Title3', data: ['item5', 'item6']},
                ]}
                keyExtractor={(item, index) => item + index}
            />
        )
    }
}

import React from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import {EmojiPicker} from 'react-native-emojipicker'
export default class EmojisExp extends Component {
    constructor (props) {
        super(props)
        this.state = { visible: true }
    }

    logEmoji (emoji) {
        console.log(emoji)
    }

    render() {
        return (
            <ScrollView>
                <EmojiPicker
                    onEmojiSelected={this.logEmoji.bind(this)}
                    visible={this.state.visible}
                />
                <TouchableOpacity
                    onPress={() => {this.setState({visible: !this.state.visible})}}>
                    <Text>show / hide</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

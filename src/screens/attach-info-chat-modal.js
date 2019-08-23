import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import LogoHyperChat from "./log-hyper-chat";
import LogoHyperChat2 from "./logo-hyper-chat-2";
import {Icon, Input, Button} from "react-native-elements";
import Modal from "react-native-modal";

class AttachInfoChatModal extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal isVisible={this.props.showModalAttachInfo}>
                    <View style={{flex: 1}}>
                        <Text>I am the modal content!</Text>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});


export default AttachInfoChatModal;

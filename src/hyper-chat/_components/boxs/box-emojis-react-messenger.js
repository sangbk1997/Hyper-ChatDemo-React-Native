import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
} from 'react-native';
import {Icon, SearchBar, ListItem, Avatar, Input, Button} from "react-native-elements";
import {Dimensions} from "react-native";
import Modal from 'react-native-modal';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class BoxEmojisReactMessenger extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleModalId: null
        }
    }

    renderModalContent = () => (
        <View style={styles.content}>
            <Text style={styles.contentTitle}>Hi 👋!</Text>
            <Button
                onPress={() => this.props.closeModal()}
                title="Close"
            />
        </View>
    );

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    backdropColor='white'
                    backdropOpacity={0}
                    isVisible={this.props.isVisible}
                    animationInTiming={1000}
                    animationOutTiming={1000}
                    backdropTransitionInTiming={800}
                    backdropTransitionOutTiming={800}
                >
                    {this.renderModalContent()}
                </Modal>
                <Modal
                    backdropColor='white'
                    backdropOpacity={0}
                    isVisible={this.props.isVisible}
                    onSwipeComplete={() => this.props.closeModal()}
                    swipeDirection={['up', 'left', 'right', 'down']}
                    style={styles.bottomModal}
                >
                    {this.renderModalContent()}
                </Modal>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    content: {
        backgroundColor: '#F5F5F5',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
});

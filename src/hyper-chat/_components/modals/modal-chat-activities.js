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

export default class ModalChatActivities extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    isVisible={this.props.isVisible}
                    swipeDirection={['up', 'left', 'right', 'down']}
                    onSwipeComplete={() => this.props.closeModal()}
                    style={styles.bottomModal}
                >
                    <View style={styles.content}>
                        <View>
                            <Icon containerStyle={styles.close_button} name="close" type="antdesign" size={30}
                                  onPress={() => this.props.closeModal()}/>
                            <Text style={styles.contentTitle}>Tính năng</Text>
                        </View>
                        <Button
                            icon={
                                <Icon
                                    name="file-text"
                                    size={30}
                                    type="feather"
                                />
                            }
                            type="outline"
                            buttonStyle={styles.style_button}
                            containerStyle={styles.box_feature}
                            iconLeft
                            title="Đa phương tiện"
                        />

                        <Button
                            icon={
                                <Icon
                                    name="location"
                                    size={30}
                                    type="evilicon"
                                />
                            }
                            type="outline"
                            buttonStyle={styles.style_button}
                            containerStyle={styles.box_feature}
                            iconLeft
                            title="Vị trí"
                        />

                        <Button
                            icon={
                                <Icon
                                    name="poll"
                                    size={30}
                                    type="material-community"
                                />
                            }
                            type="outline"
                            buttonStyle={styles.style_button}
                            containerStyle={styles.box_feature}
                            iconLeft
                            title="Thăm dò"
                        />

                    </View>
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
        backgroundColor: 'white',
    },
    content: {
        backgroundColor: 'white',
        height: screenHeight / 2,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    contentTitle: {
        paddingLeft: 20,
        justifyContent: 'center',
        fontSize: 20,
        marginBottom: 20,
        marginTop: 20,
        fontWeight: 'bold',
        color: 'blue'
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0
    },

    close_button: {
        position: 'absolute',
        top: 10,
        right: 10
    },

    style_button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    box_feature: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderColor: '#abc',
        borderTopWidth: 1,
        borderBottomWidth: 1
    }
});

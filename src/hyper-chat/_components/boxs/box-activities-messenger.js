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

export default class BoxActivitiesMessenger extends Component {

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
                        <View style={styles.item_activity}>
                            <Avatar
                                size="large"
                                icon={{name: 'rocket', color: 'orange', type: 'font-awesome'}}
                                overlayContainerStyle={{backgroundColor: 'white'}}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                                containerStyle={{flex: 4, marginTop: 75}}
                            />
                        </View>
                        <View style={styles.item_activity}>
                            <Avatar
                                size="large"
                                icon={{name: 'rocket', color: 'orange', type: 'font-awesome'}}
                                overlayContainerStyle={{backgroundColor: 'white'}}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                                containerStyle={{flex: 4, marginTop: 75}}
                            />
                        </View>
                        <View style={styles.item_activity}>
                            <Avatar
                                size="large"
                                icon={{name: 'rocket', color: 'orange', type: 'font-awesome'}}
                                overlayContainerStyle={{backgroundColor: 'white'}}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                                containerStyle={{flex: 4, marginTop: 75}}
                            />
                        </View>
                        <View style={styles.item_activity}>
                            <Avatar
                                size="large"
                                icon={{name: 'rocket', color: 'orange', type: 'font-awesome'}}
                                overlayContainerStyle={{backgroundColor: 'white'}}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                                containerStyle={{flex: 4, marginTop: 75}}
                            />
                        </View>
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
        // height: screenHeight / 2,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        flexDirection: 'row'
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0
    },

    item_activity: {
        padding: 5
    }
});

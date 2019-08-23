import React from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Icon, SearchBar, ListItem, Avatar, Input} from "react-native-elements";
import {Header} from 'react-navigation';

const STATUS_BAR_HEIGHT = getStatusBarHeight();
const appStyles = require('../static/css-app')

class HeaderCenterChatDetail extends React.Component {
    render() {
        return (
            <View style={styles.header_left}>
                <View style={styles.header_item}>
                    <Avatar
                        onPress={this.props.navigation.getParam('goInfoChat')}
                        rounded
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                    />
                </View>
                <View style={styles.header_item}>
                    <Text style={{color: '#fff', fontSize: 14}}
                          onPress={this.props.navigation.getParam('goInfoChat')}>Nguyễn Bình Sang</Text>
                    <Text style={{color: '#fff', fontSize: 12}}
                          onPress={this.props.navigation.getParam('goInfoChat')}>Truy cập 2h trước</Text>
                </View>
            </View>
        )
    }
}

class HeaderRightChatDetail extends React.Component {
    render() {
        return (
            <View style={styles.header_right}>
                <View style={styles.header_item}>
                    <Icon name="phone" color="#fff" size={30} type="antdesign"/>
                </View>
                <View style={styles.header_item}>
                    <Icon name="md-information-circle-outline" color="#fff" size={30} type="ionicon"
                          onPress={this.props.navigation.getParam('goInfoChat')}/>
                </View>
            </View>
        )
    }
}

class ChatDetailPage extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: (
                <HeaderCenterChatDetail navigation={navigation}/>
            ),
            headerRight: (
                <HeaderRightChatDetail navigation={navigation}/>
            ),
        };
    };

    componentDidMount() {
        this.props.navigation.setParams({goInfoChat: this._goInfoChat});
    }

    _goInfoChat = () => {
        this.props.navigation.navigate('InfoGroupChatScreen')
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.content}>
                    <Text>Tin nhắn</Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.footer_left}>
                        <View style={styles.footer_item}>
                            <Icon name="pluscircle" color="green" size={30} type="antdesign"
                                  onPress={() => this.props.navigation.navigate('ForwardMessageScreen')}/>
                        </View>
                        <View style={styles.footer_item}>
                            <View>
                                {/*<Input*/}
                                {/*containerStyle={styles.footer_box_send_message}*/}
                                {/*placeholder='Nhắn tin'*/}
                                {/*rightIcon={*/}
                                {/*<Icon*/}
                                {/*name='emoji-happy'*/}
                                {/*size={24}*/}
                                {/*color='#FFFF00'*/}
                                {/*type="entypo"*/}
                                {/*/>*/}
                                {/*}*/}
                                {/*/>*/}
                                <Input containerStyle={styles.footer_box_send_message} placeholder="Xin chao"/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.footer_right}>
                        <View style={styles.footer_item}>
                            <Icon name="microphone" size={30} type="simple-line-icon"/>
                        </View>
                        <View style={styles.footer_item}>
                            <Icon name="camera" size={30} type="feather"/>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        left: 0,
        top: 0,
        padding: 10,
        backgroundColor: '#2FB9ED'
    },

    content: {
        padding: 10,
        color: 'blue',
        flex: 1
    },

    header_left: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10
    },

    header_right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10
    },

    header_item: {
        padding: 5
    },

    item_icon: {
        width: 26,
        height: 26,
        padding: 5
    },

    item_value: {
        padding: 5
    },

    title: {
        color: 'blue',
        fontSize: 20
    },

    avatar: {
        padding: 5
    },

    footer: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#95ccc5',
        justifyContent: 'space-between',
        height: 60,
        left: 0,
        bottom: 0,
        right: 0,
        padding: 10
    },
    footer_left: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },

    footer_right: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    footer_item: {
        padding: 5
    },

    input_message: {},

    footer_box_send_message: {
        width: 200,
        borderColor: '#abc',
        borderRadius: 5
    }
});

export default ChatDetailPage;

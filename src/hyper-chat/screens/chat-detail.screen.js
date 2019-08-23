import React from 'react';
import {Modal, Image, KeyboardAvoidingView, StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Icon, SearchBar, ListItem, Avatar, Input} from "react-native-elements";
import {Header} from 'react-navigation';
import EmojiSelector, {Categories} from 'react-native-emoji-selector';
import ModalChatActivities from "../_components/modals/modal-chat-activities";
import {userActions} from "../_actions";
import {connect} from "react-redux";
import BoxShortInfoUser from "./chats.screen";
import BoxActivitiesMessenger from "../_components/boxs/box-activities-messenger";

const STATUS_BAR_HEIGHT = getStatusBarHeight();
const appStyles = require('../static/css-app')


const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    }
]

class HeaderCenterChatDetail extends React.Component {
    constructor(props) {
        super(props);
    }

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

class ChatDetailScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showBoxEmoji: false,
            showMoreOptionModal: false,
            showBoxActivitiesMessenger: false
        }
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({item}) => (
        <ListItem
            title={item.name}
            subtitle={item.subtitle}
            leftAvatar={{
                source: list[0].avatar_url && {uri: list[0].avatar_url},
                title: list[0].name[0]
            }}
        />
    )


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
        this.props.navigation.setParams({goInfoChat: this._goInfoGroupChatScreen});
    }

    _goInfoGroupChatScreen = () => {
        this.props.navigation.navigate('InfoGroupChatScreen')
    }

    closeMoreOptionModal = () => {
        this.setState({showMoreOptionModal: false})
    }
    showMoreOptionModal = () => {
        // this.setState(() => this.props.navigation.navigate('ModalChatActivities'));
        this.setState({showMoreOptionModal: true})
    }

    closeBoxActivitiesMessenger = () => {
        this.setState({showBoxActivitiesMessenger: false})
    }
    showBoxActivitiesMessenger = () => {
        // this.setState(() => this.props.navigation.navigate('ModalChatActivities'));
        this.setState({showBoxActivitiesMessenger: true})
    }

    renderMessenger = (messenger, index) => {
        if (index % 2 == 0) {
            return <ListItem
                key={index}
                title={messenger.name}
                titleStyle={styles.item_messenger_left}
                onLongPress={() => this.showBoxActivitiesMessenger()}
                leftAvatar={{
                    source: messenger.avatar_url && {uri: messenger.avatar_url},
                    title: messenger.name
                }}
            />
        } else {
            return (<ListItem
                title={messenger.name}
                titleStyle={styles.item_messenger_right}
            />)
        }
    }

    chooseEmoji = (emoji) => {
        console.log(emoji);
        this.setState({showBoxEmoji: !this.state.showBoxEmoji})
    }

    render() {
        return (
            <KeyboardAvoidingView keyboardVerticalOffset={Header.HEIGHT + 20} style={styles.container}
                                  behavior="padding" enabled>
                <View style={styles.content}>
                    <ScrollView style={styles.box_list_messenger}>
                        {
                            list.map((l, i) => (
                                this.renderMessenger(l, i)
                            ))
                        }
                    </ScrollView>
                    {this.state.showBoxEmoji &&
                    <EmojiSelector
                        showTabs={this.state.showBoxEmoji}
                        category={Categories.symbols}
                        onEmojiSelected={this.chooseEmoji}
                    />}
                    {/*<BoxActivitiesMessenger isVisible={this.state.showBoxActivitiesMessenger} closeModal={this.closeBoxActivitiesMessenger}></BoxActivitiesMessenger>*/}
                </View>
                <View style={styles.footer}>
                    <View style={styles.footer_left}>
                        <View style={styles.footer_item}>
                            <Icon name="pluscircle" color="#EEEEEE" size={30} type="antdesign"
                                  onPress={() => this.showMoreOptionModal()}/>
                            <ModalChatActivities isVisible={this.state.showMoreOptionModal}
                                                 closeModal={this.closeMoreOptionModal}/>
                        </View>
                        <View style={styles.footer_item}>
                            <View>
                                <Input
                                    inputContainerStyle={styles.footer_box_send_message}
                                    placeholder='Nhắn tin'
                                    rightIcon={
                                        <Icon
                                            name='emoji-happy'
                                            size={24}
                                            type="entypo"
                                            color={!this.state.showBoxEmoji ? 'black' : 'yellow'}
                                            onPress={() => this.setState({showBoxEmoji: !this.state.showBoxEmoji})}
                                        />
                                    }
                                />
                                {/*<Input containerStyle={styles.footer_box_send_message} placeholder="Xin chao"/>*/}
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
                        <View><Text>ABC</Text></View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
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

    box_list_messenger: {
        flex: 1
    },

    content: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 10
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

    title: {
        color: 'blue',
        fontSize: 20
    },

    avatar: {
        padding: 5
    },

    footer: {
        // position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#abc',
        height: 60,
        // left: 0,
        // bottom: 0,
        // right: 0,
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
        borderColor: 'gray',
        borderRadius: 20,
        borderWidth: 1,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: "#EEEEEE"
    },

    box_emoji: {},

    item_messenger_left: {
        padding: 5,
        borderWidth: 0.5,
        borderColor: '#abc',
        borderRadius: 10,
        backgroundColor: '#bfcc2d'
    },

    item_messenger_right: {
        padding: 5,
        borderWidth: 0.5,
        borderColor: '#abc',
        borderRadius: 10,
        justifyContent: 'flex-end',
        backgroundColor: '#75ccc7'
    }
});

function mapState(state) {
    const {user} = state.registration
    return {user};
}

const actionCreators = {};

const connectedToChatDetailScreen = connect(mapState, actionCreators)(ChatDetailScreen);
export {connectedToChatDetailScreen as ChatDetailScreen};

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
import {$bean} from "../static/js/hyper/hyd-bean-utils";
import BoxActivitiesMessenger from "../_components/boxs/box-activities-messenger";
import {hyperRequest} from "../_constants/hyper-request";
import {configConstants, userConstants} from "../_constants";
import {showMessage} from "react-native-flash-message";
import BoxEmojisReactMessenger from "../_components/boxs/box-emojis-react-messenger";

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
            TYPE_MESSENGER_TEXT: 'TEXT',
            TYPE_MESSENGER_IMAGE: 'IMAGE',
            TYPE_MESSENGER_LINK: 'LINK',
            TYPE_MESSENGER_FILE: 'FILE',
            TYPE_ROLE_PRIMARY: 'PRIMARY',
            STATUS_EDITED: 'EDITED',
            ROLE_IS_USER: 'USER',
            ROLE_IS_CHANNEL: 'CHANNEL',
            ROLE_IS_MESSENGER: 'MESSENGER',
            TYPE_CHAT_CONTACT: 'CHAT_CONTACT',
            CLASS_BOX_ACTIVITIES_MESSENGER: 'box-activities-messenger',
            // CLASS_BOX_REACT_EMOJIS = 'box-emojis-react-message';
            CLASS_BOX_REACT_EMOJIS: 'box-emojis-react-messengers',
            CLASS_BOX_MESSAGE_EMOJIS: 'emoji-mart',
            DEFAULT_NUMBER_MESSAGE: 50,
            DEFAULT_OLD_NUMBER_MESSAGE: 5,
            DEFAULT_NUMBER_OFSET: 0,
            showBoxEmoji: false,
            showMoreOptionModal: false,
            showBoxActivitiesMessenger: false,
            showBoxEmojisReactMessenger: false,
            listMessengers: [],
            selectedChat: '',
            hasInputValue: false,
            inputValue: '',
            baseUrl: configConstants.PREFIX_APP_SERVER
        }

        showMessage({
            message: 'Welcome Chat-detail',
            type: 'info'
        })

        this.showChatDetail = this.showChatDetail.bind(this);
        this.goCheckLinkChat = this.goCheckLinkChat.bind(this);
        this.getInfoToChannel = this.getInfoToChannel.bind(this);
        this.getInfoToContact = this.getInfoToContact.bind(this);
        this.changeFocusChat = this.changeFocusChat.bind(this);
        this.getLinkUsersByChat = this.getLinkUsersByChat.bind(this);
        this.loadExampleMessengers = this.loadExampleMessengers.bind(this);
        this.updateStatusUserChat = this.updateStatusUserChat.bind(this);
        this.sendMessenger = this.sendMessenger.bind(this);
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
        this.props.navigation.setParams({goInfoChat: this._goInfoChat});
        this.showChatDetail(this.props.accessChat);
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        if (prevProps.newMessenger != this.props.newMessenger) {
            this.notifiedNewMessenger(this.props.newMessenger);
        }
    }

    _goInfoChat = () => {
        if (this.props.accessChat['role'] == this.state.ROLE_IS_CHANNEL) {
            this._goInfoGroupChatScreen();
        } else {
            this._goInfoContactScreen();
        }
    }

    _goInfoGroupChatScreen = () => {
        this.getInfoChat(this.props.requestChat['channelId']);
    }

    _goInfoContactScreen = () => {
        this.getInfoContact(this.props.accessChat);
    }

    showMoreActivitiesWithMessenger = () => {
        this.showBoxActivitiesMessenger();
        this.showBoxEmojisReactMessenger();
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
        this.setState({showBoxActivitiesMessenger: true})
    }

    closeBoxEmojisReactMessenger = () => {
        this.setState({showBoxEmojisReactMessenger: false})
    }
    showBoxEmojisReactMessenger = () => {
        this.setState({showBoxEmojisReactMessenger: true})
    }

    renderMessenger = (messenger, index) => {
        if (index % 2 == 0) {
            return <ListItem
                key={index}
                title={messenger.message}
                titleStyle={styles.item_messenger_left}
                onLongPress={() => this.showMoreActivitiesWithMessenger()}
                // leftAvatar={{
                //     source: list[0].avatar_url && {uri: messenger.avatar_url},
                //     title: messenger.name
                // }}
            />
        } else {
            return (<ListItem
                key={index}
                title={messenger.message}
                titleStyle={styles.item_messenger_right}
            />)
        }
    }

    renderFeatureRespectively = (hasInputValue) => {
        if (!hasInputValue) {
            return (
                <View style={styles.footer_right}>
                    <View style={styles.footer_item}>
                        <Icon name="microphone" size={30} type="simple-line-icon"/>
                    </View>
                    <View style={styles.footer_item}>
                        <Icon name="camera" size={30} type="feather"/>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={styles.footer_right}>
                    <View style={styles.footer_item}>
                        <Icon name="send" size={30} type="feather" color='blue' onPress={() => this.sendMessenger()}/>
                    </View>
                </View>
            )
        }
    }

    sendMessenger = () => {
        let value = this.state.inputValue;
        console.log(value);
        if ($bean.isNotEmpty(value)) {
            const message = {
                channelId: this.props.requestChat['channelId'],
                message: value
            };
            const url = this.state.baseUrl + 'messengers/insert';
            hyperRequest.post(url, message).then(res => {
                if ($bean.isNotNil(res.data)) {
                    // let listMessenger = this.state.listMessengers;
                    // listMessenger.push(res.data);
                    // console.log(res.data);
                    // this.setState({
                    //     inputValue: '',
                    //     hasInputValue: false,
                    //     listMessenger: listMessenger
                    // })
                }
            }, error => {
                console.log('Something went wrong ', error);
            });
        }
    }

    getInfoChat = (channelId) => {
        let url = this.state.baseUrl + 'channels/infoChannel';
        let form = {
            channelId: channelId
        }
        hyperRequest.post(url, form).then(res => {
            let infoChat = res.data;
            if ($bean.isNotEmpty(infoChat)) {
                // this.infoChat = channel;
                // if ($bean.isNotEmpty(channel['users'])) {
                //     this.countMembers = channel['users'].length;
                // }
                // this.globalService.infoChat.next({infoChat: this.infoChat, linkUserChannel: this.requestChat});
                this.props.sendInfoChat(infoChat);
                this.props.navigation.navigate('InfoGroupChatScreen')
            }
        })
    }

    getInfoContact = (contact) => {
        this.props.sendInfoContact(contact);
        this.props.navigation.navigate('InfoContactScreen')
    }

    changeInputValue = (inputValue) => {
        let hasInputValue = this.state.hasInputValue;
        if (!this.state.hasInputValue && $bean.isNotEmpty(inputValue)) {
            hasInputValue = true
        } else if (this.state.hasInputValue && $bean.isEmpty(inputValue)) {
            hasInputValue = false
        }
        this.setState({
            showBoxEmoji: false,
            inputValue: inputValue,
            hasInputValue: hasInputValue
        })
    }

    chooseEmoji = (emoji) => {
        console.log(emoji);
        let inputValue = this.state.inputValue;
        inputValue += ' ' + emoji;
        this.changeInputValue(inputValue);
    }

    showChatDetail = (chat) => {
        let selectedChat = chat;
        this.setState({
            listMessengers: []
        })
        if (chat['role'] == this.state.ROLE_IS_CHANNEL) {
            if (chat['type'] == this.state.TYPE_CHAT_CONTACT) {
                selectedChat = chat['userPartner']
            }
        }
        this.goCheckLinkChat(selectedChat);
    }

    goCheckLinkChat = (selectedChat) => {
        if (selectedChat['role'] == this.state.ROLE_IS_CHANNEL) {
            this.getInfoToChannel(selectedChat['id']);
        } else {
            this.getInfoToContact(selectedChat['id']);
        }
    }


    getInfoToChannel = (channelId) => {
        // kiểm tra liên kết user - channel
        let url = this.state.baseUrl + 'users/checkLinkToChannel';
        let inputChannel = {
            channelId: channelId
        }
        hyperRequest.post(url, inputChannel).then(res => {
            let userChannel = res.data;
            if ($bean.isNotEmpty(userChannel)) {
                this.props.sendRequestChat(userChannel);
                this.loadExampleMessengers(channelId, this.state.DEFAULT_OLD_NUMBER_MESSAGE, this.state.DEFAULT_NUMBER_MESSAGE, userChannel['position']);
                this.getLinkUsersByChat(userChannel['channelId']);
            } else {
                this.props.sendRequestChat(userChannel);
            }
            this.changeFocusChat();
        })
    }

    getInfoToContact = (contactId) => {
        let url = this.state.baseUrl + "users/checkLinkToContact";
        let form = {
            contactId: contactId
        }
        hyperRequest.post(url, form).then(res => {
            let userChannel = res.data;
            if ($bean.isNotEmpty(userChannel)) {
                this.props.sendRequestChat(userChannel);
                this.loadExampleMessengers(userChannel['channelId'], this.state.DEFAULT_OLD_NUMBER_MESSAGE, this.state.DEFAULT_NUMBER_MESSAGE, userChannel['position']);
                this.getLinkUsersByChat(userChannel['channelId']);
            } else {
                this.props.sendRequestChat(userChannel);
            }
            this.changeFocusChat();
        })
    }

    changeFocusChat() {
        // let dataChat = {
        //     requestChat: this.requestChat,
        //     selectedChat: this.selectedChat
        // }
        // this.globalService.changeFocusChat.next(dataChat);
    }

    getLinkUsersByChat = (channelId) => {
        let url = this.state.baseUrl + 'userChannels/extraInfoUserByChannel';
        let form = {
            channelId: channelId
        }
        hyperRequest.post(url, form).then(res => {
            this.setState({linkUsersChat: res.data});
        })
    }

    loadExampleMessengers = (channelId, oldMessengers, newMessengers, offset) => {
        let url = this.state.baseUrl + 'messengers/exampleMessengers';
        let form = {
            channelId: channelId,
            oldMessengers: oldMessengers,
            newMessengers: newMessengers,
            offset: offset
        }
        hyperRequest.post(url, form).then(res => {
            let messengers = res.data;
            // this.setState({listMessengers: []});
            if ($bean.isNotEmpty(messengers)) {
                let listMessengers = [];
                let countPreviousMessengers = 0;
                if ($bean.isNotEmpty(messengers['oldMessengers'])) {
                    for (let i = 0; i < messengers['oldMessengers'].length; i++) {
                        listMessengers.push(messengers['oldMessengers'][i]);
                    }
                    countPreviousMessengers = messengers['oldMessengers'].length
                }
                if ($bean.isNotEmpty(messengers['newMessengers'])) {
                    for (let i = 0; i < messengers['newMessengers'].length; i++) {
                        listMessengers.push(messengers['newMessengers'][i]);
                    }
                }
                //  Cập nhật request Chat
                this.setState({
                    listMessengers: listMessengers,
                    countPreviousMessengers: countPreviousMessengers,
                    // requestChat: {
                    //     position: messengers['newMessengers'].length,
                    //     lastMessengerId: listMessengers[listMessengers.length - 1].id
                    // }
                })
                // this.updateStatusUserChat();
            }
        })
    }

    updateStatusUserChat = () => {
        let url = this.state.baseUrl + 'userChannels/updateViewMessengers';
        let form = this.state.requestChat;
        hyperRequest.post(url, form).then(res => {
            if ($bean.isNotEmpty(res.data)) {
                console.log('Update Status User Chat');
                console.log(res.data);
            }
        })
    }

    notifiedNewMessenger = (data) => {
        if ($bean.isNotEmpty(data)) {
            if (data['channelId'] == this.props.requestChat['channelId']) {
                // if (data['value']['oldCountMessengers'] == this.requestChat['position']) {
                //     this.listMessengers.push(data['value']);
                //     this.requestChat['position']++;
                //     this.requestChat['lastMessengerId'] = data['value'].id;
                //     this.updateStatusUserChat();
                // } else {
                //     this.loadMoreMessenger(data['value']['oldCountMessengers'] + 1 - this.requestChat['position'], this.requestChat['position']);
                // }
                let listMessenger = this.state.listMessengers;
                listMessenger.push(data.value);
                this.setState({
                    inputValue: '',
                    hasInputValue: false,
                    listMessenger: listMessenger
                })
            } else {
                // if ($bean.isNotEmpty(data['value'].channelTitle)) {
                //     toastr.info(data['value'].message, data['value']['user'].username);
                // } else {
                //     toastr.info(data['value'].message, data['value']['user'].username + ' - ' + data['value']['channelTitle']);
                // }
            }
        }
    }


    render() {
        return (
            <KeyboardAvoidingView keyboardVerticalOffset={Header.HEIGHT + 20} style={styles.container}
                                  behavior="padding" enabled>
                <View style={styles.content}>
                    <ScrollView style={styles.box_list_messenger}>
                        {
                            this.state.listMessengers.map((l, i) => (
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
                            {/*<BoxActivitiesMessenger isVisible={this.state.showBoxActivitiesMessenger}*/}
                            {/*closeModal={this.closeBoxActivitiesMessenger}/>*/}
                            <BoxEmojisReactMessenger isVisible={this.state.showBoxEmojisReactMessenger}
                                                     closeModal={this.closeBoxEmojisReactMessenger}/>
                        </View>
                        <View style={styles.footer_item}>
                            <View>
                                <Input
                                    inputContainerStyle={styles.footer_box_send_message}
                                    placeholder='Nhắn tin'
                                    onChangeText={(inputValue) => this.changeInputValue(inputValue)}
                                    value={this.state.inputValue}
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
                    {this.renderFeatureRespectively(this.state.hasInputValue)}
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
    const {accessChat} = state.users
    const {requestChat} = state.users
    const {newMessenger} = state.users
    return {user, accessChat, requestChat, newMessenger};
}

const actionCreators = {
    sendRequestChat: userActions.sendRequestChat,
    sendInfoChat: userActions.sendInfoChat,
    sendInfoContact: userActions.sendInfoContact
};

const connectedToChatDetailScreen = connect(mapState, actionCreators)(ChatDetailScreen);
export {connectedToChatDetailScreen as ChatDetailScreen};

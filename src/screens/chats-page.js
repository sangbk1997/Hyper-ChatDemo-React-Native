import React from 'react';
import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import ShortInfoUser from "./short-info-user";
import {Icon, SearchBar, ListItem, Button} from "react-native-elements";
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Home from "../components/routing/home";


const STATUS_BAR_HEIGHT = getStatusBarHeight();
const appStyles = require('../static/css-app')

class HeaderLeftHomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.headerLeftContainer}>
                <View style={styles.header_item}>
                    <Icon name="chat" color="#fff" size={30} onPress={this.props.navigation.getParam('goLandPage')}/>
                </View>
                <View style={styles.header_item}>
                    <Text style={styles.app_name}
                          onPress={this.props.navigation.getParam('goLandPage')}>Hyper-Chat</Text>
                </View>
            </View>
        )
    }
}

class HeaderRightHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.headerRightContainer}>
                <View style={styles.header_item}>
                    <Icon name="edit" color="#fff" size={30} type="font-awesome"
                          onPress={this.props.navigation.getParam('goNewChatPageStart')}/>
                </View>
                <View style={styles.header_item}>
                    <Icon name="user-circle" color="#fff" size={30} type="font-awesome"
                          onPress={this.props.navigation.getParam('goUserProfile')}/>
                </View>
            </View>
        )
    }
}

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
    }
]

class HomeChat extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: (
                <HeaderLeftHomePage navigation={navigation}/>
            ),
            headerRight: (
                <HeaderRightHomePage navigation={navigation}/>
            ),
        };
    };

    componentDidMount() {
        this.props.navigation.setParams({goLandPage: this._goLandPage});
        this.props.navigation.setParams({goUserProfile: this._goUserProfile});
        this.props.navigation.setParams({goNewChatPageStart: this._goNewChatPageStart});
    }

    state = {
        count: 0,
    };

    _increaseCount = () => {
        this.setState({count: this.state.count + 1});
    };

    _goLandPage = () => {
        this.props.navigation.navigate('LandPage');
    };

    _goUserProfile = () => {
        this.props.navigation.navigate('UserProfile');
    };

    _goNewChatPageStart = () => {
        this.props.navigation.navigate('NewChatStartScreen');
    }

    _goChatDetail = () => {
        this.props.navigation.navigate('ChatDetail');
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({item}) => (
        <ListItem
            title={item.name}
            subtitle={item.subtitle}
            rightTitle="Fri, 08/09/2019"
            rightTitleStyle={{fontSize: 10}}
            leftAvatar={{
                source: item.avatar_url && {uri: item.avatar_url},
                title: item.name[0]
            }}
            onPress={() => this.props.navigation.navigate('ChatDetail')}
            badge={{value: 3, textStyle: {color: 'red'}, containerStyle: {marginTop: -30, marginRight: 5}}}
        />
    )

    renderAvatar = ({item}) => (
        <ShortInfoUser chatDetail={this._goChatDetail}/>
    )

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View>
                        <Button
                            buttonStyle={styles.search_box}
                            icon={
                                <Icon name="search" color="#fff" size={30} type="evilIcons"/>
                            }
                            iconLeft
                            title="Tìm kiếm"
                            onPress={() => this.props.navigation.navigate('SearchStartScreen')}
                        />
                    </View>
                    <View style={styles.users_active}>
                        {/*<ShortInfoUser chatDetail={this._goChatDetail}/>*/}
                        {/*<ShortInfoUser chatDetail={this._goChatDetail}/>*/}
                        {/*<ShortInfoUser chatDetail={this._goChatDetail}/>*/}
                        {/*<ShortInfoUser chatDetail={this._goChatDetail}/>*/}
                        {/*<ShortInfoUser chatDetail={this._goChatDetail}/>*/}
                        {/*<ShortInfoUser chatDetail={this._goChatDetail}/>*/}
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={list}
                            horizontal={true}
                            renderItem={this.renderAvatar}
                        />
                    </View>

                    <View style={styles.list_chat_box}>
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={list}
                            renderItem={this.renderItem}
                        />
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },

    content: {
        padding: 10,
        flex: 1
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        left: 0,
        top: 0,
        padding: 10
    },

    header_left: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    header_right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
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
        padding: 5,
        color: '#fff'
    },

    search_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 5,
        margin: 20,
        borderRadius: 10,
        backgroundColor: '#c5ccb8',
        borderColor: '#abc'
    },

    users_active: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 4,
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        borderColor: '#d6d7da'
    },

    navigation_box: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#abc',
        bottom: 0,
        right: 0,
        left: 0
    },

    navigation_item: {
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#abc'
    },

    list_chat_box: {},

    chat_info: {
        flexDirection: 'row'
    },

    chat_info_avatar: {
        padding: 10
    },

    chat_info_extra: {
        flexGrow: 1,
        padding: 5,
        borderColor: 'blue'
    },

    app_name: {
        color: '#fff'
    },

    headerLeftContainer: {
        flexDirection: 'row',
        padding: 10
    },

    headerRightContainer: {
        flexDirection: 'row',
        padding: 10
    }


});

export default HomeChat;

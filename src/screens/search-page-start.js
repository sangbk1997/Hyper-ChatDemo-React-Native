import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import ShortInfoUser from "./short-info-user";
import {Icon, Input, ListItem, SearchBar, ButtonGroup} from "react-native-elements";

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
    }
]

class HeaderCenterSearchPage extends React.Component {
    render() {
        return (
            <View style={styles.input_search}>
                <Input
                    placeholder='Tìm kiếm'
                />
            </View>
        )
    }
}

class SearchPageStart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 2
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({selectedIndex})
    }

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: (
                <HeaderCenterSearchPage/>
            )
        };
    };

    _goChatDetail = () => {
        this.props.navigation.navigate('ChatDetail');
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({item}) => (
        <ListItem
            title={item.name}
            subtitle={item.subtitle}
            leftAvatar={{
                source: item.avatar_url && {uri: item.avatar_url},
                title: item.name[0]
            }}
            onPress={() => this.props.navigation.navigate('ChatDetail')}
        />
    )

    renderAvatar = ({item}) => (
        <ShortInfoUser chatDetail={this._goChatDetail}/>
    )


    render() {
        const buttons = ['Tất cả', 'Nhóm', 'Liên lạc', 'Tin nhắn']
        const {selectedIndex} = this.state
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View>
                        <ButtonGroup
                            containerStyle={styles.search_categories}
                            onPress={this.updateIndex}
                            selectedIndex={selectedIndex}
                            buttons={buttons}
                        />
                    </View>
                    <View style={styles.recent_search_chats_box}>
                        <Text style={styles.title}>Tìm kiếm gần đây</Text>
                        <View style={styles.recent_chats}>
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
                    </View>
                    <View>
                        <Text style={styles.title}>Gợi ý</Text>
                        <View style={styles.list_chat_box}>
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={list}
                                renderItem={this.renderItem}
                            />
                        </View>
                    </View>
                </View>
            </View>
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
        height: 46,
        left: 0,
        top: 0,
        padding: 10,
        backgroundColor: '#2FB9ED'
    },

    header_item: {
        padding: 5
    },

    avatar: {
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

    content: {
        padding: 10,
        flex: 1
    },

    recent_search_chats_box: {},

    recent_chats: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 4,
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        borderColor: '#d6d7da'
    },

    suggest_chats: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    title: {
        color: 'blue',
        fontSize: 16
    },

    extra_info_chat: {
        flexGrow: 1,
        // backgroundColor: 'blue'
    },

    input_search: {
        flex: 1
    },
    specific_category: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#b3cc5b'
    },

    search_categories: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    list_chat_box: {},

});


export default SearchPageStart;

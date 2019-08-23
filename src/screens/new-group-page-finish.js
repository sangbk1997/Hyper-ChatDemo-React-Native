import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Button, Icon, ListItem, Input} from "react-native-elements";
import ShortInfoUser from "./new-chat-page-start";

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

class HeaderCenterNewGroup extends React.Component {
    render() {
        return (
            <View style={styles.headerLeftContainer}>
                <View style={styles.header_item}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>Tạo nhóm chat</Text>
                </View>
            </View>
        )
    }
}

class HeaderRightNewGroup extends React.Component {
    render() {
        return (
            <View style={styles.headerRightContainer}>
                <View style={styles.header_item}>
                    <Button
                        title="Tạo nhóm"
                        titleStyle={{color: '#fff'}}
                        type="outline"
                        onPress={this.props.navigation.getParam('goToChatPage')}
                    />
                </View>
            </View>
        )
    }
}

class NewGroupPageFinish extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.navigation.setParams({goToChatPage: this._goToChatPage});
        console.log('Mount New Group Finish')
    }

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: (
                <HeaderCenterNewGroup/>
            ),
            headerRight: (
                <HeaderRightNewGroup navigation={navigation}/>
            ),
        };
    };

    _goToChatPage = () => {
        console.log('Go to ChatPage');
        this.props.navigation.navigate('HomeChat');
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



    render() {

        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.box_chat_group}>
                        <Text style={styles.chat_group_title}>Tên nhóm</Text>
                        <Input inputStyle={styles.input_box_name_group} placeholder="Nhập tên nhóm"/>
                    </View>
                    <View>
                        <Text style={styles.title}>Thành viên</Text>
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

    content: {
        padding: 10,
        flex: 1
    },

    header_item: {
        padding: 5
    },

    list_chat_box: {},

    box_chat_group: {
        padding: 10
    },

    chat_group_title: {
        textAlign: 'center',
        color: '#2FB9ED',
        fontSize: 20
    },

    input_box_name_group: {
        flex: 1
    }
});


export default NewGroupPageFinish;

import React from 'react';
import {StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import LogoHyperChat from "./log-hyper-chat";
import LogoHyperChat2 from "./logo-hyper-chat-2";
import {Icon, Input, Button} from "react-native-elements";

const STATUS_BAR_HEIGHT = getStatusBarHeight();
const appStyles = require('../static/css-app')


class SignUp extends React.Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Đăng ký'
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.infoDetail}>
                    <View style={styles.app_logo}>
                        <LogoHyperChat2/>
                    </View>
                    <View style={styles.info_login}>
                        <View style={styles.info_login_item}>
                            <Input
                                placeholder='Email'
                                leftIcon={
                                    <Icon
                                        name='email'
                                        size={24}
                                        color='black'
                                    />
                                }
                            />
                        </View>
                        <View style={styles.info_login_item}>
                            <Input
                                placeholder='Mật khẩu'
                                leftIcon={
                                    <Icon
                                        name='lock'
                                        size={24}
                                        color='black'
                                    />
                                }
                            />
                        </View>
                        <View style={styles.activities_btn}>
                            <View style={styles.btn_cancel}>
                                <Button
                                    title="Hủy"
                                    buttonStyle={{'backgroundColor': 'red'}}
                                />
                            </View>
                            <View style={styles.btn_signup}>
                                <Button
                                    title="Đăng ký"
                                />
                            </View>
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
        height: 46,
        left: 0,
        top: 0,
        padding: 10,
        backgroundColor: '#2FB9ED',
        justifyContent: 'center'
    },

    infoDetail: {
        flex: 1,
    },

    header_content: {
        color: '#FFFFFF',
        fontSize: 20
    },

    app_logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    info_login: {
        flex: 1
    },

    info_login_item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
        padding: 5,
        margin: 10,
        borderRadius: 10
    },

    item_icon: {
        width: 26,
        height: 26,
        padding: 5,
        alignSelf: 'flex-start'
    },

    item_value: {
        padding: 5
    },

    link: {
        color: 'blue'
    },

    activities_btn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },

    btn_signup: {
        flex: 1,
        // backgroundColor: 'blue',
        borderRadius: 10,
        marginLeft: 5,
        color: '#FFFFFF',
        padding: 5,
        alignSelf: 'center'
    },

    btn_cancel: {
        flex: 1,
        // backgroundColor: 'red',
        borderRadius: 10,
        marginRight: 5,
        color: '#FFFFFF',
        padding: 5,
        alignSelf: 'center'
    },

    btn_content: {
        alignSelf: 'center',
        color: '#FFFFFF'
    }
});


export default SignUp;

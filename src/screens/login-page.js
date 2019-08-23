import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import {createAppContainer, createStackNavigator} from "react-navigation";
import {getStatusBarHeight} from 'react-native-status-bar-height';

const STATUS_BAR_HEIGHT = getStatusBarHeight();
const appStyles = require('../static/css-app')
import LogoHyperChat from "./log-hyper-chat";
import LogoHyperChat2 from "./logo-hyper-chat-2";
import {Icon, Input, Button} from 'react-native-elements';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Đăng nhập'
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
                        <View style={styles.btn_login}>
                            <Button onPress={() => this.props.navigation.navigate('Home')}
                                    title="Đăng nhập"
                            />
                        </View>
                        <View style={styles.extra_info}>
                            <Text style={styles.link}>Quên mật khẩu</Text>
                            <Text style={styles.link} onPress={() => this.props.navigation.navigate('Signup')}>Chưa có
                                tài khoản, đăng ký ?</Text>
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

    btn_login: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
        // backgroundColor: 'blue',
        padding: 5,
        margin: 10,
        borderRadius: 10
    },

    extra_info: {
        padding: 5,
        margin: 10,
    }
});


export default Login;

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import LogoHyperChat from "./log-hyper-chat";
import {createAppContainer, createStackNavigator} from "react-navigation";
import {Icon} from "react-native-elements";
import Login from "./login-page";
import SignUp from "./signup-page";
import Home from "./home-page";

const STATUS_BAR_HEIGHT = getStatusBarHeight();
const appStyles = require('../static/css-app')

class LandPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.app_logo}>
                    <LogoHyperChat/>
                </View>
                <View style={styles.extra_info}>
                    <Icon name="rightcircleo" color="#fff" size={50} type="antdesign"
                          containerStyle={styles.arrow_right} onPress={() => this.props.navigation.navigate('Login')}/>
                    <Text style={styles.copyright}>@Copyright 2019 Hyperlogy. All rights reserved !</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3366CC'
    },
    app_logo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'

    },
    extra_info: {
        flex: 1
    },
    arrow_right: {
        alignSelf: 'flex-end',
        width: 56,
        height: 56,
        marginRight: 20
    },
    copyright: {
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        color: '#FFFFFF'

    }
});

const AppNavigator = createStackNavigator({
        LandPage: {
            screen: LandPage,
            navigationOptions: {
                header: null,
            }
        },
        Login: {
            screen: Login
        },
        Signup: {
            screen: SignUp
        },
        Home: {
            screen: Home,
            navigationOptions: {
                header: null,
            }
        }
    },
    {
        initialRouteName: 'LandPage',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#3366CC',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    });
const AppContainer = createAppContainer(AppNavigator)
export default AppContainer

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import AppContainer from "./src/screens/land-page";
import {Provider} from 'react-redux';
import {store} from './src/hyper-chat/_helpers';
import AppContainer from "./src/hyper-chat/screens/land-page.screen";
import FlashMessage from "react-native-flash-message";
const styles = require('./src/static/css-app')

export default function App() {
    return (
        <Provider store={store}>
            <AppContainer/>
            <FlashMessage position="top" />
        </Provider>
    )
}

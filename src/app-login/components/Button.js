import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
    button: {
        height: 50,
        padding: 20,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    }
})


type ButtonProps = {
    children? : any,
    onPress: () => void
}


export const Button = (props: ButtonProps) => {
    const {children, onPress} = props
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <View>
                <Text>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}

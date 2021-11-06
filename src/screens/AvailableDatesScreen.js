import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';





function AvailableDatesScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={{paddingTop: 30, fontSize: 20, fontFamily:'JosefinSans_700Bold', textAlign: 'center'}}>Available Dates</Text>
            <StatusBar style="auto"/>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E2F4FF',



    },
    button: {
        backgroundColor: '#ADE0FF',
        borderRadius: 20,
        padding: 10,
        borderColor:'#000000',
        borderWidth: 1,
        width: 200,
    },
    buttonText: {
        color: '#000000',
        fontWeight: 'bold',
        textAlign:'center',

    }
});

export default  AvailableDatesScreen;
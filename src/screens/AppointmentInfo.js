import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';





function AppointmentInfoScreen({navigation}) {
    const onPress = () => {};
    return (
        <View style={styles.container}>
            <Text style={{paddingTop: 40, fontSize: 30, fontWeight:'bold', paddingLeft:15,}}>Appointment Info screen!</Text>
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

export default  AppointmentInfoScreen;
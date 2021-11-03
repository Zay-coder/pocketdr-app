import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {createNativeStackNavigator} from "react-native-screens/native-stack";




function TherapyTypeScreen({navigation}) {
    const onPress = () => {};
    return (
        <View style={styles.container}>
            <Text style={{paddingTop: 40, fontSize: 30}}>Choose Therapy Type</Text>
            <StatusBar style="auto"/>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Challenges')}>
            <View style={{paddingTop: 40}}>
                <Image source={require('../../assets/images/logos.png')}/>
            </View>
            </TouchableWithoutFeedback>
            <View>
                <Text>Adult</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Challenges')}>
                <View style={{paddingTop: 40}}>
                    <Image source={require('../../assets/images/logos.png')}/>
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Text>Child/Adolescent</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Challenges')}>
                <View style={{paddingTop: 40}}>
                    <Image source={require('../../assets/images/logos.png')}/>
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Text>Couple/Family</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E2F4FF',
        alignItems: 'center',

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

export default  TherapyTypeScreen;
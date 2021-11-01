import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Screen} from "react-native-screens";
import {createNativeStackNavigator} from "react-native-screens/native-stack";




function HomeScreen({navigation}) {
    const onPress = () => {};
    return (
        <View style={styles.container}>
            <View style={{paddingTop: 50}}>
                <Image source={require('../../assets/images/logos.png')}/>
            </View>
            <Text style={{paddingTop: 40, fontSize: 40}}>Pocket Dr</Text>

            <StatusBar style="auto"/>
            <View style={{paddingTop: 10}}>
                <Text>Online therapy in the comfort {'\n'}                of your home</Text>

            </View>
            <View>
                <Image source={require('../../assets/images/WelcomePagePic.jpg')}
                       />
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('TherapyType')} style={styles.button}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingTop: 10}}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text>already a member? <Text style={{color: '#50BDFF'}}>Login Now.</Text>
                </Text>
                </TouchableOpacity>


            </View>

        </View>
    )
}

const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties
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
export default  HomeScreen;
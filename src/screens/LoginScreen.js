import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Screen} from "react-native-screens";
import {createNativeStackNavigator} from "react-native-screens/native-stack";




function LoginScreen({navigation}) {
    const onPress = () => {};
    return (
        <View style={styles.container}>
            <View>
                <Text style={{paddingTop: 40, fontSize: 17, textAlign: 'center'}}>Login Screen</Text>
            </View>
            <View  style={{marginTop: 20, paddingTop: 30, textAlign:'left', paddingLeft:20}}>
                <Text style={{ fontSize: 20, }}>
                    Enter Email Address :
                </Text>
                <TextInput style={styles.textInput}/>
            </View>
            <View  style={{paddingTop: 20, textAlign:'left', paddingLeft:20}}>
                <Text style={{ fontSize: 20, }}>
                    Password :
                </Text>
                <TextInput style={styles.textInput}/>
            </View>
            <View style={{marginTop: 20}}>
                <TouchableOpacity onPress={() => navigation.navigate('LoggedIn')} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 15, color:'#797979', textAlign: 'center',marginTop:5}}>
                    Forgot your password ?
                </Text>
                <Text style={{marginTop:90, textAlign: 'center'}}>Don't have an account?</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={{fontSize: 15, textAlign: 'center',marginTop:10, color: '#50BDFF', fontWeight: 'bold'}}>
                    Sign Up
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


    },
    button: {
        backgroundColor: '#ADE0FF',
        borderRadius: 8,
        padding: 6,
        borderColor:'#000000',
        borderWidth: 1,
        width: 300,
        marginLeft: 20,
        marginTop: 15
    },
    buttonText: {
        color: '#000000',
        fontWeight: 'bold',
        textAlign:'center',
        fontSize:23

    },

    textInput: {
        marginTop:15,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        borderColor:'#D3D3D3',
        width: 300
    }
});
export default  LoginScreen;
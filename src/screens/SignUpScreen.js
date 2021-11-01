import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createNativeStackNavigator} from "react-native-screens/native-stack";




function SignUpScreen({navigation}) {
    const onPress = () => {};
    return (
        <View style={styles.container}>
            <View>
                <Text style={{paddingTop: 40, fontSize: 17, textAlign: 'center'}}>Sign Up Screen</Text>
            </View>
            <View  style={{paddingTop: 20, textAlign:'left', paddingLeft:20}}>
                <Text style={{ fontSize: 20, }}>
                   First name :
                </Text>
                <TextInput style={styles.textInput}/>
            </View>
            <View  style={{paddingTop: 20, textAlign:'left', paddingLeft:20}}>
                <Text style={{ fontSize: 20, }}>
                    Last name :
                </Text>
                <TextInput style={styles.textInput}/>
            </View>
            <View  style={{paddingTop: 20, textAlign:'left', paddingLeft:20}}>
                <Text style={{ fontSize: 20, }}>
                    Email :
                </Text>
                <TextInput style={styles.textInput}/>
            </View>
            <View  style={{paddingTop: 20, textAlign:'left', paddingLeft:20}}>
                <Text style={{ fontSize: 20, }}>
                    Password :
                </Text>
                <TextInput style={styles.textInput}/>
            </View>
            <View  style={{paddingTop: 20, textAlign:'left', paddingLeft:20, }}>
                <Text style={{ fontSize: 20, }}>
                    Date of birth:
                </Text>
                <TextInput style={styles.textInput}/>
            </View>
            <View  style={{paddingTop: 20, textAlign:'left', paddingLeft:20, }}>
                <Text style={{ fontSize: 20, }}>
                    Gender:</Text>

            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
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
        marginTop:5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor:'#D3D3D3',
        width: 300
    }
});
export default  SignUpScreen;
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput} from 'react-native';
import {createNativeStackNavigator} from "react-native-screens/native-stack";




function LoginScreen({navigation}) {
    const onPress = () => {};
    return (
        <View style={styles.container}>
            <View  style={{marginTop: 10, paddingTop: 30, textAlign:'left', paddingLeft:20}}>
                <Text style={{ fontSize: 15, }}>
                    Email Address :
                </Text>
                <TextInput placeholder='E-mail' style={styles.textInput}/>
            </View>
            <View  style={{paddingTop: 20, textAlign:'left', paddingLeft:20}}>
                <Text style={{ fontSize: 15, }}>
                    Password :
                </Text>
                <TextInput placeholder='Password' style={styles.textInput} secureTextEntry={true}/>
            </View>
            <View style={{marginTop: 20}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 15, color:'#797979', textAlign: 'center',marginTop:5}}>
                    Forgot your password ?
                </Text>
                <Text style={{marginTop:90, textAlign: 'center'}}>Don't have an account?</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                <Text style={{fontSize: 15, textAlign: 'center',marginTop:10, color: '#50BDFF', fontWeight: 'bold'}}>
                    Sign Up
                </Text>
                </TouchableOpacity>
            </View>



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
        borderRadius: 25,
        padding: 6,
        borderColor:'#000000',
        borderWidth: 1,
        width: 320,
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
        width: 320,
        backgroundColor:'#ffffff'
    }
});
export default  LoginScreen;
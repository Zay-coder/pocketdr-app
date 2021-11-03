import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';



function LoggedInUserScreen({navigation}) {
    const onPress = () => {};
    return (
        <View style={styles.container}>
            <Text style={{paddingTop: 30, fontSize: 20, fontWeight:'bold', textAlign: 'center'}}>Hello User!</Text>
            <StatusBar style="auto"/>
            <Text style={{ fontSize: 20, marginTop:20, textAlign: 'center'}}>Choose Therapy Type</Text>
            <View style={{flexDirection:'row', margin:10}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('challenges')}>
                        <Image source={require('../../assets/images/logos.png')}/>
                </TouchableWithoutFeedback>
                <Text style={{fontSize:20, marginTop:30}}> Adult</Text>
            </View>
            <View style={{flexDirection:'row', margin:10}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('challenges')}>
                    <Image source={require('../../assets/images/logos.png')}/>
                </TouchableWithoutFeedback>
                <Text style={{fontSize:20, marginTop:30}}> Child / Adolescent</Text>
            </View>
            <View style={{flexDirection:'row', margin:10}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('challenges')}>
                    <Image source={require('../../assets/images/logos.png')}/>
                </TouchableWithoutFeedback>
                <Text style={{fontSize:20, marginTop:30}}> Couple / Family </Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
                    <Text style={styles.buttonText}>Check our trivia games</Text>
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

export default  LoggedInUserScreen;
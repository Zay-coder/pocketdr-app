import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';



function LoggedInUserScreen({navigation}) {
    const onPress = () => {};
    return (
        <View style={styles.container}>
            <Text style={{paddingTop: 40, fontSize: 30, fontWeight:'bold', paddingLeft:15}}>Hello User!</Text>
            <StatusBar style="auto"/>
            <Text style={{ fontSize: 30, paddingLeft:15}}>Choose Therapy Type</Text>
            <View style={{flexDirection:'row', margin:10, marginTop:50, paddingLeft:15}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('challenges')}>
                        <Image source={require('../../assets/images/logos.png')}/>
                </TouchableWithoutFeedback>
                <Text style={{margin:30, fontSize:20, paddingLeft:15}}>Adult</Text>
            </View>
            <View style={{flexDirection:'row', margin:10, paddingLeft:15}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('challenges')}>
                    <Image source={require('../../assets/images/logos.png')}/>
                </TouchableWithoutFeedback>
                <Text style={{margin:30, fontSize:20, paddingLeft:15}}>Child / Adolescent</Text>
            </View>
            <View style={{flexDirection:'row', margin:10, paddingLeft:15}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('challenges')}>
                    <Image source={require('../../assets/images/logos.png')}/>
                </TouchableWithoutFeedback>
                <Text style={{margin:30, fontSize:20, paddingLeft:15}}> Couple / Family </Text>
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

export default  LoggedInUserScreen;
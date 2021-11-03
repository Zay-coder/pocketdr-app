import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';




function HomeScreen({navigation}) {
    const onPress = () => {};
    return (
        <View style={styles.container}>
            <View style={{paddingTop: 50}}>
                <Image source={require('../../assets/images/pocketdr.png')} style={{width:120, height:120}}/>
            </View>
            <Text style={{paddingTop: 10, fontSize: 40}}>Pocket Dr</Text>

            <StatusBar style="auto"/>
            <View style={{paddingTop: 10}}>
                <Text>Online therapy in the comfort {'\n'}                of your home</Text>

            </View>
            <View>
                <Image source={require('../../assets/images/WelcomePagePic.jpg')}
                       />
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('signup')} style={styles.button}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingTop: 10}}>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <Text>already a member? <Text style={{color: '#50BDFF'}}>Login Now.</Text>
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
        alignItems: 'center',

    },
    button: {
        backgroundColor: '#ADE0FF',
        borderRadius: 25,
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
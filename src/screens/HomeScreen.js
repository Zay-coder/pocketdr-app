import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import {
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic
} from '@expo-google-fonts/josefin-sans'
import {useFonts} from 'expo-font';
import AppLoading from "expo-app-loading";




function HomeScreen({navigation}) {
    let[fontsLoaded, error] = useFonts({
        JosefinSans_100Thin,
        JosefinSans_200ExtraLight,
        JosefinSans_300Light,
        JosefinSans_400Regular,
        JosefinSans_500Medium,
        JosefinSans_600SemiBold,
        JosefinSans_700Bold,
        JosefinSans_100Thin_Italic,
        JosefinSans_200ExtraLight_Italic,
        JosefinSans_300Light_Italic,
        JosefinSans_400Regular_Italic,
        JosefinSans_500Medium_Italic,
        JosefinSans_600SemiBold_Italic,
        JosefinSans_700Bold_Italic

    })
    if(!fontsLoaded) {
        return <AppLoading/>
    }
    const onPress = () => {};
    return (
        <View style={styles.container}>
            <View style={{paddingTop: 50}}>
                <Image source={require('../../assets/images/pocketdr.png')} style={{width:120, height:120}}/>
            </View>
            <Text style={{paddingTop: 10, fontSize: 40,fontFamily:'JosefinSans_400Regular'}}>Pocket Dr</Text>

            <StatusBar style="auto"/>
            <View style={{paddingTop: 10}}>
                <Text style={{fontFamily:'JosefinSans_400Regular'}}>   Online therapy in the comfort {'\n'}              of your home</Text>

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
                    <Text style={{fontFamily:'JosefinSans_400Regular'}}>already a member? <Text style={{color: '#50BDFF'}}>Login Now.</Text>
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
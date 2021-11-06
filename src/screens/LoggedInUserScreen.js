import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
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
import AsyncStorage from "@react-native-async-storage/async-storage";






function LoggedInUserScreen({navigation}) {
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
    // const [name, setName] = useState(null);
    //
    // const userName = async()=>{
    //     setName(await  AsyncStorage.getItem('@first_name'));
    //
    // }
    // useEffect(()=>{
    //     userName();
    // },[])

    return (
        <View style={styles.container}>
            <Text style={{paddingTop: 40, fontSize: 20, fontFamily:'JosefinSans_700Bold', textAlign: 'center'}}>Welcome Patrick El Zaybak!</Text>
            <StatusBar style="auto"/>
            <Text style={{ fontSize: 20, marginTop:20, textAlign: 'center',fontFamily:'JosefinSans_400Regular'}}>Choose Therapy Type</Text>
            <View style={{flexDirection:'row', margin:10}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('challenges')}>
                        <Image source={require('../../assets/images/adult.png')} style={{width:110, height:110}}/>
                </TouchableWithoutFeedback>
                <Text style={{fontSize:20, marginTop:30,fontFamily:'JosefinSans_400Regular'}}> Adult</Text>
            </View>
            <View style={{flexDirection:'row', margin:10}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('challenges')}>
                    <Image source={require('../../assets/images/child.png')} style={{width:110, height:110}}/>
                </TouchableWithoutFeedback>
                <Text style={{fontSize:20, marginTop:30,fontFamily:'JosefinSans_400Regular'}}> Child / Adolescent</Text>
            </View>
            <View style={{flexDirection:'row', margin:10}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('challenges')}>
                    <Image source={require('../../assets/images/couple.png')} style={{width:110, height:110}}/>
                </TouchableWithoutFeedback>
                <Text style={{fontSize:20, marginTop:30,fontFamily:'JosefinSans_400Regular'}}> Couple / Family </Text>
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
        fontSize:20


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

import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {Avatar, ListItem} from "react-native-elements";
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



export function ProfileScreen({navigation}) {
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

    const list = [
        {
            name: 'Patrick El Zaybak',
            gender: 'Male',
            dob:'1996-11-03',
            joined:'joined in 2017-05-11'
        },

    ]
    return (
        <View style={styles.container}>
            <View style={{marginTop:30}}>
                        {
                            list.map((l, i) => (
                                <ListItem key={i} bottomDivider>
                                    <ListItem.Content style={styles.listItem}>
                                        <ListItem.Title style={{fontFamily:'JosefinSans_700Bold', fontSize:20}}>{l.name}</ListItem.Title>
                                        <ListItem.Subtitle style={{fontFamily:'JosefinSans_400Regular'}}>{l.gender}</ListItem.Subtitle>
                                        <ListItem.Subtitle style={{fontFamily:'JosefinSans_400Regular'}}>{l.dob}</ListItem.Subtitle>
                                        <ListItem.Subtitle style={{fontFamily:'JosefinSans_400Regular'}}>{l.joined}</ListItem.Subtitle>
                                    </ListItem.Content>
                                </ListItem>
                            ))
                        }

            </View>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate('edit')} style={styles.button}>
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'center', marginTop:230}}>
                <TouchableOpacity  onPress={() => navigation.navigate('homepage')} style={styles.button}>
                    <Text style={styles.logout}>Logout</Text>
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
        marginTop:10
    },
    buttonText: {
        color: '#000000',
        fontWeight: 'bold',
        textAlign:'center',
        fontSize:20

    },
    logout: {
        color: '#FF0000',
        fontWeight: 'bold',
        textAlign:'center',
        fontSize:20


    }
});

export default  ProfileScreen;
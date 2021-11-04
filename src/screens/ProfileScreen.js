
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {Avatar, ListItem} from "react-native-elements";



export function ProfileScreen({navigation}) {

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
                                        <ListItem.Title style={{fontWeight: 'bold', fontSize:20}}>{l.name}</ListItem.Title>
                                        <ListItem.Subtitle>{l.gender}</ListItem.Subtitle>
                                        <ListItem.Subtitle>{l.dob}</ListItem.Subtitle>
                                        <ListItem.Subtitle>{l.joined}</ListItem.Subtitle>
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
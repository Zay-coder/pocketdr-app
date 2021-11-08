
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";



export function ProfileScreen({navigation}) {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');

    useEffect(async ()=>{
        setFirstName(await  AsyncStorage.getItem('@first_name'));
        setLastName(await  AsyncStorage.getItem('@last_name'));
        setEmail(await  AsyncStorage.getItem('@email'));
        setDob(await  AsyncStorage.getItem('@dob'));
        setGender(await  AsyncStorage.getItem('@gender'));
        console.log(await  AsyncStorage.getItem('@dob'))
        console.log(await  AsyncStorage.getItem('@gender'))
    },[])



    return (
        <View style={styles.container}>
            <View>
                <View style={{flexDirection: 'row', borderWidth: 1, borderColor: '#fff'}}>
                    <View style={{marginBottom: 10, marginTop: 10, marginLeft: 10}}>
                        <Text style={{fontFamily: 'JosefinSans_700Bold', fontSize: 20}}>{firstname} {lastname}</Text>
                        <Text style={{fontFamily: 'JosefinSans_400Regular', fontSize: 15}}>{email} </Text>
                        <Text style={{fontFamily: 'JosefinSans_400Regular', fontSize: 15}}>{dob}</Text>
                        {gender == 0 ? <Text style={{fontFamily: 'JosefinSans_400Regular', fontSize: 15}}>male</Text>
                            :
                            <Text style={{fontFamily: 'JosefinSans_400Regular', fontSize: 15}}>female</Text>
                        }

                    </View>
                </View>

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
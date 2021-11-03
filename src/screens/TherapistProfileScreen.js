import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TextInput, ScrollView
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {Avatar, Card, Icon, ListItem, Badge} from "react-native-elements";





function TherapistsScreen({navigation}) {
    const onPress = () => {};
    const list = [
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'CBT Specialist',
            yof:'7 years of experience'
        },

    ]
    return (
        <View style={styles.container}>
            <View  style={{paddingTop:40, alignItems:'center', }}>
                <Text style={{fontSize: 20}}>Therapist</Text>
            </View>
            <View>

                <View style={{paddingTop: 30}}>
                    {
                        list.map((l, i) => (
                            <ListItem key={i} bottomDivider>
                                <Avatar source={{uri: l.avatar_url}} style={styles.avatar} />
                                <ListItem.Content style={styles.listItem}>
                                        <ListItem.Title style={{fontWeight: 'bold', fontSize:25}}>{l.name}</ListItem.Title>
                                        <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                                        <ListItem.Subtitle>{l.yof}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        ))
                    }
                </View>
                <View>
                    <Text style={{fontSize:25 ,backgroundColor:'#D3D3D3', margin:5, padding: 3}}> Price:                         100$/hour </Text>
                </View>
                <View>
                    <Text style={{fontSize:25, padding: 3, fontWeight: 'bold'}}>
                        Bio
                    </Text>
                </View>
                <View>
                    <Text style={{fontSize:20 , margin:5, padding: 3}}>
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum

                    </Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('therapistprofile')} style={styles.button}>
                        <Text style={styles.buttonText}>Book Appointment</Text>
                    </TouchableOpacity>
                </View>



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
        borderRadius: 10,
        padding: 10,
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
        fontSize:25

    },
    search: {

        borderWidth: 1,
        borderColor:'#000000',
        borderRadius: 20,
        textAlign: 'center',
        padding: 5,
        width: 260,
        marginLeft: 50

    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 45,
        overflow:'hidden'
    },

    listItem: {
        padding:20,
        borderWidth:1,
        borderRadius:10,


    }
});

export default  TherapistsScreen;
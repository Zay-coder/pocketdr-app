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
import {Avatar, Card, Icon, ListItem} from "react-native-elements";





function TherapistsScreen({navigation}) {
    const onPress = () => {};
    const list = [
        {
            name: 'Amy Farha',
            avatar_url: '../../assets/images/ProfileImage.png',
            subtitle: 'CBT Specialist',
            yof:'7 years of experience'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Children behavior Specialist',
            yof:'4 years of experience'
        },
        {
            name: 'Bella James',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Intimacy and sex Specialist',
            yof:'10 years of experience'
        },
        {
            name: 'Bella James',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Intimacy and sex Specialist',
            yof:'10 years  of experience'
        },
        {
            name: 'Bella James',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Intimacy and sex Specialist',
            yof:'10 years of experience'
        },
        {
            name: 'Bella James',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Intimacy and sex Specialist',
            yof:'10 years of experience'
        },
        {
            name: 'Bella James',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Intimacy and sex Specialist',
            yof:'10 years of experience'
        },
        {
            name: 'Bella James',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Intimacy and sex Specialist',
            yof:'10 years'
        },
    ]
    return (
        <View style={styles.container}>
            <View style={{paddingTop:40}}>
                <TextInput
                    style={styles.search}
                    placeholder="Search Therapists"

                />
                <Text style={{paddingTop: 15, fontSize: 15, paddingLeft: 10}}>Available Therapists</Text>
                <StatusBar style="auto"/>
            </View>
            <View>

                <ScrollView style={{paddingTop: 15}}>
                    {
                        list.map((l, i) => (
                            <ListItem key={i} bottomDivider>
                                <Avatar source={{uri: l.avatar_url}} style={styles.avatar} />
                                <ListItem.Content style={styles.listItem}>
                                    <TouchableOpacity onPress={() => navigation.navigate('TherapistProfile')}>
                                    <ListItem.Title style={{fontWeight: 'bold'}}>{l.name}</ListItem.Title>
                                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                                    <ListItem.Subtitle>{l.yof}</ListItem.Subtitle>
                                    </TouchableOpacity>
                                </ListItem.Content>
                            </ListItem>
                        ))
                    }
                </ScrollView>



            </View>



        </View>
    )
}

const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties
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
        width: 75,
        height: 75,
        borderRadius: 35,
        overflow:'hidden'
    },

    listItem: {
        padding:10,
        borderWidth:1,
        borderRadius:10

    }
});

export default  TherapistsScreen;
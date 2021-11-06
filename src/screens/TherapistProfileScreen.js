import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, TouchableWithoutFeedback, ScrollView} from 'react-native';
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
import axios from "axios";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";



function TherapistProfileScreen({navigation, route}) {
    const id = route.params.id;
    const [therapists, setTherapists] = useState();
    const [upvote, setUpvote] = useState();
    const [downvote, setDownvote] = useState();


    useEffect(()=>{
        getTherapist();
    },[])
    useEffect(()=>{
        getUpvote();
    },[])
    useEffect(()=>{
        getDownvote();
    },[])


    const getTherapist = async ()=> {
        const response = await axios.get('http://192.168.1.102:8000/api/get_chosen_therapist/'+id);
        setTherapists(response.data)

    }
    const getUpvote = async ()=> {
        const response = await axios.get('http://192.168.1.10:8000/api/upvote/'+id);
        setUpvote(response.data)

    }
    const getDownvote = async ()=> {
        const response = await axios.get('http://192.168.1.10:8000/api/downvote/'+id);
        setDownvote(response.data)

    }




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


    return therapists ? (
        <View style={styles.container}>
                    <View key={therapists.id}>
                        <View style={{flexDirection: 'row', borderWidth: 1, borderColor: '#fff'}}>
                            <Image style={{height: 128, width: 128, marginBottom: 10, marginTop: 10, marginLeft: 10}}
                                   source={{uri: therapists.picture}}/>
                            <View style={{marginBottom: 10, marginTop: 10, marginLeft: 10}}>
                                <Text style={{fontFamily: 'JosefinSans_700Bold', fontSize: 20}}>{therapists.first_name} {therapists.last_name}</Text>
                                <Text style={{fontFamily: 'JosefinSans_400Regular', fontSize: 15}}>{therapists.speciality} </Text>
                                <Text style={{fontFamily: 'JosefinSans_400Regular', fontSize: 15}}>Years of Experience : {therapists.yof} </Text>
                                <Text style={{fontFamily: 'JosefinSans_400Regular', fontSize: 15}}>Price : {therapists.price}$ / Session </Text>
                                <Text style={{fontFamily: 'JosefinSans_400Regular', fontSize: 15}}> {therapists.upvotes}   <MaterialCommunityIcons
                                    name={"thumb-up"}
                                    size={25}
                                    onPress={() => {getUpvote} }/></Text>

                                <Text style={{fontFamily: 'JosefinSans_400Regular', fontSize: 15}}> {therapists.downvotes}   <MaterialCommunityIcons
                                    name={"thumb-down"}
                                    size={25}
                                    onPress={() => {getDownvote} }/></Text>

                            </View>
                        </View>
                        <View>
                            <Text style={{fontFamily: 'JosefinSans_700Bold', fontSize: 20, textDecorationLine: 'underline',margin:5}}>Bio:</Text>
                            <Text style={{fontFamily: 'JosefinSans_400Regular', fontSize: 20, textAlign: 'justify',margin:5}}>{therapists.bio}</Text>
                        </View>

                    </View>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate('availabledates',{id:therapists.id})} style={styles.button}>
                    <Text style={styles.buttonText}>Book Appointment</Text>
                </TouchableOpacity>
            </View>

        </View>

    ): ( <View>
            <Text>Loading</Text>
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
        width: 320,
        marginTop:40
    },
    buttonText: {
        color: '#000000',
        fontWeight: 'bold',
        textAlign:'center',
        fontSize:20

    }
});

export default  TherapistProfileScreen;
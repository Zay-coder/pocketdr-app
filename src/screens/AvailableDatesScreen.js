import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView
} from 'react-native';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";





function AvailableDatesScreen({navigation, route}) {
    const id = route.params.therapist.id;
    const therapist = route.params.therapist;
    const [availabledates, setAvailableDates] = useState();

    useEffect(()=>{
        getAvailableDates();
    },[])

    const getAvailableDates = async ()=> {
        const response = await axios.get('http://192.168.1.102:8000/api/get_available_dates/'+id);
        setAvailableDates(response.data)
        console.log(response.data)

    }
    // const sendAppointment = async ()=> {
    //     const response = await axios.get('http://192.168.1.102:8000/api/get_available_dates/'+id);
    //     setAvailableDates(response.data)
    //
    // }

    const send_appointment = async (date,time,appointmentid) => {
        try {
            console.log(appointmentid)
            const res = await  axios.post('http://192.168.1.102:8000/api/sendAppointment',
                {
                    "user_id" : await  AsyncStorage.getItem('@user_id'),
                    "therapist_id" : id,
                    "date_of_appointment": date,
                    "time_of_appointment": time,
                    "appointment_id": appointmentid,
                },
            );
            if (res.data) {
                getAvailableDates();
            }
        } catch(e) {
            console.log(e);
        }

    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {availabledates &&

                availabledates.map( (availabledate) => (
                    <View key={availabledate.id}>
                        <View style={{borderWidth:1, borderColor:'#fff'}}>
                            <View style={{margin: 30}}>
                                <Text style={{marginTop:10, fontFamily:'JosefinSans_400Regular', fontSize:20,textAlign:'center'}}>Date: {availabledate.date_of_availability} </Text>
                                <Text style={{fontFamily:'JosefinSans_400Regular', fontSize:20, textAlign:'center'}}>Time : {availabledate.time_of_availability} </Text>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <TouchableOpacity onPress={() => send_appointment(availabledate.date_of_availability, availabledate.time_of_availability, availabledate.id)} style={styles.button}>
                                    <Text style={styles.buttonText}>Book Now</Text>
                                </TouchableOpacity>
                            </View>


                        </View>
                    </View>

                ))

                }
            </ScrollView>

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
        padding: 7,
        borderColor:'#000000',
        borderWidth: 1,
        width: 210,
        marginBottom: 10

    },
    buttonText: {
        color: '#000000',
        fontWeight: 'bold',
        textAlign:'center',

    }
});

export default  AvailableDatesScreen;
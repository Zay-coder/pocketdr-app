
import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import axios from 'axios';


function TherapistsScreen({navigation}) {
    const [therapists, setTherapists] = useState(null);
    const getTherapist = async ()=> {
        const response = await axios.get('http://192.168.1.102:8000/api/all_therapists');
        setTherapists(response.data)
    }


    useEffect(()=>{
        getTherapist();
    },[])
    return(

    <View>
        <Text>Hello</Text>
        {therapists &&

            therapists.map( (therapist) => (
            <View key={therapist.id}>
                <Text>{therapist.first_name}</Text>
                <Text>{therapist.last_name}</Text>
            </View>

            ))

        }
    </View>
    );

}





export default TherapistsScreen;

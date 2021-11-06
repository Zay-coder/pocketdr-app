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





function AvailableDatesScreen({navigation, route}) {
    const id = route.params.id;
    const [availabledates, setAvailableDates] = useState();

    useEffect(()=>{
        getAvailableDates();
    },[])

    const getAvailableDates = async ()=> {
        const response = await axios.get('http://192.168.1.102:8000/api/get_available_dates/'+id);
        setAvailableDates(response.data)

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
                                <TouchableOpacity onPress={() => navigation.navigate('availabledates',{id:availabledate.id})} style={styles.button}>
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
import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import axios from 'axios';


function QuoteScreen({navigation}) {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const quoteAPI = async()=> {
        let arrayofQuotes = [];
        try {
            const data = await axios.get('http://api.quotable.io/random');
            console.log(data)
            arrayofQuotes = data.data;
        } catch (error) {
            console.log(error);
        }
        try {
            setQuote(arrayofQuotes.content);
            setAuthor(arrayofQuotes.author);
        }catch (error){
            console.log(error)
        }
    };


    useEffect(() => {
        quoteAPI();
    }, []);

    return (
        <View style={styles.container}>
            <View style={{alignItems:'center',marginTop:30}}>
                <TouchableOpacity onPress={() => {quoteAPI()} } style={styles.button} >
                    <Text style={styles.buttonText}>Next Quote</Text>
                </TouchableOpacity>
            </View>


            <View>
                <Text style={{margin:10,paddingTop: 10, fontSize: 20, fontFamily:'JosefinSans_700Bold',textAlign: 'center'}}>Quote of the day:</Text>
                <Text style={{margin:10,paddingTop: 10, fontSize: 20, fontFamily:'JosefinSans_700Bold',textAlign: 'center'}}>"{quote}" {'\n'}{'\n'} - {author}</Text>
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
        fontSize:15

    }
});

export default  QuoteScreen;
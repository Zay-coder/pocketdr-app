import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';




function ChallengesScreen({navigation}) {
    const onPress = () => {};
    return (
        <View style={styles.container}>
            <View style={{paddingTop: 40, flexDirection:'row', justifyContent:'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('therapists')}>
                <View style={{padding: 15}}>
                    <Image source={require('../../assets/images/depression.png')}/>
                    <Text style={{textAlign: 'center'}}>Depression</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('therapists')}>
                <View style={{padding: 15}}>
                    <Image source={require('../../assets/images/anxiety.png')}/>
                    <Text style={{textAlign: 'center'}}>Anxiety</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('therapists')}>
                <View style={{padding: 15}}>
                    <Image source={require('../../assets/images/stress.png')}/>
                    <Text style={{textAlign: 'center'}}>Stress</Text>
                </View>
            </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('therapists')}>
                    <View style={{padding: 15}}>
                        <Image source={require('../../assets/images/personality.png')}/>
                        <Text style={{textAlign: 'center'}}>Personality</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('therapists')}>
                    <View style={{padding: 15}}>
                        <Image source={require('../../assets/images/geriatric.png')}/>
                        <Text style={{textAlign: 'center'}}>Geriatric</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('therapists')}>
                    <View style={{padding: 15}}>
                        <Image source={require('../../assets/images/sex.png')}/>
                        <Text style={{textAlign: 'center'}}>Sex</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('therapists')}>
                    <View style={{padding: 15}}>
                        <Image source={require('../../assets/images/addiction.png')}/>
                        <Text style={{textAlign: 'center'}}>Addiction</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('therapists')}>
                    <View style={{padding: 15}}>
                        <Image source={require('../../assets/images/sleep.png')}/>
                        <Text style={{textAlign: 'center'}}>Sleep</Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E2F4FF',
        alignItems: 'center',


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

    }
});

export default  ChallengesScreen;
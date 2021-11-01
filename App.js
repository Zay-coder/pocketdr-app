import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import TherapyTypeScreen from "./src/screens/TherapyTypeScreen";
import ChallengesScreen from "./src/screens/ChallengesScreen";
import TherapistsScreen from "./src/screens/TherapistsScreen";
import TherapistProfileScreen from "./src/screens/TherapistProfileScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import LoggedInUserScreen from "./src/screens/LoggedInUserScreen";

export default function App() {

    return (

    <NavigationContainer>
        <Stack.Navigator   screenOptions={{
            headerShown: false
        }} initialRouteNae="Welcome">
            <Stack.Screen name="Welcome" component={HomeScreen}/>
            <Stack.Screen name="TherapyType" component={TherapyTypeScreen}/>
            <Stack.Screen name="Challenges" component={ChallengesScreen}/>
            <Stack.Screen name="Therapists" component={TherapistsScreen}/>
            <Stack.Screen name="TherapistProfile" component={TherapistProfileScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
            <Stack.Screen name="LoggedIn" component={LoggedInUserScreen}/>

        </Stack.Navigator>
    </NavigationContainer>
    );
}
const Stack = createStackNavigator()


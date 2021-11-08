import React, {useEffect, useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ChallengesScreen from "./src/screens/ChallengesScreen";
import TherapistsScreen from "./src/screens/TherapistsScreen";
import TherapistProfileScreen from "./src/screens/TherapistProfileScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import LoggedInUserScreen from "./src/screens/LoggedInUserScreen";
import AppointmentsScreen from "./src/screens/AppointmentsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import AvailableDatesScreen from "./src/screens/AvailableDatesScreen";
import QuoteScreen from "./src/screens/QuoteScreen";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
import {AuthContext} from "./src/components/context";


import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import AppointmentInfoScreen from "./src/screens/AppointmentInfo";
import {ActivityIndicator, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const AuthStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const ProfileStack = createStackNavigator();
const AppointmentsStack = createStackNavigator();
const HomeStack = createStackNavigator();
const QuoteStack= createStackNavigator();


// Browse nav and every navigation related to it
const QuoteStackScreen = () => (
    <QuoteStack.Navigator>
        <QuoteStack.Screen
            name="quote"
            component={QuoteScreen}
            options={{
                title: 'Motivation',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#ffffff',


                },
                headerTintColor: '#000000',
                headerTitleStyle: {
                    fontWeight: 'bold',

                },
            }}
        />
    </QuoteStack.Navigator>
);

const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen
            name="profile"
            component={ProfileScreen}
            options={{
                title: 'Profile',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#ffffff',


                },
                headerTintColor: '#000000',
                headerTitleStyle: {
                    fontWeight: 'bold',

                },
            }}
        />
    </ProfileStack.Navigator>
);
const AppointmentsStackScreen = () => (
    <AppointmentsStack.Navigator>
        <AppointmentsStack.Screen
            name="appointments"
            component={AppointmentsScreen}
            options={{
                title: 'Appointments',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#ffffff',


                },
                headerTintColor: '#000000',
                headerTitleStyle: {
                    fontWeight: 'bold',

                },
            }}
        />
        <AppointmentsStack.Screen
            name="appointmentinfo"
            component={AppointmentInfoScreen}
            options={{
                title: 'Appointment Info',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#ffffff',


                },
                headerTintColor: '#000000',
                headerTitleStyle: {
                    fontWeight: 'bold',

                },
            }}
        />
    </AppointmentsStack.Navigator>

);
const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen
            name="loggedin"
            component={LoggedInUserScreen}
            options={{headerShown: false}}
        />
        <HomeStack.Screen
            name="challenges"
            component={ChallengesScreen}
            options={{
                title: 'Challenges',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#ffffff',


                },
                headerTintColor: '#000000',
                headerTitleStyle: {
                    fontWeight: 'bold',

                },
            }}
        />

        <HomeStack.Screen
            name="therapists"
            component={TherapistsScreen}
            options={{
                title: 'Therapists',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#ffffff',


                },
                headerTintColor: '#000000',
                headerTitleStyle: {
                    fontWeight: 'bold',

                },
            }}
        />
        <HomeStack.Screen
            name="therapistprofile"
            component={TherapistProfileScreen}
            options={{
                title: 'Therapist Profile',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#ffffff',


                },
                headerTintColor: '#000000',
                headerTitleStyle: {
                    fontWeight: 'bold',

                },
            }}
        />
        <HomeStack.Screen
            name="availabledates"
            component={AvailableDatesScreen}
            options={{
                title: 'Available Dates',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#ffffff',


                },
                headerTintColor: '#000000',
                headerTitleStyle: {
                    fontWeight: 'bold',

                },
            }}
        />


    </HomeStack.Navigator>

);

const BottomTabScreen = () => (
    <Tab.Navigator
        activeColor="white"
        inactiveColor="grey"
        barStyle={{
            backgroundColor: '#ADE0FF',
            shadowColor: "black",
            shadowOffset: {width: 1, height: 3},
            shadowOpacity: 0.7,
            shadowRadius: 5,
            overflow: "hidden",
            height: 56,
            // borderTopLeftRadius: 15,
            // borderTopRightRadius: 15,
        }}
        initialRouteName="Home"
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => (
                    <MaterialCommunityIcons
                        name={"folder-home-outline"}
                        size={25}
                        color={color}
                    />
                ),
            }}
        />

        <Tab.Screen
            name="Appointments"
            component={AppointmentsStackScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => (
                    <MaterialCommunityIcons
                        name={"book-search"}
                        size={25}
                        color={color}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => (
                    <MaterialCommunityIcons
                        name={"account"}
                        size={25}
                        color={color}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="quote"
            component={QuoteStackScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => (
                    <MaterialCommunityIcons
                        name={"emoticon-happy"}
                        size={25}
                        color={color}
                    />
                ),
            }}
        />
    </Tab.Navigator>
);


export default function App() {

    return (

        <NavigationContainer>
                    <AuthStack.Navigator initialRouteName="homepage">
                        <AuthStack.Screen
                            name="homepage"
                            component={HomeScreen}
                            options={{headerShown: false}}
                        />
                        <AuthStack.Screen
                            name="login"
                            component={LoginScreen}
                            options={{
                                title: 'Login In',
                                headerTitleAlign: 'center',
                                headerStyle: {
                                    backgroundColor: '#ffffff',


                                },
                                headerTintColor: '#000000',
                                headerTitleStyle: {
                                    fontWeight: 'bold',

                                },
                            }}
                        />
                        <AuthStack.Screen
                            name="signup"
                            component={SignUpScreen}
                            options={{
                                title: 'Sign Up',
                                headerTitleAlign: 'center',
                                headerStyle: {
                                    backgroundColor: '#ffffff',


                                },
                                headerTintColor: '#000000',
                                headerTitleStyle: {
                                    fontWeight: 'bold',

                                },
                            }}
                        />
                        <AuthStack.Screen
                            name="bottomtabs"
                            component={BottomTabScreen}
                            options={{
                                headerShown: false
                            }}
                            />

                    </AuthStack.Navigator>



        </NavigationContainer>


    );
}



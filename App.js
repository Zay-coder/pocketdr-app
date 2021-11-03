import React, {useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import TherapyTypeScreen from "./src/screens/TherapyTypeScreen";
import ChallengesScreen from "./src/screens/ChallengesScreen";
import TherapistsScreen from "./src/screens/TherapistsScreen";
import TherapistProfileScreen from "./src/screens/TherapistProfileScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import LoggedInUserScreen from "./src/screens/LoggedInUserScreen";
import AppointmentsScreen from "./src/screens/AppointmentsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import AppointmentInfoScreen from "./src/screens/AppointmentInfo";


export const AuthStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const ProfileStack = createStackNavigator();
const AppointmentsStack = createStackNavigator();
const HomeStack = createStackNavigator();


// Browse nav and every navigation related to it
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
            name="appointmentInfo"
            component={AppointmentInfoScreen}
            options={{
                title: 'Appointment',
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

    </HomeStack.Navigator>
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
            </AuthStack.Navigator>

            {/*<Tab.Navigator*/}
            {/*    activeColor="white"*/}
            {/*    inactiveColor="grey"*/}
            {/*    barStyle={{*/}
            {/*        backgroundColor: '#ADE0FF',*/}
            {/*        shadowColor: "black",*/}
            {/*        shadowOffset: {width: 1, height: 3},*/}
            {/*        shadowOpacity: 0.7,*/}
            {/*        shadowRadius: 5,*/}
            {/*        overflow: "hidden",*/}
            {/*        height: 56,*/}
            {/*        // borderTopLeftRadius: 15,*/}
            {/*        // borderTopRightRadius: 15,*/}
            {/*    }}*/}
            {/*    initialRouteName="Home"*/}
            {/*>*/}
            {/*    <Tab.Screen*/}
            {/*        name="Home"*/}
            {/*        component={HomeStackScreen}*/}
            {/*        options={{*/}
            {/*            headerShown: false,*/}
            {/*            tabBarIcon: ({focused, color, size}) => (*/}
            {/*                <MaterialCommunityIcons*/}
            {/*                    name={"folder-home-outline"}*/}
            {/*                    size={25}*/}
            {/*                    color={color}*/}
            {/*                />*/}
            {/*            ),*/}
            {/*        }}*/}
            {/*    />*/}

            {/*    <Tab.Screen*/}
            {/*        name="Appointments"*/}
            {/*        component={AppointmentsStackScreen}*/}
            {/*        options={{*/}
            {/*            headerShown: false,*/}
            {/*            tabBarIcon: ({focused, color, size}) => (*/}
            {/*                <MaterialCommunityIcons*/}
            {/*                    name={"book-search"}*/}
            {/*                    size={25}*/}
            {/*                    color={color}*/}
            {/*                />*/}
            {/*            ),*/}
            {/*        }}*/}
            {/*    />*/}
            {/*    <Tab.Screen*/}
            {/*        name="Profile"*/}
            {/*        component={ProfileStackScreen}*/}
            {/*        options={{*/}
            {/*            headerShown: false,*/}
            {/*            tabBarIcon: ({focused, color, size}) => (*/}
            {/*                <MaterialCommunityIcons*/}
            {/*                    name={"account"}*/}
            {/*                    size={25}*/}
            {/*                    color={color}*/}
            {/*                />*/}
            {/*            ),*/}
            {/*        }}*/}
            {/*    />*/}
            {/*</Tab.Navigator>*/}
        </NavigationContainer>

    );
}



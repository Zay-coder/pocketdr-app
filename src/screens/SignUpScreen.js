import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Picker} from 'react-native';
import {createNativeStackNavigator} from "react-native-screens/native-stack";




function SignUpScreen({navigation}) {
    const onPress = () => {};
    const [selectedValue, setSelectedValue] = useState("Gender");
    return (
        <View style={styles.container}>
            <View  style={{paddingTop: 20, textAlign:'left', paddingLeft:20}}>
                <Text style={{ fontSize: 15, }}>
                   First name :
                </Text>
                <TextInput placeholder='First name' style={styles.textInput}/>
            </View>
            <View  style={{paddingTop: 20, textAlign:'left', paddingLeft:20}}>
                <Text style={{ fontSize: 15, }}>
                    Last name :
                </Text>
                <TextInput placeholder='Last name' style={styles.textInput}/>
            </View>
            <View  style={{paddingTop: 20, textAlign:'left', paddingLeft:20}}>
                <Text style={{ fontSize: 15, }}>
                    Email :
                </Text>
                <TextInput placeholder='E-mail' style={styles.textInput}/>
            </View>
            <View  style={{paddingTop: 20, textAlign:'left', paddingLeft:20}}>
                <Text style={{ fontSize: 15, }}>
                    Password :
                </Text>
                <TextInput placeholder='Password' style={styles.textInput} secureTextEntry={true}/>
            </View>
            <View  style={{paddingTop: 20, textAlign:'left', paddingLeft:20, }}>
                <Text style={{ fontSize: 15, }}>
                    Date of birth:
                </Text>
                <TextInput placeholder='Date of birth' style={styles.textInput}/>
            </View>
            <View  style={{paddingTop: 20, textAlign:'left', paddingLeft:20 }}>
                <Text>
                    Gender:
                </Text>
            </View>
            <View style={{textAlign:'left', paddingLeft:15}}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150}}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                </Picker>


            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('login')} style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

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
        borderRadius: 25,
        padding: 6,
        borderColor:'#000000',
        borderWidth: 1,
        width: 320,
        marginLeft: 20,
        marginTop: 15
    },
    buttonText: {
        color: '#000000',
        fontWeight: 'bold',
        textAlign:'center',
        fontSize:23

    },

    textInput: {
        backgroundColor:'#ffffff',
        borderWidth: 1,
        borderRadius: 5,
        borderColor:'#D3D3D3',
        width: 320,
        padding: 5
    }
});
export default  SignUpScreen;
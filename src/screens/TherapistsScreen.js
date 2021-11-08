
import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView, TextInput
} from 'react-native';
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


    // this.searchTherapists = function (value) {
    //     const filteredTherapists = therapists.filter(
    //         therapists => {
    //             let therapistLowercase = (therapist.first_name+''+therapist.last_name).toLowerCase()
    //             let searchTermLowerase = value.toLowerCase()
    //             return therapistLowercase.indexOf(searchTermLowerase)>-1
    //         }
    //     )
    //     setTherapists({therapists:filteredTherapists});
    // }
    return(

    <View style={styles.container}>
        <TextInput
            style={styles.searchInput}
            placeholder='search therapists'
            underlineColorAndroid='transparent'
            // onChangeText={(value)=>this.searchTherapists(value)}
            />
        <ScrollView>
        {therapists &&

            therapists.map( (therapist) => (
            <View key={therapist.id}>
                <View style={{flexDirection:'row', borderWidth:1, borderColor:'#fff'}}>
                <Image style= {{ height:128, width: 128, marginBottom:10, marginTop:10, marginLeft:10 }} source={{uri:therapist.picture}} />
                    <View style={{marginBottom:10, marginTop:10, marginLeft:10}}>
                    <Text style={{fontFamily:'JosefinSans_700Bold', fontSize:20}}>{therapist.first_name} {therapist.last_name}</Text>
                    <Text style={{marginTop:10, fontFamily:'JosefinSans_400Regular', fontSize:15}}>{therapist.speciality} </Text>
                    <Text style={{fontFamily:'JosefinSans_400Regular', fontSize:15}}>Years of Experience : {therapist.yof} </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('therapistprofile',{id:therapist.id})} style={styles.button}>
                            <Text style={styles.buttonText}>View</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

            ))

        }
        </ScrollView>
    </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E2F4FF',
    },
    button: {
        backgroundColor: '#ADE0FF',
        borderRadius: 25,
        borderColor:'#000000',
        borderWidth: 1,
        width:170,
        padding:5,
        marginTop:10
    },
    buttonText: {
        color: '#000000',
        fontWeight: 'bold',
        textAlign:'center',

    },
    searchInput: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor:'#fff'
    }

});


export default TherapistsScreen;

import React, { useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
ActivityIndicator
} from 'react-native';
import * as api from "../services/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Splash({ navigation }) {

    useEffect(() => {

        setTimeout(async () => {
   
            getdata()

        }, 2000);
    }, []);
    async function getdata() {
        await AsyncStorage.getItem('email').then(async (res) => {
            if(res){
            let response = await api.login();
            dataparse = JSON.parse(response.config.data)
            logindata = dataparse.request
            if (logindata.userMailid !== undefined){
            return navigation.replace('App Screens');
            }
            else return navigation.replace('Login Screen');
        }
        else navigation.replace('Login Screen');
    })
    }
    return (
        <View style={styles.body} >
            <Image
       
                style={styles.logo}
                source={require('.././Assets/logowithname.png')}
            />
            <ActivityIndicator  size="large" style={{marginTop:100}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    logo: {
    
       
    },
    text: {
        fontSize: 20,
        color: '#000',
    },
})
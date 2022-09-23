import React, { useEffect,useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
ActivityIndicator
} from 'react-native';
import * as api from "../services/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../Components/Loader';
import  Deviceinfo from 'react-native-device-info';
import b from "../configuration/Datahandler";

export default function Splash({ navigation }) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Deviceinfo.getUniqueId().then((id) => {
            b.setuseriid(id)
        });
        setTimeout(async () => {
     
            getdata()
        }, 2000);
    }, []);
    async function getdata() {
        setLoading(true)
        await AsyncStorage.getItem('email').then(async (res) => {
            if(res){
                try {
            let response = await api.login();
            dataparse = JSON.parse(response.config.data)
            logindata = dataparse.request
            if (logindata.userMailid !== undefined){
            return navigation.replace('App Screens');
            }
            else return navigation.replace('Login Screen');
        } catch (error) {
            return navigation.replace('Login Screen');

      
        }
        
        }
        else navigation.replace('Login Screen');
    })
    }
    return (
        <View >
                 <Loader loading={loading} navigation={navigation} />
            <Image
            
             style={styles.logo}
             
                source={require('.././Assets/bg-white.png')}
            /> 
        </View>
       
    )
}

const styles = StyleSheet.create({
  
    logo: {
        width:'100%',
        height:'100%',
        resizeMode:'contain',
   
    },
    text: {
        fontSize: 20,
        color: '#000',
    },
})
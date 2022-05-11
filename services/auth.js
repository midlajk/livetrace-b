import axios from 'axios';

import * as c from '../configuration/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DataHandler from "../configuration/Datahandler";


export async function login(){
    let email = await AsyncStorage.getItem('email')
    let password = await AsyncStorage.getItem('password')

    try{ 
        
        let res = await axios.post(c.LOGIN, {"request": {
            "userMailid": email,
            "password": password
            }} );
            DataHandler.setUser(res.data.status); 
            DataHandler.setVehicle(res.data.response.ConfigData)// Save User
            DataHandler.setServerDate(res.data.server.dateTime)
            return res;
    }catch (e) {

        throw handler(e);
    }
}

export async function fetchdata(){
  
    let email = await AsyncStorage.getItem('email')
    let password = await AsyncStorage.getItem('password')
    try{

  
        let res = await axios.post(c.DATA, {"request": {
            "userMailid": email,
            "password": password
            }} );
            
         return res
        
    }catch (e) {
        throw handler(e);
    }
}

export function handler(err) {
    let error = err;

    if (err.response && err.response.data.hasOwnProperty("message"))
        error = err.response.data;
    else if (!err.hasOwnProperty("message")) error = err.toJSON();

    return new Error(error.message);
}
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
export async function singledata(imei){


    let email = await AsyncStorage.getItem('email')
    let password = await AsyncStorage.getItem('password')
    try{

  
        let res = await axios.post(c.DATA_SINGLE, {
            "header": {
            "appVersion": "1.0",
            "clientName": "tracker" 
            },
            "request": {
            "userMailid": email,
            "password": password,
            "imei_single": imei	
            }
        });
            
         return res.data.response.LiveData
        
    }catch (e) {
        throw handler(e);
    }
}

export async function history(imei){


    let email = await AsyncStorage.getItem('email')
    let password = await AsyncStorage.getItem('password')
    try{

  
        let res = await axios.post(c.HISTORY_DATA, {
            "header": {
            "appVersion": "1.0",
            "clientName": "tracker" 
            },
            "request": {
            "userMailid": "radiant",
            "password": "radiant",
            "regNumber": "KL-10-AF-9836",
            "fromDate": "2022-05-01",
            "toDate": "2022-05-02",
            "rowLimit": "10"
            }
        });
            
         return res.data.response
        
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
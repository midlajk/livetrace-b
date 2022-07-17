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

export async function history(from,to,vehicle){
        var fromtime = new Date(from)
        fromtime.setHours(fromtime.getHours() + 5);
        fromtime.setMinutes(fromtime.getMinutes() + 30);
        var totime = new Date(to)
        totime.setHours(totime.getHours() + 5);
        totime.setMinutes(totime.getMinutes() + 30);
    let email = await AsyncStorage.getItem('email')
    let password = await AsyncStorage.getItem('password')
    try{

  
        let res = await axios.post(c.HISTORY_DATA, {
            "header": {
            "appVersion": "1.0",
            "clientName": "tracker" 
            },
            "request": {
            "userMailid": email,
            "password": password,
            "regNumber": vehicle,
            "fromDate": fromtime.toISOString(),
            "fromTime": "12:00AM",
            "toDate": totime.toISOString(),
            "toTime": "11:59PM",
            "rowLimit": "5000"
            }
        });
         return res.data.response
        
    }catch (e) {
        console.log('here err')

        throw handler(e);

    }
}
export async function report(data){

    let email = await AsyncStorage.getItem('email')
    let password = await AsyncStorage.getItem('password')
    try{

  
        let res = await axios.post(c.REPORT, {
            "header": {
            "appVersion": "1.0",
            "clientName": "tracker" 
            },
            "request": {
            "CustName": data.name,
            "RegNo": data.vehicle,
            "MobNo": data.mobile,
            "Serial": data.imei,
            "Fault": data.fault,
            "Comments": data.comment,
            "UserName": email,
            "Password": password
            }
        });
            
         return res.data.status
        
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

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
            "password": password,
            "uid":DataHandler.getuseriid()
            }} );
            DataHandler.setUser(res.data.status); 
            DataHandler.setServerDate(res.data.server.dateTime)
            DataHandler.setVehicle(res.data.response.ConfigData)// Save User

            return res;
    }catch (e) {
        throw handler(e);
        
    }
}


export async function fetchdatab(){
    let email = await AsyncStorage.getItem('email')
    let password = await AsyncStorage.getItem('password')
    try{

  
        let res = await axios.post(c.DATA, {"request": {
            "userMailid": email,
            "password": password,
            "uid":DataHandler.getuseriid()
            }} );

  let newArr = []
    res.data.response.LiveData.forEach((obj) => {
      var veh = DataHandler.getVehicle().find( arr1Obj => arr1Obj.Reg_No === obj.Reg_No)
        var lastupdate = new Date(obj.Time);
        var lastupdatestring = new Date(obj.Time);
       lastupdate.setMinutes(lastupdate.getMinutes()+330+veh.Gmt_Corr||0);
       lastupdatestring.setMinutes(lastupdatestring.getMinutes()+veh.Gmt_Corr||0);
       newArr.push({...obj, corrected330: lastupdate.toISOString(),noncorrected330: lastupdatestring.toISOString(),correction:veh.Gmt_Corr||0} )          

      
    });            
         return {data:newArr,serverdate:res.data.server.dateTime}
        
    }catch (e) {
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
            "Password": password,
            "uid":DataHandler.getuseriid()
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

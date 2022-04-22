import axios from 'axios';

import * as c from '../configuration/constant';


export async function login(mail,password){
    try{
 
        let res = await axios.post(c.LOGIN, {"request": {
            "userMailid": mail,
            "password": password
            }} );
       
            return res;
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
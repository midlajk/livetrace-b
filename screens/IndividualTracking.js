import React,{useState,useEffect} from  'react';
import { Text, View ,TouchableOpacity,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView, { PROVIDER_GOOGLE, Marker,Callout } from 'react-native-maps';
import * as api from "../services/auth";
import Loader from '../Components/Loader';
import Datepick from '../Components/Datepicker';

import MapTopButton from '../Components/maptopscreen';
import Mapview from '../Components/MapView';
import BotomButton from '../Components/seperatetracking_bottom';

export default function Tracking({navigation,route}) {
  const [list, setList] = useState([]);
  const [history, sethistory] = useState({});
  const [time, setTime] = useState('');
  const [speed, setSpeed] = useState();
  const [status, setStatus] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [vnumber, setVNumber] = useState('');
  const [picker, setPicker] = useState(false);
  const [fromdate, setFromdate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  useEffect(() => {
    getdata()
    setTimeout(() => {
      getdata()
    }, 100);
  }, []);
   
    async function getdata() {
      setLoading(true) 
      let response = await api.singledata(route.params.imei)
      if(response.length!=0){
        setList(response)
        setTime(response[0].Time)
        setSpeed(response[0].Speed)
        setStatus(response[0].Igni>0?'Online':'Offline')
        setVNumber(response[0].Reg_No)
        result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+response[0].Lat+`,`+response[0].Lon+`&key=AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ`)
        .then(res => res.json())
        .then((json) => {
          setAddress(json.results[0].formatted_address.split(',').slice(1,3))
            
     })
      }
        setLoading(false) 

    }
    async function gethistory() {
   
    
    }  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                     <Loader loading={loading} navigation={navigation} />
                     <Datepick picker={picker} setPicker={setPicker} fromdate={fromdate} setFromdate={setFromdate} toDate={toDate} setToDate={setToDate} />

                     <Mapview list={list} navigation={navigation} />
                     <MapTopButton getdata={getdata} navigation={navigation} setButtonVisible={setButtonVisible} buttonVisible={buttonVisible}/>

                     {buttonVisible?<BotomButton setPicker={setPicker} time={time} speed={speed} status={status} navigation={navigation} address={address} vnumber={vnumber} gethistory={gethistory} />:<View></View>}
    
     
    </View>
  );
}

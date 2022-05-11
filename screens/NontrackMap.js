import React,{useState,useEffect} from  'react';
import {  View } from 'react-native';
import * as api from "../services/auth";
import Loader from '../Components/Loader';
import MapButton from '../Components/mapscreen_button';
import MapTopButton from '../Components/maptopscreen';
import Mapview from '../Components/MapView';
import b from "../configuration/Datahandler";

export default function NonTracking({navigation}) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [serverdate, setServerdate] = useState('');
  const [vehicle, setvehicle] = useState([]);
  var nonTrackingVehicle = [];
  var notrack = [];
  useEffect(() => {
    setLoading(true) 
    getdata()
    setvehicle(b.getVehicle())
    setTimeout(() => {
      getdata()
  }, 100);
  }, []);
   
    async function getdata() {
    
        let response = await api.fetchdata(); 
          setServerdate(response.data.server.dateTime)
         setList(response.data.response.LiveData)
        setLoading(false) 

    }
    vehicle.forEach(vehicle => {
      list.forEach(element => {
        if(vehicle.Reg_No == element.Reg_No){
          servdate = new Date(serverdate)
          lastupdate = new Date(element.Time)
          lastupdate.setHours(lastupdate.getHours()+5)
          lastupdate.setMinutes(lastupdate.getMinutes()+30)
          diff = servdate - lastupdate
          offint = vehicle.Off_Int == null ? 90 : vehicle.Off_Int
          if(diff>offint*60000){
            nonTrackingVehicle=[...nonTrackingVehicle,element ];
          }
        }
        
      });
    });
         
    vehicle.forEach(vehicle => {
            found=false
            list.forEach(element => {
              if(vehicle.Reg_No == element.Reg_No){
                found=true
              }
              });
              if(!found){
                notrack=[...notrack,vehicle ];
              }
            });

            setTimeout(() => {
              getdata()
          }, 6000);
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                     <Loader loading={loading} navigation={navigation} />
                     <Mapview list={nonTrackingVehicle} navigation={navigation}/>

   <MapTopButton getdata={getdata} navigation={navigation} setButtonVisible={setButtonVisible} buttonVisible={buttonVisible}/>

   {buttonVisible?<MapButton screen='Non-Tracking Vehicle' navigation={navigation} list={list}  serverdate={serverdate} data={[...notrack,...nonTrackingVehicle]}/>:<View></View>}
    </View>
  
  );
}


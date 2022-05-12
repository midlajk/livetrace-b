import React,{useState,useEffect}  from 'react';
import {  View } from 'react-native';
import * as api from "../services/auth";
import Loader from '../Components/Loader';
import MapButton from '../Components/mapscreen_button';
import MapTopButton from '../Components/maptopscreen';
import Mapview from '../Components/MapView';
import b from "../configuration/Datahandler";

export default function HomeScreen({navigation}) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [serverdate, setServerdate] = useState('');
  const [vehicle, setvehicle] = useState([]);

var listofdata=[]
  useEffect(() => {
    setLoading(true) 
   setvehicle(b.getVehicle()) 
   getdata()
    setTimeout(() => {
      getdata()
    }, 100);
  }, []);
   
    async function getdata() {
        let response = await api.fetchdata(); 
         setList(response.data.response.LiveData)
         setServerdate(response.data.server.dateTime)
        setLoading(false) 

    }
   
    listofdata=list;
          vehicle.forEach(vehicle => {
            found=false
            list.forEach(element => {
              if(vehicle.Reg_No == element.Reg_No){
                found=true
              }
              });
              if(!found){
                listofdata=[...listofdata,vehicle ];
              }
            })
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <Loader loading={loading} navigation={navigation} />

    <Mapview list={list} navigation={navigation} />
   <MapTopButton getdata={getdata} navigation={navigation} setButtonVisible={setButtonVisible} buttonVisible={buttonVisible}/>
{buttonVisible?<MapButton screen='mainscreen' navigation={navigation} list={list}  serverdate={serverdate} data={listofdata}/>:<View></View>}
    
    </View>
  );
}


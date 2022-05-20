import React,{useState,useEffect}  from 'react';
import {  View } from 'react-native';
import * as api from "../services/auth";
import Loader from '../Components/Loader';
import MapButton from '../Components/mapscreen_button';
import MapTopButton from '../Components/maptopscreen';
import Mapview from '../Components/MapView';
import b from "../configuration/Datahandler";
import IndividualMap from '../Components/individualmapview';

export default function HomeScreen({navigation}) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [serverdate, setServerdate] = useState('');
  const [vehicle, setvehicle] = useState([]);
  const [userdata, setUserdata] = useState({});
  const [counter, setCounter] = useState(0);

var listofdata=[]
useEffect(() => {
   setLoading(true) 
   setvehicle(b.getVehicle()) 
   setUserdata(b.getUser())  
   getdata()
}, [])

  useEffect(() => {
    setTimeout(() => {

      setCounter(old=>old+1)
      getdata()
    }, userdata.int_Refresh*1000);
  }, [counter]);
   
    async function getdata() {
        let response = await api.fetchdata(); 
         setList(response.data.response.LiveData)
         setServerdate(response.data.server.dateTime)
         if(response){
              setLoading(false) 
         }
     

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
               {list.length>0&&list.length<2?<IndividualMap list={list} navigation={navigation} />:<Mapview list={list} navigation={navigation} />}
    <Mapview list={list} navigation={navigation} first={list[0]}/>
   <MapTopButton getdata={getdata} navigation={navigation} setButtonVisible={setButtonVisible} buttonVisible={buttonVisible}/>
{buttonVisible?<MapButton screen='mainscreen' navigation={navigation} list={list}  serverdate={serverdate} data={listofdata}/>:<View></View>}
    
    </View>
  );
}


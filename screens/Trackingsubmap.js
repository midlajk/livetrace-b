import React,{useState,useEffect} from  'react';
import { View } from 'react-native';
import * as api from "../services/auth";
import Loader from '../Components/Loader';
import MapButton from '../Components/mapscreen_button';
import MapTopButton from '../Components/maptopscreen';
import Mapview from '../Components/MapView';
import b from "../configuration/Datahandler";
import IndividualMap from '../Components/individualmapview';

export default function Tracking({navigation,route}) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [serverdate, setServerdate] = useState('');
  const [vehicle, setvehicle] = useState([]);
  const [userdata, setUserdata] = useState({});
  const [counter, setCounter] = useState(0);
  var running=[]
  var idle=[]
  var halt=[]
  var nogps=[]
  useEffect(() => {
    setLoading(true) 
    getdata()
    setvehicle(b.getVehicle())
    setUserdata(b.getUser())  

  }, []);
  useEffect(() => {
    setTimeout(() => {

      setCounter(old=>old+1)
      getdata()
    }, userdata.int_Refresh*1000);
  }, [counter]);
    async function getdata() {
        let response = await api.fetchdata(); 
          setServerdate(response.data.server.dateTime)
         setList(response.data.response.LiveData)
        setLoading(false) 
       
    }

    var running=[]
    var idle=[]
    var halt=[]
    var nogps=[]
     vehicle.forEach(vehicle => {
      list.forEach(element => {
        if(vehicle.Reg_No == element.Reg_No){
          servdate = new Date(serverdate)
          lastupdate = new Date(element.Time)
          lastupdate.setHours(lastupdate.getHours()+5)
          lastupdate.setMinutes(lastupdate.getMinutes()+30)
          diff = servdate - lastupdate
          offint = vehicle.Off_Int == null ? 90 : vehicle.Off_Int
          if(diff<offint*60000){
            if(route.params.name=='Running Vehicle' && element.Igni>0&&element.Speed>2 ){
                running = [...running,element]

            }  
            else if(route.params.name=='Idle Vehicle' && element.Igni>0&&element.Speed<2 ){
                idle = [...idle,element]
            }  
            else if(route.params.name=='Halt Vehicle' &&  element.Igni<1&&element.Speed<2){
                halt = [...halt,element]
            }  else{
                nogps={...nogps,nogps}
            }
 }
        }
        
      });
    });
 
    
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                     <Loader loading={loading} navigation={navigation} />
                     {route.params.name=='Running Vehicle'?running.length>0&&running.length<2?
                      <IndividualMap list={running} navigation={navigation}/>:
                      <Mapview list={running} navigation={navigation}/>:
                     route.params.name=='Idle Vehicle'?idle.length>0&&idle.length<2?
                     <IndividualMap list={running} navigation={navigation}/>:
                     <Mapview list={idle} navigation={navigation}/> :                     
                     route.params.name=='Halt Vehicle'? halt.length>0&&halt.length<2?
                     <IndividualMap list={halt} navigation={navigation}/>:
                     <Mapview list={halt} navigation={navigation}/>:
                     nogps.length>0&&nogps.length<2?
                     <IndividualMap list={running} navigation={navigation}/>:
                     <Mapview list={nogps} navigation={navigation}/> }
                    
                     



   <MapTopButton getdata={getdata} navigation={navigation} setButtonVisible={setButtonVisible} buttonVisible={buttonVisible}/>

{buttonVisible?<MapButton screen='Tracking Vehicle sub' navigation={navigation} list={list}  serverdate={serverdate} sub={route.params.name} data={route.params.name=='Running Vehicle'?running:route.params.name=='Idle Vehicle'?idle:route.params.name=='Halt Vehicle'?halt:nogps}/>:<View></View>}

    </View>
  );
}

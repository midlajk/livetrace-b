import React,{useState,useEffect}  from 'react';
import {  View } from 'react-native';
import * as api from "../services/auth";
import Loader from '../Components/Loader';
import MapButton from '../Components/mapscreen_button';
import MapTopButton from '../Components/maptopscreen';
import Mapview from '../Components/MapView';
import b from "../configuration/Datahandler";
import IndividualMap from '../Components/individualmapview';

export default function HomeScreen(props) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [serverdate, setServerdate] = useState('');
  const [vehicle, setvehicle] = useState([]);
  const [userdata, setUserdata] = useState({});
  const [counter, setCounter] = useState(0);
  const [datas, setData] = useState([]);

var listofdata=[]
useEffect(() => {
   setLoading(true) 
   setvehicle(b.getVehicle()) 
   setUserdata(b.getUser())  
   getdata()
}, [props.route])

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

    // var elmts = vehicle.filter(f => !list.find( arr1Obj => arr1Obj.Reg_No === f.Reg_No));
    // alldata = elmts
    // const newArr = list.map(obj => {
    //   var veh = vehicle.find( arr1Obj => arr1Obj.Reg_No === obj.Reg_No)
    //   if(veh.length!=0){
    //     var lastupdate = new Date(obj.Time);
    //     var lastupdatestring = new Date(obj.Time);

    //    lastupdate.setMinutes(lastupdate.getMinutes()+330+veh.Gmt_Corr||0);
    //    lastupdatestring.setMinutes(lastupdatestring.getMinutes()+veh.Gmt_Corr||0);
    //     servdate = new Date(serverdate)
    //                 diff = servdate - lastupdate
    //                 offint = veh.Off_Int == null ? 90 : veh.Off_Int
    //                 if(diff<offint*60000){
    //                             trackingVehicle=[...trackingVehicle,{...obj, changedtime: lastupdate} ];
    //                 }else{
    //                   nonTrackingVehicle=[...nonTrackingVehicle,{...obj, changedtime: lastupdate}]
    //                 }
    //   alldata = [...alldata,{...obj, changedtime: lastupdatestring.toLocaleString()}]              
    //   return {...obj, changedtime: lastupdate}

    //   }

    //   return obj;
    // });
    data=[];

    listofdata=list;
          vehicle.forEach(vehicle => {
            found=false
            list.forEach(element => {
              if(vehicle.Reg_No == element.Reg_No){
                var lastupdate = new Date(element.Time);
                var lastupdatestring = new Date(element.Time);
                lastupdate.setMinutes(lastupdate.getMinutes()+330+vehicle.Gmt_Corr||0);
                lastupdatestring.setMinutes(lastupdatestring.getMinutes()+vehicle.Gmt_Corr||0);
                element.changedtime = lastupdatestring.toLocaleString()
                found=true
                data=[...data,element];

              }
              });
              if(!found){
                listofdata=[...listofdata,vehicle ];
                
              }
            })
            
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <Loader loading={loading} navigation={props.navigation} />
               {list.length>0&&list.length<2?<IndividualMap list={list} navigation={props.navigation} />:<Mapview list={list} navigation={props.navigation} />}
    <Mapview list={list} navigation={props.navigation} first={list[0]}/>
   <MapTopButton getdata={getdata} navigation={props.navigation} setButtonVisible={setButtonVisible} buttonVisible={buttonVisible}/>
{buttonVisible?<MapButton screen='mainscreen' navigation={props.navigation} list={data}  serverdate={serverdate} data={listofdata}/>:<View></View>}
    
    </View>
  );
}


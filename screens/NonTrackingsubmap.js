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
  var offline=[];
  var dead=[];
  var nodata=[]
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
    var deadvehicle = [];
    var offline = [];
    var nodata = [];

    vehicle.forEach(vehicle => {
        found=false
      list.forEach(element => {
        if(vehicle.Reg_No == element.Reg_No){
            found=true
          servdate = new Date(serverdate)
          var lastupdate = new Date(element.Time);
          var lastupdatestring = new Date(element.Time);
          lastupdate.setMinutes(lastupdate.getMinutes()+330+vehicle.Gmt_Corr||0);
          lastupdatestring.setMinutes(lastupdatestring.getMinutes()+vehicle.Gmt_Corr||0);
          element.changedtime = lastupdatestring.toLocaleString()
          diff = servdate - lastupdate
          offint = vehicle.Off_Int == null ? 90 : vehicle.Off_Int
          dead = vehicle.Dead_Int == null ? 180 : vehicle.Dead_Int
          if(diff>offint*60000){

            if(diff>dead*60000){
                deadvehicle=[...deadvehicle,element ];
            }else{
                offline=[...offline,element ];

            }

          }
          
        }
        
      });
      if(!found){
        nodata=[...nodata,vehicle ];

      }
    });
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                     <Loader loading={loading} navigation={navigation} />
                     {route.params.name=='Offline Vehicle'?offline.length>0&&offline.length<2?
                     <IndividualMap list={offline} navigation={navigation}/>:<Mapview list={offline} navigation={navigation}/>
                     :
                     route.params.name=='Dead Vehicle'?deadvehicle.length>0&&deadvehicle.length<2?
                     <IndividualMap list={deadvehicle} navigation={navigation}/>:<Mapview list={deadvehicle} navigation={navigation}/>
                     :<Mapview list={[]} navigation={navigation}/> }
                     


   <MapTopButton getdata={getdata} navigation={navigation} setButtonVisible={setButtonVisible} buttonVisible={buttonVisible}/>
   {buttonVisible?<MapButton screen='NonTracking Vehicle Sub' navigation={navigation} list={list}  serverdate={serverdate} sub={route.params.name} data={route.params.name=='Offline Vehicle'?offline:route.params.name=='Dead Vehicle'?deadvehicle:nodata}/>:<View></View>}

    </View>
  );
}

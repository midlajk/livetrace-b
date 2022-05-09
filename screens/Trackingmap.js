import React,{useState,useEffect} from  'react';
import { View } from 'react-native';
import * as api from "../services/auth";
import Loader from '../Components/Loader';
import MapButton from '../Components/mapscreen_button';
import MapTopButton from '../Components/maptopscreen';
import Mapview from '../Components/MapView';

export default function Tracking({navigation}) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);

  useEffect(() => {
    getdata()
    setTimeout(() => {
      getdata()
  }, 100);
  }, []);
   
    async function getdata() {
      setLoading(true) 
        let response = await api.fetchdata(); 
        const filteredData = response.data.response.LiveData.filter(x =>
          x.Igni==1)
         setList(filteredData)
        setLoading(false) 

    }
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                     <Loader loading={loading} navigation={navigation} />
                     <Mapview list={list} navigation={navigation}/>


   <MapTopButton getdata={getdata} navigation={navigation} setButtonVisible={setButtonVisible} buttonVisible={buttonVisible}/>

{buttonVisible?<MapButton screen='Tracking Vehicle' navigation={navigation}/>:<View></View>}

    </View>
  );
}

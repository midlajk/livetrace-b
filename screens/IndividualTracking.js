import React,{useState,useEffect} from  'react';
import { Text, View ,TouchableOpacity,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView, { PROVIDER_GOOGLE, Marker,Callout } from 'react-native-maps';
import * as api from "../services/auth";
import Loader from '../Components/Loader';
import MapTopButton from '../Components/maptopscreen';
import Mapview from '../Components/MapView';
import BotomButton from '../Components/seperatetracking_bottom';

export default function Tracking({navigation,route}) {
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
          x.Reg_No==route.params.vehicle)
         setList(filteredData)
        setLoading(false) 

    }
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                     <Loader loading={loading} navigation={navigation} />
                     <Mapview list={list} navigation={navigation} />
                     <MapTopButton getdata={getdata} navigation={navigation} setButtonVisible={setButtonVisible} buttonVisible={buttonVisible}/>

                     {buttonVisible?<BotomButton number={list} navigation={navigation}/>:<View></View>}
    
     
    </View>
  );
}

const styles = StyleSheet.create({
 

 
  
})

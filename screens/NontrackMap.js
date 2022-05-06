import React,{useState,useEffect} from  'react';
import { Text, View ,TouchableOpacity,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView, { PROVIDER_GOOGLE, Marker,Callout } from 'react-native-maps';
import * as api from "../services/auth";
import Loader from '../Components/Loader';
import MapButton from '../Components/mapscreen_button';
import MapTopButton from '../Components/maptopscreen';
export default function NonTracking({navigation}) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getdata()
  }, []);
   
    async function getdata() {
      setLoading(true) 
        let response = await api.fetchdata(); 
        const filteredData = response.data.response.LiveData.filter(x =>
          x.Igni==0)
         setList(filteredData)
        setLoading(false) 

    }
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                     <Loader loading={loading} navigation={navigation} />
          <View style={styles.container}>
          <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
        latitude:10.850516,
        longitude: 76.271080,
        latitudeDelta: 7,
        longitudeDelta: 1,
      }}
     >
       {list.map((marker,index)=>{
       return(
       <Marker key={index}  coordinate ={{
        latitude: marker.Lat,
        longitude: marker.Lon,
       }}
       image={require('../Assets/sport-car.png')}
       title={marker.Reg_No}
       description="Tap here to track live"/>
           
       )
     })}
     </MapView>
   </View> 
   <MapTopButton getdata={getdata} navigation={navigation}/>

    <MapButton screen='Non-Tracking Vehicle' navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
 
  button: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#005eaa',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 100,
      right: 10,
      elevation: 5,
  },
  refresh: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#d1d2d4',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 100,
    right: 10,
  
},
full: {
  width: 40,
  height: 40,
  borderRadius: 10,
  backgroundColor: '#d1d2d4',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 50,
  right: 10,

},info: {
  width: 40,
  height: 40,
  borderRadius: 10,
  backgroundColor: '#005eaa',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 150,
  right: 10,

},
container: {
  ...StyleSheet.absoluteFillObject,
  height: '100%',
  width: 400,
  justifyContent: 'flex-end',
  alignItems: 'center',
},
map: {
  ...StyleSheet.absoluteFillObject,
},
bubble: {
  flexDirection: 'column',
  alignSelf: 'flex-start',
  backgroundColor: '#fff',
  borderRadius: 6,
  borderColor: '#000',
  borderWidth: 0.5,
  padding: 15,
  width: 150,
  height:'auto',
  elevation:7
},
name: {
  fontSize: 16,
  marginBottom: 5,
},
arrow: {
  backgroundColor: 'transparent',
  borderColor: 'transparent',
  borderTopColor: '#fff',
  borderWidth: 16,
  alignSelf: 'center',
  marginTop: -32,
},
arrowBorder: {
  backgroundColor: 'transparent',
  borderColor: 'transparent',
  borderTopColor: '#007a87',
  borderWidth: 16,
  alignSelf: 'center',
  marginTop: -0.5,
  // marginBottom: -15
},
})

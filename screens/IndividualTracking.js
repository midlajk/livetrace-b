import React,{useState,useEffect} from  'react';
import { Text, View ,TouchableOpacity,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView, { PROVIDER_GOOGLE, Marker,Callout } from 'react-native-maps';
import * as api from "../services/auth";
import Loader from '../Components/Loader';
export default function Tracking({navigation}) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getdata()
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
                     <Loader loading={loading} />
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
       <MapView.Marker key={index}  coordinate ={{
        latitude: marker.Lat,
        longitude: marker.Lon,
       }}
       image={require('../Assets/sport-car.png')}
       title='marker.Lon'
       description="Something here">
              <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>{marker.Reg_No}</Text>
   
      <Text>Driver:{marker.Nick}</Text>
      <Text>Vehicle:{marker.V_Type}</Text>
      <Text>Speed:{marker.Speed}</Text>
      <Text>Distance:{marker.Dist}</Text>
                </View>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
              </View>
            </Callout>
       </MapView.Marker>
       )
     })}
     </MapView>
   </View> 
      <TouchableOpacity
                  style={styles.full}

                > 
                
                    <FontAwesome5
                                name={'square'}
                                size={25}
                                color={'#fff'}
                           
                            />

                 </TouchableOpacity>
                 <TouchableOpacity
                  style={styles.refresh}

                > 
                
                    <FontAwesome5
                                name={'refresh-ccw'}
                                size={20}
                                color={'#fff'}
                           
                            />

                 </TouchableOpacity>
                 <TouchableOpacity
                  style={styles.info}

                > 
                
                    <FontAwesome5
                                name={'info'}
                                size={20}
                                color={'#fff'}
                           
                            />

                 </TouchableOpacity>
      <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    
                    navigation.navigate('Tracking Screen',{ name: 'Tracking Vehicle' });
                }}
                > 
                 <Icon
                                name={'bus-multiple'}
                                size={30}
                                color={'#fff'}
                           
                            />
                 </TouchableOpacity>
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
  
})

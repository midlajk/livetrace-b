import React,{useState,useRef,useEffect,createRef,Platform} from 'react';
import {StyleSheet, View, TouchableHighlight,Text} from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker,Callout,AnimatedRegion } from 'react-native-maps';
import Markericon from './markericon';
export default function CarMarker({car, onOpen}) {
    const [marker, setMarker] = useState(null);
    const [coordinate, setCoordinate] = useState(
      new AnimatedRegion({
        latitude: car.Lat || 10.8505,
        longitude: car.Lon || 76.2711,
        latitudeDelta: .3,
        longitudeDelta: .3,
      }),
    );
  
    useEffect(() => {
      animateMarker();
    }, [car]);
  
    const animateMarker = () => {
      const newCoordinate = {
        latitude: car.Lat,
        longitude: car.Lon,
        latitudeDelta: .5,
        longitudeDelta: .5,
      };
  
      marker.animateMarkerToCoordinate(newCoordinate, 15000);

    };
  
    return (
      <Marker.Animated
        key={car.DeviceID}
        ref={marker => {
          setMarker(marker);
        }}
        coordinate={coordinate}
       >
               <Markericon vehicle={car.V_Type} ignition={car.Igni} speed={car.Speed} />
      </Marker.Animated>
    );
  }
  
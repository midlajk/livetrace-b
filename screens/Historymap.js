import React, { Component,useRef } from 'react';
import { Dimensions, StyleSheet,Image } from 'react-native';
import MapView,{Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
 import {Data} from './data'
 import MapTopButton from '../Components/maptopscreen';
import BotomButton from '../Components/historybottom';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = .0001;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
 
const GOOGLE_MAPS_APIKEY = 'AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ';
 
class Example extends Component {
 
  constructor(props) {
    super(props);
 
    // AirBnB's Office, and Apple Park
    this.state = {

      buttonVisible:true
    };
    

    this.mapView = null;
  }
 
  onMapPress = (e) => {
    this.setState({
      coordinates: [
        ...this.state.coordinates,
        e.nativeEvent.coordinate,
      ],
    });
  }
   getdata=()=> {
      

  }
  render() {
    
    return (

      <MapView
      initialRegion={{
        latitude: this.props.data[1].latitude,
        longitude: this.props.data[1].longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}
        style={StyleSheet.absoluteFill}
        ref={c => this.mapView = c}
        onPress={this.onMapPress}
      >
        <MapView.Marker  coordinate ={{latitude: this.props.data[0].latitude,
            longitude:this.props.data[0].longitude}} 
             />   
          <MapView.Marker  coordinate ={{latitude: this.props.data[this.props.i].latitude,
            longitude:this.props.data[this.props.i].longitude}} 

             >
               <Image
        source={require('../Assets/vehicle_icon/car_2.png')}
        style={{width: 26, height: 28}}
        // {selected?styles.iconstyle_selected:styles.iconstyle}
        resizeMode="contain"
        />
               </MapView.Marker>
            <MapView.Marker  coordinate ={{latitude: this.props.data[this.props.data.length-1].latitude,
            longitude:this.props.data[this.props.data.length-1].longitude}} 
             />    
        
        <Polyline
        strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
        coordinates={this.props.data}
        strokeColors={[
          '#7F0000',
          '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
          '#B24112',
          '#E5845C',
          '#238C23',
          '#7F0000'
        ]}
        strokeWidth={6}
        
        />
      
      </MapView>
      

    );
  }
}
 
export default Example;
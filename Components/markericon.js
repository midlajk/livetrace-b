
import React, { useState } from "react";
import {  StyleSheet, View,Image } from "react-native";


const App = (props) => {
    const { vehicle,ignition,speed,selected,...attributes} = props;

 
  return (
    <View>
        {vehicle=='Scooter'?
           <Scooter ignition={ignition} speed={speed} selected={selected} />
       :vehicle=='Bus'?
           <Bus ignition={ignition} speed={speed} selected={selected} />
       :vehicle=='Truck'?
           <Truck ignition={ignition} speed={speed} selected={selected} />
       :vehicle=='Car'?
            <Car ignition={ignition} speed={speed} selected={selected} />
       :
           <Taxi ignition={ignition} speed={speed} selected={selected} />
  }
    </View>
  );
};

const styles = StyleSheet.create({
    iconstyle: {width: 26, height: 28},
    // iconstyle_selected: {width: 36, height: 38},

});
function Truck (props){
    const {ignition,speed,selected,...attributes} = props;

    return(
    <View>
        {ignition>0&&speed>2? <Image
        source={require('../Assets/vehicle_icon/truck_2.png')}
        style={styles.iconstyle}
        // {selected?styles.iconstyle_selected:styles.iconstyle}
        resizeMode="contain"
        />
        :
        ignition>0&&speed<2?
        <Image
        source={require('../Assets/vehicle_icon/truck_1.png')}
        style={styles.iconstyle}
        resizeMode="contain"
        />
        :
        ignition<1&&speed<2?
        <Image
        source={require('../Assets/vehicle_icon/truck_0.png')}
        style={styles.iconstyle}
        resizeMode='contain'
        />
        :
        <Image
        source={require('../Assets/vehicle_icon/truck_4.png')}
        style={styles.iconstyle}
        resizeMode="contain"
        />

        }
       
    </View>
    )
    

}
function Bus (props){
    const {ignition,speed,selected,...attributes} = props;

    return(
    <View>
        {ignition>0&&speed>2? <Image
        source={require('../Assets/vehicle_icon/bus_2.png')}
        style={styles.iconstyle}
        resizeMode="contain"
        />
        :
        ignition>0&&speed<2?
        <Image
        source={require('../Assets/vehicle_icon/bus_1.png')}
        style={styles.iconstyle}
        resizeMode="contain"
        />
        :
        ignition<1&&speed<2?
        <Image
        source={require('../Assets/vehicle_icon/bus_0.png')}
        style={styles.iconstyle}
        resizeMode="contain"
        />
        :
        <Image
        source={require('../Assets/vehicle_icon/bus_4.png')}
        style={styles.iconstyle}
        resizeMode="contain"
        />

        }
       
    </View>
    )
    

}
function Taxi (props){
    const {ignition,speed,selected,...attributes} = props;

    return(
    <View>
        {ignition>0&&speed>2? <Image
        source={require('../Assets/vehicle_icon/taxi_2.png')}
        style={styles.iconstyle}
        resizeMode="contain"
        />
        :
        ignition>0&&speed<2?
        <Image
        source={require('../Assets/vehicle_icon/taxi_1.png')}
        style={styles.iconstyle}
        resizeMode="contain"
        />
        :
        ignition<1&&speed<2?
        <Image
        source={require('../Assets/vehicle_icon/taxi_0.png')}
        style={styles.iconstyle}
        resizeMode="contain"
        />
        :
        <Image
        source={require('../Assets/vehicle_icon/taxi_4.png')}
        style={styles.iconstyle}
        resizeMode="contain"
        />

        }
       
    </View>
    )
    

}
function Scooter (props){
    const {ignition,speed,selected,...attributes} = props;

    return(
    <View>
        {ignition>0&&speed>2? <Image
        source={require('../Assets/vehicle_icon/bike_2.png')}
        style={styles.iconstyle}
        resizeMode="contain"
        />
        :
        ignition>0&&speed<2?
        <Image
        source={require('../Assets/vehicle_icon/bike_1.png')}
        style={styles.iconstyle}
        resizeMode="contain"
        />
        :
        ignition<1&&speed<2?
        <Image
        source={require('../Assets/vehicle_icon/bike_0.png')}
        style={styles.iconstyle}
        resizeMode="contain"
        />
        :
        <Image
        source={require('../Assets/vehicle_icon/bike_4.png')}
        style={styles.iconstyle}
        resizeMode="contain"
        />

        }
       
    </View>
    )
    

}
function Car (props){
    const {ignition,speed,selected,...attributes} = props;

    return(
    <View>
        {ignition>0&&speed>2? <Image
        source={require('../Assets/vehicle_icon/truck_2.png')}
        style={styles.iconstyle}
        resizeMode="contain"
        />
        :
        ignition>0&&speed<2?
        <Image
        source={require('../Assets/vehicle_icon/car_1.png')}
        style={styles.iconstyle}
        resizeMode="contain"
        />
        :
        ignition<1&&speed<2?
        <Image
        source={require('../Assets/vehicle_icon/car_0.png')}
        style={styles.iconstyle}
        resizeMode="contain"
        />
        :
        <Image
        source={require('../Assets/vehicle_icon/car_4.png')}
        style={styles.iconstyle}
        resizeMode="contain"
        />

        }
       
    </View>
    )
    

}
export default App;
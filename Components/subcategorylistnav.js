import React,{useState,useRef,useEffect,createRef,Platform} from 'react';
import {StyleSheet, View, TouchableOpacity,Image,Text} from 'react-native';

export default function Navs(props) {
   
    return (
        <View style={{width:'70%'}}>
        <TouchableOpacity
     style={[styles.button,{justifyContent:'center',width:'95%'}]}
     onPress={() => {
     
       props.navigation.navigate('Vehicle Seperate List',{name:'List of all ' + props.sub});
   }}
   > 
{props.sub=='Running Vehicle'?
<Image
            source={require('../Assets/vehicle_icon/car_2.png')}
            style={styles.iconstyle}
            resizeMode="contain"
          />:props.sub=='Idle Vehicle'?
          <Image
            source={require('../Assets/vehicle_icon/car_1.png')}
            style={styles.iconstyle}
            resizeMode="contain"
          />:props.sub=='Halt Vehicle'?
          <Image
            source={require('../Assets/vehicle_icon/car_0.png')}
            style={styles.iconstyle}
            resizeMode="contain"
          />:props.sub=='No Gps'?<Image
          source={require('../Assets/vehicle_icon/car_4.png')}
          style={styles.iconstyle}
          resizeMode="contain"
        />:props.sub=='Offline Vehicle'?
        <Image
            source={require('../Assets/vehicle_icon/car_4.png')}
            style={styles.iconstyle}
            resizeMode="contain"
          />:props.sub=='Dead Vehicle'?
          <Image
            source={require('../Assets/vehicle_icon/car_3.png')}
            style={styles.iconstyle}
            resizeMode="contain"
          />:
          <Image
          source={require('../Assets/vehicle_icon/car_1.png')}
          style={styles.iconstyle}
          resizeMode="contain"
        />

    }
   <Text style={{color:'#fff'}}> List all {props.sub}</Text>
   </TouchableOpacity>
   </View>
    );
  }
  const styles = StyleSheet.create({
    
    button: {
      
      width: '90%',
      height: 38,
      borderRadius:10,
      marginTop:10,
      backgroundColor: '#000',
      elevation: 5,
      flexDirection:'row',
      alignItems: 'center',
      justifyContent:'space-around'
  },
  iconstyle: {width: 26, height: 28,marginRight:5},
  });
  

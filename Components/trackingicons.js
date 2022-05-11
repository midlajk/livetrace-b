// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {StyleSheet, View, Image,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Icons = (props) => {

  return (
    <View style={{width:'90%',backgroundColor:'#000',borderBottomLeftRadius:10,borderBottomRightRadius:10,padding:10}}>
            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-evenly'}}
               onPress={() => {
                  
                props.navigation.navigate('Tracking list sub',{name:'Running Vehicle'});
            }}>
                        <Image
            source={require('../Assets/vehicle_icon/car_2.png')}
            style={styles.iconstyle}
            resizeMode="contain"
          />
          
              <Text style={{color:'#fff',width:'28%'}}>
                Running
              </Text > 
              <Text style={{color:'#fff'}}>
              {props.Running}

              </Text >
              </TouchableOpacity>
             
              <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-evenly'}}
              onPress={() => {
                  
                props.navigation.navigate('Tracking list sub',{name:'Idle Vehicle'});
            }}>
              <Image
            source={require('../Assets/vehicle_icon/car_1.png')}
            style={styles.iconstyle}
            resizeMode="contain"
          />
              <Text style={{color:'#fff',width:'28%'}}>
                 Idle       
              </Text > 
              <Text style={{color:'#fff'}}>
                {props.Idle}
              </Text >
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-evenly'}}
              onPress={() => {
                  
                props.navigation.navigate('Tracking list sub',{name:'Halt Vehicle'});
            }}>
              <Image
            source={require('../Assets/vehicle_icon/car_0.png')}
            style={styles.iconstyle}
            resizeMode="contain"
          />
              <Text style={{color:'#fff',width:'28%'}}>
               Halt
              </Text > 
              <Text style={{color:'#fff'}}>
              {props.Halt}

              </Text >
              </TouchableOpacity>
           
              <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-evenly'}}
               onPress={() => {
                  
                props.navigation.navigate('Tracking list sub',{name:'No Gps'});
            }}>
                
              <Image
            source={require('../Assets/vehicle_icon/car_4.png')}
            style={styles.iconstyle}
            resizeMode="contain"
          />
              <Text style={{color:'#fff',width:'28%'}}>
                No Gps
              </Text > 
              <Text style={{color:'#fff'}}>
                {props.Nogps}
              </Text >
              </TouchableOpacity>
            
            </View>
            
  );
};

export default Icons;

const styles = StyleSheet.create({
    iconstyle: {width: 26, height: 28},
});
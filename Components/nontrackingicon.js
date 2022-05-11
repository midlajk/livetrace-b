// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {StyleSheet, View, Image,Text,TouchableOpacity} from 'react-native';

const NontrackingIcons = (props) => {

  return (
    <View style={{width:'90%',backgroundColor:'#000',borderBottomLeftRadius:10,borderBottomRightRadius:10,padding:10}}>
            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-evenly'}}
             onPress={() => {
                  
                props.navigation.navigate('NonTracking list sub',{name:'Offline Vehicle'});
            }}>
                        <Image
            source={require('../Assets/vehicle_icon/car_4.png')}
            style={styles.iconstyle}
            resizeMode="contain"
          />
              <Text style={{color:'#fff',width:'28%'}}>
                Offline
              </Text > 
              <Text style={{color:'#fff'}}>
                {props.offlinecount-props.deadcount}
              </Text >
              </TouchableOpacity>
             
              <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-evenly'}}
                onPress={() => {
                  
                    props.navigation.navigate('NonTracking list sub',{name:'No data'});
                }}>
              <Image
            source={require('../Assets/vehicle_icon/car_1.png')}
            style={styles.iconstyle}
            resizeMode="contain"
          />
              <Text style={{color:'#fff',width:'28%'}}>
                 No Data       
              </Text > 
              <Text style={{color:'#fff'}}>
                {props.nodata}
              </Text >
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-evenly'}}
              onPress={() => {
                  
                props.navigation.navigate('NonTracking list sub',{name:'Dead Vehicle'});
            }}>
              <Image
            source={require('../Assets/vehicle_icon/car_3.png')}
            style={styles.iconstyle}
            resizeMode="contain"
          />
              <Text style={{color:'#fff',width:'28%'}}>
               Device Dead
              </Text > 
              <Text style={{color:'#fff'}}>
                {props.deadcount}
              </Text >
              </TouchableOpacity>
           
            
            
            </View>
            
  );
};

export default NontrackingIcons;

const styles = StyleSheet.create({
    iconstyle: {width: 26, height: 28},
});
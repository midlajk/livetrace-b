import React,{useEffect} from 'react';
import { StyleSheet,Text,View,Image,TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Report from '../screens/Report';
import Home from '../screens/Home';
import Trackingmap from '../screens/Trackingmap';
import NontrackMap from '../screens/NontrackMap';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

 

const Tabs =  () => {
     
    async function checkuser() {
        return await AsyncStorage.getItem('email').then((response) => {
            return response
        });
     }
      

    useEffect(() => {
        checkuser()
        }, [])

   

        return(

        <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: '#fff',
     }}
     screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarHideOnKeyboard: true,
       
          tabBarStyle:{
              
          position:'absolute',
          bottom:12,
          left:13,
          right:13,
          borderRadius:16,
          backgroundColor:"#000",
          height:60,
          elevation: 0, 

          }

      }}
        >
    <Tab.Screen name={'Home'} component={Home} 
         options={{
    
          tabBarIcon: ({ focused }) => (
            <View style={{alignItems:'center',justifyContent:"center"}}>
                
                    <Text style={{color:focused?'#005eaa':"#fff", fontSize:16}}>
                    All Vehicles
                    </Text>
            </View>
        
        ),
    }}
    /> 
    <Tab.Screen name={'Tracking'} component={Trackingmap} 
         options={{
         tabBarIcon: ({ focused }) => (
            <View style={{alignItems:'center',justifyContent:"center"}}>
                
                    <Text style={{color:focused?'#005eaa':"#fff", fontSize:16}}>
                    Tracking
                    </Text>
            </View>
        
        ),
    }}
    />      
   
    <Tab.Screen name={'Non-Tracking'} component={NontrackMap} 
    options={{
        tabBarIcon: ({ focused }) => (
            <View style={{alignItems:'center',justifyContent:"center"}}>
                
                    <Text style={{color:focused?'#005eaa':"#fff", fontSize:16}}>
                    Non Tracking
                    </Text>
            </View>
        
        ),
    }}
    />
     
        </Tab.Navigator>
    )
}

export default Tabs;

const style = StyleSheet.create({
    
})
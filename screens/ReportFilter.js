import  React,{useState,useEffect} from 'react';
import { Text, View,TouchableOpacity,StyleSheet,TextInput,Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconb from 'react-native-vector-icons/MaterialCommunityIcons';

import DropDown from '../Components/dropdown';


export default function Notification({navigation,route}) {
   
  return (
    <View style={{ flex: 1,alignItems: 'center',backgroundColor:'#dedfe0' }}>
        <View style={styles.header}>
        {route.params.icontype == 'Icon' ?
        <Icon
        style={{marginRight:20}}
                                name={route.params.icon}
                                size={40}
                                color={'#000'}
                           
                            />
        :
        <Iconb
        style={{marginRight:20}}
                                name={route.params.icon}
                                size={40}
                                color={'#000'}
                           
                            />
        }
            <Text >
                    {route.params.name}
            </Text>
        </View>
        <View style={{flexDirection:'row',margin:10,flexWrap:'wrap',justifyContent:'space-around',}}>

                    <TouchableOpacity style={styles.datebutton}>
                        <Text> Last Day </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.datebutton}>
                    <Text> Last Week </Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.datebutton}>
                <Text> Last Month </Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.datebutton}>
                <Text> Custom Range  </Text>

                </TouchableOpacity>

    </View>
   
    <View style={styles.datecard}>
        <View style={{width:'100%',alignItems:'center',padding:5}}>
            <Text style={{color:'#000',fontSize:17}}>
            Selected Date
        </Text>
        </View>
    
        <View style={{flex:3,paddingLeft:10}}>
            <Text style={{fontSize:16,fontWeight:'600',marginBottom:10}}>
            From Date
        </Text>
        <Text style={{fontSize:16,fontWeight:'600',}}>
            To Date
        </Text>
        </View>
        
        <View style={{flex:5,paddingLeft:10}}>
        <Text style={{fontSize:16,marginBottom:10}}>
        Thursday, 28 April 2022
                </Text>
        <Text style={{fontSize:16}}>
        Thursday, 28 April 2022
        </Text>
        </View>
        
    </View>
    <View style={{flexDirection:'row',marginTop:30,width:'90%'}}>
   
        
        <View style={{flex:7}}>
      <DropDown/>
        </View>
        
    </View>
    <TouchableOpacity
                  style={styles.button}
                > 
                
                   <Text style={{color:'#fff'}}>Generate Report</Text>

                 </TouchableOpacity>
               
    </View>
  );
}

const styles = StyleSheet.create({
    datebutton:{
        width:'45%',height:40,backgroundColor:'#fff',borderRadius:15,marginBottom:10,alignItems:'center',justifyContent:'center',elevation:3
    },
    header:{width:'90%',height:70,backgroundColor:'#fff',marginTop:30,borderRadius:15,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingLeft:20,elevation:3},
    datecard:{flexDirection:'row',width:'90%',justifyContent:'flex-start',backgroundColor:'#fff',borderRadius:10,padding:10,flexWrap:'wrap',elevation:3},
    button: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        elevation: 5,
    },
    
})

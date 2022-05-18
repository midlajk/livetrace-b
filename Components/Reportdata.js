import React,{useState,useEffect} from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,ScrollView,FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import * as api from "../services/auth";
import Loader from '../Components/Loader';
import b from "../configuration/Datahandler";
import {Data} from './data'
import Icon from 'react-native-vector-icons/Ionicons';
import Iconb from 'react-native-vector-icons/MaterialCommunityIcons';


export default function TrackingReport(params) {

  return (
    <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>

                <FlatList
                data={params.data}
                renderItem={({ item }) => (

                <View style={styles.shadow}>
               <View style={styles.button}
              
              >
        
            
                    <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>

                    <Text style={styles.text}>Date And Time : </Text>
                      <Text style={styles.text}>{item.Time}</Text>
                      <Text style={styles.text}>Address  </Text>
                      <Text style={styles.text}>Kannur , India</Text>
                      <Text style={styles.text}>Cumulative Distance (Kms)</Text>
                      <Text style={styles.text}>0 Kms</Text>
                      <Text style={styles.text}>Speed (km/Hr</Text>
                      <Text style={styles.text}>0 Kmph</Text>
       
                      <Text style={styles.text}>Ignition Status</Text>
                      <Text style={styles.text}>OFF</Text>
       
                      
                        
                        </View>
              
               </View>
              </View>
                )}
                keyExtractor={(item, Reg_No) => Reg_No.toString()}/>
    

  </View>
  );
       }

export  function Consolidted(params) {

        return (
          <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
      
                      <FlatList
                      data={params.data}
                      renderItem={({ item }) => (
      
                      <View style={styles.shadow}>
                     <View style={styles.button}
                    
                    >
              
                  
                          <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
      
                          <Text style={styles.text}>Date And Time : </Text>
                            <Text style={styles.text}>{item.Time}</Text>
                            <Text style={styles.text}>Address  </Text>
                            <Text style={styles.text}>Kannur , India</Text>
                            <Text style={styles.text}>Cumulative Distance (Kms)</Text>
                            <Text style={styles.text}>0 Kms</Text>
                            <Text style={styles.text}>Speed (km/Hr</Text>
                            <Text style={styles.text}>0 Kmph</Text>
             
                            <Text style={styles.text}>Ignition Status</Text>
                            <Text style={styles.text}>OFF</Text>
             
                            
                              
                              </View>
                    
                     </View>
                    </View>
                      )}
                      keyExtractor={(item, Reg_No) => Reg_No.toString()}/>
          
      
        </View>
        );
             }
export  function ADReport(params) {

                return (
                  <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
                <FlatList
                      data={params.data}
                      renderItem={({ item }) => (
      
                      <View style={styles.shadow}>
                     <View style={styles.button}
                    
                    >
              
                  
                          <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
      
                          <Text style={styles.text}>Date And Time : </Text>
                            <Text style={styles.text}>{item.Time}</Text>
                            <Text style={styles.text}>Address  </Text>
                            <Text style={styles.text}>Kannur , India</Text>
                            <Text style={styles.text}>Analogue-1</Text>
                            <Text style={styles.text}>{item.A1}</Text>
                            <Text style={styles.text}>Digital-1</Text>
                            <Text style={styles.text}>{item.D1}</Text>
     
             
                            
                              
                              </View>
                    
                     </View>
                    </View>
                      )}
                      keyExtractor={(item, Reg_No) => Reg_No.toString()}/>
          
              
                </View>
                );
}
export  function CurrentSummary(params) {

    return (
      <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
  
  
    </View>
    );
}
export  function Halt(params) {

    return (
      <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
  
  
    </View>
    );
}
export  function Idiling(params) {

    return (
      <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
  
  
    </View>
    );
}
export  function IgnitionON_off(params) {

    return (
      <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
  
  
    </View>
    );
}
export  function OverSpeed(params) {

    return (
      <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
  
  
    </View>
    );
}
export  function Panic(params) {

    return (
      <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
  
  
    </View>
    );
}
export  function Trip(params) {

    return (
      <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
  
  
    </View>
    );
}


      
const styles = StyleSheet.create({
   
    text: {
         color:'#000',
         fontSize:14,
      width:'50%',
      textAlign:'center'
       },
       textb: {
        color:'#fff',
        fontSize:16,
     
      },
       button: {
         width:'90%',borderRadius:16,backgroundColor:'#fff',justifyContent:'center',alignItems:'center',
         padding:20,
         flexDirection:'row',justifyContent:'space-between',
         shadowColor:'#000',
            shadowOffset:{
                width:0,
                height:10
            },
            shadowOpacity:0.25,
            shadowRadius:3.5,
            elevation:6,
        },
        shadow:{
            
            alignItems:'center',margin:5
        },  
      
   
  })
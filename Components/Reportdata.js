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
          <View style={{ flex: 1,marginTop:20}}>
      
                  
      
                      <View style={styles.shadow}>
                     <View style={styles.button}
                    
                    >
              
                  
                          <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'flex-start'}}>
      
                          <Text style={styles.textc}>Group Name: </Text>
                            <Text style={styles.textc}></Text>
                            <Text style={styles.textc}>Start Time  </Text>
                            <Text style={styles.textc}>  </Text>

                            <Text style={styles.textc}>Start Address  </Text>
                            <Text style={styles.textc}>Kannur , India</Text>
                            <Text style={styles.textc}>End Time  </Text>
                            <Text style={styles.textc}>  </Text>

                            <Text style={styles.textc}>End Address  </Text>
                            <Text style={styles.textc}>Kannur , India</Text>
                            <Text style={styles.textc}>Total Distance (Kms)</Text>
                            <Text style={styles.textc}>0 Kms</Text>
                            <Text style={styles.textc}>Average Speed (km/Hr)</Text>
                            <Text style={styles.textc}>0 Kmph</Text>
                            <Text style={styles.textc}>Maximum Speed (km/Hr)</Text>
                            <Text style={styles.textc}>0 Kmph</Text>
             
                            
                              
                              </View>
                    
                     </View>
                    </View>
                     
      
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
      <View style={{ flex: 1,marginTop:20}}>
      
                  
      
      <View style={styles.shadow}>
     <View style={styles.button}
    
    >

  
          <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'flex-start'}}>

          <Text style={styles.textc}>Day Start Time: </Text>
            <Text style={styles.textc}></Text>
            <Text style={styles.textc}>Day Start Address  </Text>
            <Text style={styles.textc}>  </Text>

            <Text style={styles.textc}>Current Address  </Text>
            <Text style={styles.textc}>Kannur , India</Text>
            <Text style={styles.textc}>Current Speed </Text>
            <Text style={styles.textc}>  </Text>

            <Text style={styles.textc}>Last Tracked Time </Text>
            <Text style={styles.textc}></Text>
            <Text style={styles.textc}>Distance Covered Today</Text>
            <Text style={styles.textc}>0 Kms</Text>
          

            
              
              </View>
    
     </View>
    </View>
     

</View>
    );
}
export  function Halt(params) {

    return (
      <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
      <FlatList
            data={params.data}
            renderItem={({ item }) => (

            <View style={styles.shadow}>
           <View style={styles.button}
          
          >
    
        
                <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>

                <Text style={styles.text}>Start Time : </Text>
                  <Text style={styles.text}>{item.Time}</Text>
                  <Text style={styles.text}>Start Address  </Text>
                  <Text style={styles.text}>Kannur , India</Text>
                  <Text style={styles.text}>End Time</Text>
                  <Text style={styles.text}>{item.A1}</Text>
                  <Text style={styles.text}>End Address</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                  <Text style={styles.text}>Total Ignition Off Time</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                  
                    
                    </View>
          
           </View>
          </View>
            )}
            keyExtractor={(item, Reg_No) => Reg_No.toString()}/>

    
      </View>
    );
}
export  function Idiling(params) {

    return (
      <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
      <FlatList
            data={params.data}
            renderItem={({ item }) => (

            <View style={styles.shadow}>
           <View style={styles.button}
          
          >
    
        
                <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>

                <Text style={styles.text}>Start Time : </Text>
                  <Text style={styles.text}>{item.Time}</Text>
                  <Text style={styles.text}>Start Address  </Text>
                  <Text style={styles.text}>Kannur , India</Text>
                  <Text style={styles.text}>End Time</Text>
                  <Text style={styles.text}>{item.A1}</Text>
                  <Text style={styles.text}>End Address</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                  <Text style={styles.text}> Total Idle Time</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                  
                    
                    </View>
          
           </View>
          </View>
            )}
            keyExtractor={(item, Reg_No) => Reg_No.toString()}/>

    
      </View>
    );
}
export  function IgnitionON_off(params) {

    return (
      <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
      <FlatList
            data={params.data}
            renderItem={({ item }) => (

            <View style={styles.shadow}>
           <View style={styles.button}
          
          >
    
        
                <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
                <Text style={styles.text}>User Name : </Text>
                  <Text style={styles.text}></Text>
                <Text style={styles.text}>Start Time : </Text>
                  <Text style={styles.text}>{item.Time}</Text>
                  <Text style={styles.text}>Start Address  </Text>
                  <Text style={styles.text}>Kannur , India</Text>
                  <Text style={styles.text}>End Time</Text>
                  <Text style={styles.text}>{item.A1}</Text>
                  <Text style={styles.text}>End Address</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                  <Text style={styles.text}>Alert Duration</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                  <Text style={styles.text}>Total Distance</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                  <Text style={styles.text}>Total Runing Time</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                  <Text style={styles.text}>Average Speed</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                  <Text style={styles.text}>Total Idling Time</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                  <Text style={styles.text}>Total Overspeed Distance</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                  <Text style={styles.text}>Idle Percentage</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                  <Text style={styles.text}>Max Speed</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                    </View>
          
           </View>
          </View>
            )}
            keyExtractor={(item, Reg_No) => Reg_No.toString()}/>

    
      </View>
    );
}
export  function OverSpeed(params) {

    return (
      <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
      <FlatList
            data={params.data}
            renderItem={({ item }) => (

            <View style={styles.shadow}>
           <View style={styles.button}
          
          >
    
        
                <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>

                <Text style={styles.text}>Username : </Text>
                  <Text style={styles.text}>{item.Time}</Text>
                  <Text style={styles.text}>Start Time : </Text>
                  <Text style={styles.text}>{item.Time}</Text>
                  <Text style={styles.text}>Start Address  </Text>
                  <Text style={styles.text}>Kannur , India</Text>
                  <Text style={styles.text}>End Time</Text>
                  <Text style={styles.text}>{item.A1}</Text>
                  <Text style={styles.text}>End Address</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                  <Text style={styles.text}> Alert Duration</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                  
                  <Text style={styles.text}> Total Overspeed Distance</Text>
                  <Text style={styles.text}>{item.D1}</Text>

                  <Text style={styles.text}> Maximum Speed</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                  <Text style={styles.text}> Speed Limit</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                    </View>
          
           </View>
          </View>
            )}
            keyExtractor={(item, Reg_No) => Reg_No.toString()}/>

    
      </View>
    );
}
export  function Panic(params) {

    return (
      <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
      <FlatList
            data={params.data}
            renderItem={({ item }) => (

            <View style={styles.shadow}>
           <View style={styles.button}
          
          >
    
        
                <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>

                <Text style={styles.text}>Username : </Text>
                  <Text style={styles.text}>{item.Time}</Text>
                  <Text style={styles.text}>Start Time : </Text>
                  <Text style={styles.text}>{item.Time}</Text>
                  <Text style={styles.text}>Start Address  </Text>
                  <Text style={styles.text}>Kannur , India</Text>
                  <Text style={styles.text}>End Time</Text>
                  <Text style={styles.text}>{item.A1}</Text>
                  <Text style={styles.text}>End Address</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                  <Text style={styles.text}> Alert Duration</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                  
                  <Text style={styles.text}> Total Alert Distance</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                    </View>
          
           </View>
          </View>
            )}
            keyExtractor={(item, Reg_No) => Reg_No.toString()}/>

    
      </View>
    );
}
export  function Trip(params) {

    return (
      <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
      <FlatList
            data={params.data}
            renderItem={({ item }) => (

            <View style={styles.shadow}>
           <View style={styles.button}
          
          >
    
        
                <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>

                <Text style={styles.text}>Username : </Text>
                  <Text style={styles.text}>{item.Time}</Text>
                  <Text style={styles.text}>Start Time : </Text>
                  <Text style={styles.text}>{item.Time}</Text>
                  <Text style={styles.text}>Start Address  </Text>
                  <Text style={styles.text}>Kannur , India</Text>
                  <Text style={styles.text}>End Time</Text>
                  <Text style={styles.text}>{item.A1}</Text>
                  <Text style={styles.text}>End Address</Text>
                  <Text style={styles.text}>{item.D1}</Text>
 
                  <Text style={styles.text}> Total Distance</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                  <Text style={styles.text}> Total Running Time</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                  <Text style={styles.text}> Average Speed</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                  <Text style={styles.text}> Total Idling Time</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                  <Text style={styles.text}> Idle(%)</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                  <Text style={styles.text}> Max Speed</Text>
                  <Text style={styles.text}>{item.D1}</Text>
                    </View>
          
           </View>
          </View>
            )}
            keyExtractor={(item, Reg_No) => Reg_No.toString()}/>

    
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
       textc: {
        color:'#000',
        fontSize:14,
     width:'50%',
     textAlign:'center',
     marginTop:10
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
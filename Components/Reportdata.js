import React,{useState,useEffect} from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,ScrollView,FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Loader from '../Components/Loader';
import b from "../configuration/Datahandler";
import {Data} from './data'
import Icon from 'react-native-vector-icons/Ionicons';
import Iconb from 'react-native-vector-icons/MaterialCommunityIcons';
import * as api from "../services/auth";


export default function TrackingReport(props) {
  const [vehicle, setvehicle] = useState([]);
 

  async function getdata(){
  setvehicle([])
  props.setLoading(true) 
  let items = props.data;
  let i = 0;
  await new Promise(async (resolve, reject) => {
  try {
      if (items.length == 0) return resolve();
      let funSync = async () => {
          await setdata(items[i]);
          i++;
          if (i == items.length) 
          { 
            props.setLoading(false)
            resolve();
          }

          else funSync();
      }
      funSync();
  } catch (e) {
      reject(e);
  }
});
  
   
          

} 
function setdata(props){
      props.Speed==null? '':
          result = fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+props.latitude+`,`+props.longitude+`&key=AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ`)
          .then(res => res.json())
          .then((json) => {
            props.address = json.results[0].formatted_address.split(' ').slice(1,20)
              
          })
          setvehicle(old=>[...old,props])
    }
useEffect(() => {
  props.setLoading(true)
 getdata()
 setTimeout(() => {
  getdata()
 }, 3000);

}, [1]);
 
  return (
    <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>

                <FlatList
                data={vehicle}
                renderItem={({ item }) => (

                <View style={styles.shadow}>
               <View style={styles.button}
              
              >
        
            
                    <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>

                    <Text style={styles.text}>Date And Time : </Text>
                      <Text style={styles.text}>{item.Time}</Text>
                      <Text style={styles.text}>Address  </Text>
                      <Text style={styles.text}>{item.address}</Text>
                      <Text style={styles.text}>Cumulative Distance (Kms)</Text>
                      <Text style={styles.text}>{item.Dist}</Text>
                      <Text style={styles.text}>Speed (km/Hr</Text>
                      <Text style={styles.text}>{item.Speed}</Text>
       
                      <Text style={styles.text}>Ignition Status</Text>
                      <Text style={styles.text}>{item.Igni==1?'Online':'Offline'}</Text>
       
                      
                        
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
export  function ADReport(props) {
      const [vehicle, setvehicle] = useState([]);
 

    async function getdata(){
    setvehicle([])
    props.setLoading(true) 
    let items = props.data;
    let i = 0;
    await new Promise(async (resolve, reject) => {
    try {
        if (items.length == 0) return resolve();
        let funSync = async () => {
            await setdata(items[i]);
            i++;
            if (i == items.length) 
            { 
              props.setLoading(false)
              resolve();
            }

            else funSync();
        }
        funSync();
    } catch (e) {
        reject(e);
    }
});
    
     
            
  
  } 
  function setdata(props){
        props.Speed==null? '':
            result = fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+props.latitude+`,`+props.longitude+`&key=AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ`)
            .then(res => res.json())
            .then((json) => {
              props.address = json.results[0].formatted_address.split(' ').slice(1,20)
                
            })
            setvehicle(old=>[...old,props])
      }
  useEffect(() => {
    props.setLoading(true)
   getdata()
   setTimeout(() => {
    getdata()
   }, 3000);

  }, [1]);
   
                return (
                  <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
                <FlatList
                      data={vehicle}
                      renderItem={({ item }) => (
      
                      <View style={styles.shadow}>
                     <View style={styles.button}
                    
                    >
              
                  
                          <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
      
                          <Text style={styles.text}>Date And Time : </Text>
                            <Text style={styles.text}>{item.Time}</Text>
                            <Text style={styles.text}>Address  </Text>
                            <Text style={styles.text}>{item.address}</Text>
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
export  function CurrentSummary(props) {
  const [time, setTime] = useState('');
  const [speed, setSpeed] = useState();
  const [address, setAddress] = useState('');
  const [list, setList] = useState([]);
  const [distance, setDistance] = useState('');

  useEffect(() => {
    props.setLoading(true)
    getdata()
   
  }, []);
  async function getdata() {
    let response = await api.singledata(props.imei)
    if(response.length!=0){
      setList(response)    
      setTime(response[0].Time)
      setSpeed(response[0].Speed)
      setDistance(response[0].Dist)
      result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+response[0].Lat+`,`+response[0].Lon+`&key=AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ`)
      .then(res => res.json())
      .then((json) => {
        setAddress(json.results[0].formatted_address.split(',').slice(0,5))
          
   })
    }else{
      setTime('No Data')
      setSpeed('No Data')
      setDistance('No Data')
      setAddress('No Data')

    }
    
    props.setLoading(false)
  }
 

    return (
      <View style={{ flex: 1,marginTop:20}}>
      
                  
      
      <View style={styles.shadow}>
     <View style={styles.button}
    
    >

  
          <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'flex-start'}}>

    <Text style={styles.textc}>Day Start Time: </Text>
            <Text style={styles.textc}>{time.toLocaleString()}</Text>
            <Text style={styles.textc}>Day Start Address  </Text>
            <Text style={styles.textc}> {address} </Text>

            <Text style={styles.textc}>Current Address  </Text>
            <Text style={styles.textc}>{address}</Text>
            <Text style={styles.textc}>Current Speed </Text>
            <Text style={styles.textc}> {speed}  </Text>

            <Text style={styles.textc}>Last Tracked Time </Text>
            <Text style={styles.textc}> {time.toLocaleString()} </Text>
            <Text style={styles.textc}>Distance Covered Today</Text>
            <Text style={styles.textc}>{distance}</Text>
          

            
              
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
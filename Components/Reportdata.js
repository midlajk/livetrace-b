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

export  function Consolidted(props) {
  const [data, setdata] = useState([]);
 

  async function getdata(){
  setdata([])
  props.setLoading(true) 
  let items = props.data;
  let i = 0;
  await new Promise(async (resolve, reject) => {
  try {
      if (items.length == 0) return resolve();
      let funSync = async () => {
        console.log(i)
          if (i == items.length) 
          {   
            if(countarray.length>0){
             await setstart(items[countarray[0]])
             await setend(items[countarray[countarray.length-1]])
            pushdata.starttime = items[countarray[0]].Time
            pushdata.endtime = items[countarray[countarray.length-1]].Time
            timediff = new Date(pushdata.endtime)-new Date(pushdata.starttime)
            pushdata.timediff=(timediff/60000).toFixed(2)
            setdata(old=>[...old,pushdata])

             }
            props.setLoading(false)
            resolve();
          }else if(items[i].Igni>=1){
       
            await setobject(i)
          i++
          setTimeout( function() {
            funSync();
        }, 0 );
    

          }else{


              if(countarray.length>0){
               await setstart(items[countarray[0]])
               await setend(items[countarray[countarray.length-1]])
              pushdata.starttime = items[countarray[0]].Time
              pushdata.endtime = items[countarray[countarray.length-1]].Time
              timediff = new Date(pushdata.endtime)-new Date(pushdata.starttime)
               pushdata.timediff=(timediff/60000).toFixed(2)
              setdata(old=>[...old,pushdata])
            
            }
            pushdata={}
            countarray=[]
            i++
            setTimeout( function() {
              funSync();
          }, 0 );
          

          }


      }
      funSync();
  } catch (e) {
      reject(e);
  }
});
  
   
          

} 
pushdata={}
countarray=[]
async function setobject(i){
 await countarray.push(i)


}

async function setstart(props){
      props.Speed==null? '':
          result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+props.latitude+`,`+props.longitude+`&key=AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ`)
          .then(res => res.json())
          .then((json) => {
            pushdata.startaddress = json.results[0].formatted_address.split(' ').slice(1,20)
              
          })
    }
    async function setend(props){
      props.Speed==null? '':
          result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+props.latitude+`,`+props.longitude+`&key=AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ`)
          .then(res => res.json())
          .then((json) => {
            pushdata.endaddress = json.results[0].formatted_address.split(' ').slice(1,20)
              
          })
    }
useEffect(() => {
  props.setLoading(true)
 getdata()
 
}, [1]);
        return (
          <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
          <FlatList
                data={data}
                renderItem={({ item }) => (
    
                <View style={styles.shadow}>
               <View style={styles.button}
              
              >
        
            
                    <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
    
                    <Text style={styles.text}>Start Time : </Text>
                      <Text style={styles.text}>{item.starttime}</Text>
                      <Text style={styles.text}>Start Address  </Text>
                      <Text style={styles.text}>{item.startaddress}</Text>
                      <Text style={styles.text}>End Time</Text>
                      <Text style={styles.text}>{item.endtime}</Text>
                      <Text style={styles.text}>End Address</Text>
                      <Text style={styles.text}>{item.endaddress}</Text>
                      <Text style={styles.textc}>Total Distance (Kms)</Text>
                            <Text style={styles.textc}>0 Kms</Text>
                            <Text style={styles.textc}>Average Speed (km/Hr)</Text>
                            <Text style={styles.textc}>0 Kmph</Text>
                            <Text style={styles.textc}>Maximum Speed (km/Hr)</Text>
                            <Text style={styles.textc}>0 Kmph</Text>
             
                        </View>
              
               </View>
              </View>
                )}
                keyExtractor={(item, Reg_No) => Reg_No.toString()}/>
    
        
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
export  function Halt(props) {
  const [data, setdata] = useState([]);
 

  async function getdata(){
  setdata([])
  props.setLoading(true) 
  let items = props.data;
  let i = 0;
  await new Promise(async (resolve, reject) => {
  try {
      if (items.length == 0) return resolve();
      let funSync = async () => {
          if (i == items.length) 
          {   
            if(countarray.length>0){
             await setstart(items[countarray[0]])
             await setend(items[countarray[countarray.length-1]])
            pushdata.starttime = items[countarray[0]].Time
            pushdata.endtime = items[countarray[countarray.length-1]].Time
            timediff = new Date(pushdata.endtime)-new Date(pushdata.starttime)
            pushdata.timediff=(timediff/60000).toFixed(2)
            setdata(old=>[...old,pushdata])

             }
            props.setLoading(false)
            resolve();
          }else if(items[i].Igni<1&&items[i].Speed<2){
            await setobject(i)
          i++
          funSync();

          }else{

              if(countarray.length>0){
               await setstart(items[countarray[0]])
               await setend(items[countarray[countarray.length-1]])
              pushdata.starttime = items[countarray[0]].Time
              pushdata.endtime = items[countarray[countarray.length-1]].Time
              timediff = new Date(pushdata.endtime)-new Date(pushdata.starttime)
               pushdata.timediff=(timediff/60000).toFixed(2)
              setdata(old=>[...old,pushdata])

            }
            pushdata={}
            countarray=[]
            i++
            funSync();
          

          }


      }
      funSync();
  } catch (e) {
      reject(e);
  }
});
  
   
          

} 
pushdata={}
countarray=[]
async function setobject(i){
 await countarray.push(i)


}

async function setstart(props){
      props.Speed==null? '':
          result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+props.latitude+`,`+props.longitude+`&key=AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ`)
          .then(res => res.json())
          .then((json) => {
            pushdata.startaddress = json.results[0].formatted_address.split(' ').slice(1,20)
              
          })
    }
    async function setend(props){
      props.Speed==null? '':
          result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+props.latitude+`,`+props.longitude+`&key=AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ`)
          .then(res => res.json())
          .then((json) => {
            pushdata.endaddress = json.results[0].formatted_address.split(' ').slice(1,20)
              
          })
    }
useEffect(() => {
  props.setLoading(true)
 getdata()
 
}, [1]);
 
    return (
      <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
      <FlatList
            data={data}
            renderItem={({ item }) => (

            <View style={styles.shadow}>
           <View style={styles.button}
          
          >
    
        
                <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>

                <Text style={styles.text}>Start Time : </Text>
                  <Text style={styles.text}>{item.starttime}</Text>
                  <Text style={styles.text}>Start Address  </Text>
                  <Text style={styles.text}>{item.startaddress}</Text>
                  <Text style={styles.text}>End Time</Text>
                  <Text style={styles.text}>{item.endtime}</Text>
                  <Text style={styles.text}>End Address</Text>
                  <Text style={styles.text}>{item.endaddress}</Text>
                  <Text style={styles.text}>Halt Time</Text>
                  <Text style={styles.text}>{item.timediff} mins</Text>
                  
                    
                    </View>
          
           </View>
          </View>
            )}
            keyExtractor={(item, Reg_No) => Reg_No.toString()}/>

    
      </View>
    );
}
export  function Idiling(props) {
  const [data, setdata] = useState([]);
 

  async function getdata(){
  setdata([])
  props.setLoading(true) 
  let items = props.data;
  let i = 0;
  await new Promise(async (resolve, reject) => {
  try {
      if (items.length == 0) return resolve();
      let funSync = async () => {
        console.log(i)
          if (i == items.length) 
          {   
            if(countarray.length>0){
             await setstart(items[countarray[0]])
             await setend(items[countarray[countarray.length-1]])
            pushdata.starttime = items[countarray[0]].Time
            pushdata.endtime = items[countarray[countarray.length-1]].Time
            timediff = new Date(pushdata.endtime)-new Date(pushdata.starttime)
            pushdata.timediff=(timediff/60000).toFixed(2)
            setdata(old=>[...old,pushdata])

             }
            props.setLoading(false)
            resolve();
          }else if(items[i].Igni>0&&items[i].Speed<2){
       
            await setobject(i)
          i++
          setTimeout( function() {
            funSync();
        }, 0 );
    

          }else{


              if(countarray.length>0){
               await setstart(items[countarray[0]])
               await setend(items[countarray[countarray.length-1]])
              pushdata.starttime = items[countarray[0]].Time
              pushdata.endtime = items[countarray[countarray.length-1]].Time
              timediff = new Date(pushdata.endtime)-new Date(pushdata.starttime)
               pushdata.timediff=(timediff/60000).toFixed(2)
              setdata(old=>[...old,pushdata])
            
            }
            pushdata={}
            countarray=[]
            i++
            setTimeout( function() {
              funSync();
          }, 0 );
          

          }


      }
      funSync();
  } catch (e) {
      reject(e);
  }
});
  
   
          

} 
pushdata={}
countarray=[]
async function setobject(i){
 await countarray.push(i)


}

async function setstart(props){
      props.Speed==null? '':
          result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+props.latitude+`,`+props.longitude+`&key=AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ`)
          .then(res => res.json())
          .then((json) => {
            pushdata.startaddress = json.results[0].formatted_address.split(' ').slice(1,20)
              
          })
    }
    async function setend(props){
      props.Speed==null? '':
          result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+props.latitude+`,`+props.longitude+`&key=AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ`)
          .then(res => res.json())
          .then((json) => {
            pushdata.endaddress = json.results[0].formatted_address.split(' ').slice(1,20)
              
          })
    }
useEffect(() => {
  props.setLoading(true)
 getdata()
 
}, [1]);
    return (
      <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
      <FlatList
            data={data}
            renderItem={({ item }) => (

            <View style={styles.shadow}>
           <View style={styles.button}
          
          >
    
        
                <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>

                <Text style={styles.text}>Start Time : </Text>
                  <Text style={styles.text}>{item.starttime}</Text>
                  <Text style={styles.text}>Start Address  </Text>
                  <Text style={styles.text}>{item.startaddress}</Text>
                  <Text style={styles.text}>End Time</Text>
                  <Text style={styles.text}>{item.endtime}</Text>
                  <Text style={styles.text}>End Address</Text>
                  <Text style={styles.text}>{item.endaddress}</Text>
                  <Text style={styles.text}>Total Idle Time</Text>
                  <Text style={styles.text}>{item.timediff} mins</Text>
                  
                    
                    </View>
          
           </View>
          </View>
            )}
            keyExtractor={(item, Reg_No) => Reg_No.toString()}/>

    
      </View>
    );
}
export  function IgnitionON_off(props) {
  const [data, setdata] = useState([]);
 

  async function getdata(){
  setdata([])
  props.setLoading(true) 
  let items = props.data;
  let i = 0;
  await new Promise(async (resolve, reject) => {
  try {
      if (items.length == 0) return resolve();
      let funSync = async () => {
          if (i == items.length) 
          {   
            if(onarray.length>0){
             await setstart(items[countarray[0]],'on')
             await setend(items[countarray[countarray.length-1]],'on')
             onpushdata.starttime = items[countarray[0]].Time
             onpushdata.endtime = items[countarray[countarray.length-1]].Time
            timediff = new Date(onpushdata.endtime)-new Date(onpushdata.starttime)
            onpushdata.timediff=(timediff/60000).toFixed(2)
            onpushdata.igni='On'

            setdata(old=>[...old,onpushdata])

             }
             if(offarray.length>0){
              await setstart(items[countarray[0]],'off')
              await setend(items[countarray[countarray.length-1]],'off')
              offpushdata.starttime = items[countarray[0]].Time
              offpushdata.endtime = items[countarray[countarray.length-1]].Time
             timediff = new Date(offpushdata.endtime)-new Date(offpushdata.starttime)
             offpushdata.timediff=(timediff/60000).toFixed(2)
             offpushdata.igni='Off'

             setdata(old=>[...old,offpushdata])
           
           }
            props.setLoading(false)
            resolve();
          }else if(items[i].Igni>=1){

            if(offarray.length>0){
              await setstart(items[countarray[0]],'off')
              await setend(items[countarray[countarray.length-1]],'off')
              offpushdata.starttime = items[countarray[0]].Time
              offpushdata.endtime = items[countarray[countarray.length-1]].Time
             timediff = new Date(offpushdata.endtime)-new Date(offpushdata.starttime)
             offpushdata.timediff=(timediff/60000).toFixed(2)
             offpushdata.igni='Off'

             setdata(old=>[...old,offpushdata])
             offpushdata={}
            offarray=[]
           }
          
            await seton(i)
          i++
          setTimeout( function() {
            funSync();
        }, 0 );
    

          }else{


              if(onarray.length>0){
               await setstart(items[countarray[0]],'on')
               await setend(items[countarray[countarray.length-1]],'on')
               onpushdata.starttime = items[countarray[0]].Time
              onpushdata.endtime = items[countarray[countarray.length-1]].Time
              timediff = new Date(onpushdata.endtime)-new Date(onpushdata.starttime)
              onpushdata.timediff=(timediff/60000).toFixed(2)
               onpushdata.igni='On'

              setdata(old=>[...old,onpushdata])
              onpushdata={}
              onpushdata=[]
            }
            
            await setoff(i)

            i++
            setTimeout( function() {
              funSync();
          }, 0 );
          

          }


      }
      funSync();
  } catch (e) {
      reject(e);
  }
});
  
   
          

} 
onpushdata={}
onarray=[]
async function seton(i){
 await onarray.push(i)

}
offpushdata={}
offarray=[]
async function setoff(i){
 await offarray.push(i)


}

async function setstart(props,igni){
      props.Speed==null? '':
          result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+props.latitude+`,`+props.longitude+`&key=AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ`)
          .then(res => res.json())
          .then((json) => {
            if(igni=='off'){
              offpushdata.startaddress = json.results[0].formatted_address.split(' ').slice(1,20)

            }else{
              onpushdata.startaddress = json.results[0].formatted_address.split(' ').slice(1,20)

            }
              
          })
    }
    async function setend(props,igni){
      props.Speed==null? '':
          result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+props.latitude+`,`+props.longitude+`&key=AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ`)
          .then(res => res.json())
          .then((json) => {
            if(igni=='off'){
              offpushdata.endaddress = json.results[0].formatted_address.split(' ').slice(1,20)

            }else{
              onpushdata.endaddress = json.results[0].formatted_address.split(' ').slice(1,20)

            }
              
          })
    }
useEffect(() => {
  props.setLoading(true)
 getdata()
 
}, [1]);
    return (
      <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
      <FlatList
            data={data}
            renderItem={({ item }) => (

            <View style={styles.shadow}>
           <View style={styles.button}
          
          >
    
        
                <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
                <Text style={styles.text}>Ignition Status : </Text>
                  <Text style={styles.text}>{item.igni}</Text>
                  <Text style={styles.text}>Start Time : </Text>
                  <Text style={styles.text}>{item.starttime}</Text>
                  <Text style={styles.text}>Start Address  </Text>
                  <Text style={styles.text}>{item.startaddress}</Text>
                  <Text style={styles.text}>End Time</Text>
                  <Text style={styles.text}>{item.endtime}</Text>
                  <Text style={styles.text}>End Address</Text>
                  <Text style={styles.text}>{item.endaddress}</Text>
                  <Text style={styles.text}> Total Duration</Text>
                  <Text style={styles.text}>{item.timediff} mins</Text>
                  <Text style={styles.text}>Total Distance</Text>
                  <Text style={styles.text}></Text>
                  <Text style={styles.text}>Total Runing Time</Text>
                  <Text style={styles.text}></Text>
                  <Text style={styles.text}>Average Speed</Text>
                  <Text style={styles.text}></Text>
                  <Text style={styles.text}>Total Idling Time</Text>
                  <Text style={styles.text}></Text>
                  <Text style={styles.text}>Total Overspeed Distance</Text>
                  <Text style={styles.text}></Text>
                  <Text style={styles.text}>Idle Percentage</Text>
                  <Text style={styles.text}></Text>
                  <Text style={styles.text}>Max Speed</Text>
                  <Text style={styles.text}></Text>
                    </View>
          
           </View>
          </View>
            )}
            keyExtractor={(item, Reg_No) => Reg_No.toString()}/>

    
      </View>
    );
}
export  function OverSpeed(props) {
  const [data, setdata] = useState([]);
 

  async function getdata(){
  setdata([])
  props.setLoading(true) 
  let items = props.data;
  let i = 0;
  await new Promise(async (resolve, reject) => {
  try {
      if (items.length == 0) return resolve();
      let funSync = async () => {
        console.log(i)
          if (i == items.length) 
          {   
            if(countarray.length>0){
             await setstart(items[countarray[0]])
             await setend(items[countarray[countarray.length-1]])
            pushdata.starttime = items[countarray[0]].Time
            pushdata.endtime = items[countarray[countarray.length-1]].Time
            timediff = new Date(pushdata.endtime)-new Date(pushdata.starttime)
            pushdata.timediff=(timediff/60000).toFixed(2)
            setdata(old=>[...old,pushdata])

             }
            props.setLoading(false)
            resolve();
          }else if(items[i].Speed>60){
       
            await setobject(i)
          i++
          setTimeout( function() {
            funSync();
        }, 0 );
    

          }else{


              if(countarray.length>0){
               await setstart(items[countarray[0]])
               await setend(items[countarray[countarray.length-1]])
              pushdata.starttime = items[countarray[0]].Time
              pushdata.endtime = items[countarray[countarray.length-1]].Time
              timediff = new Date(pushdata.endtime)-new Date(pushdata.starttime)
               pushdata.timediff=(timediff/60000).toFixed(2)
              setdata(old=>[...old,pushdata])
            
            }
            pushdata={}
            countarray=[]
            i++
            setTimeout( function() {
              funSync();
          }, 0 );
          

          }


      }
      funSync();
  } catch (e) {
      reject(e);
  }
});
  
   
          

} 
pushdata={}
countarray=[]
async function setobject(i){
 await countarray.push(i)


}

async function setstart(props){
      props.Speed==null? '':
          result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+props.latitude+`,`+props.longitude+`&key=AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ`)
          .then(res => res.json())
          .then((json) => {
            pushdata.startaddress = json.results[0].formatted_address.split(' ').slice(1,20)
              
          })
    }
    async function setend(props){
      props.Speed==null? '':
          result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+props.latitude+`,`+props.longitude+`&key=AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ`)
          .then(res => res.json())
          .then((json) => {
            pushdata.endaddress = json.results[0].formatted_address.split(' ').slice(1,20)
              
          })
    }
useEffect(() => {
  props.setLoading(true)
 getdata()
 
}, [1]);
    return (
      <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
      <FlatList
            data={data}
            renderItem={({ item }) => (

            <View style={styles.shadow}>
           <View style={styles.button}
          
          >
    
        
                <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>

                  <Text style={styles.text}>Start Time : </Text>
                  <Text style={styles.text}>{item.starttime}</Text>
                  <Text style={styles.text}>Start Address  </Text>
                  <Text style={styles.text}>{item.startaddress}</Text>
                  <Text style={styles.text}>End Time</Text>
                  <Text style={styles.text}>{item.endtime}</Text>
                  <Text style={styles.text}>End Address</Text>
                  <Text style={styles.text}>{item.endaddress}</Text>
                  <Text style={styles.text}> Alert Duration</Text>
                  <Text style={styles.text}>{item.timediff} mins</Text>
                  
                   <Text style={styles.text}> Total Overspeed Distance</Text>
                  <Text style={styles.text}></Text>

                  <Text style={styles.text}> Maximum Speed</Text>
                  <Text style={styles.text}></Text>
                  <Text style={styles.text}> Speed Limit</Text>
                  <Text style={styles.text}></Text> 
                    </View>
          
           </View>
          </View>
            )}
            keyExtractor={(item, Reg_No) => Reg_No.toString()}/>

    
      </View>
    );
}
export  function Panic(props) {
  const [data, setdata] = useState([]);
 

  async function getdata(){
  setdata([])
  props.setLoading(true) 
  let items = props.data;
  let i = 0;
  await new Promise(async (resolve, reject) => {
  try {
      if (items.length == 0) return resolve();
      let funSync = async () => {
        console.log(i)
          if (i == items.length) 
          {   
            if(countarray.length>0){
             await setstart(items[countarray[0]])
             await setend(items[countarray[countarray.length-1]])
            pushdata.starttime = items[countarray[0]].Time
            pushdata.endtime = items[countarray[countarray.length-1]].Time
            timediff = new Date(pushdata.endtime)-new Date(pushdata.starttime)
            pushdata.timediff=(timediff/60000).toFixed(2)
            setdata(old=>[...old,pushdata])

             }
            props.setLoading(false)
            resolve();
          }else if(items[i].SOS>=1){
       
            await setobject(i)
          i++
          setTimeout( function() {
            funSync();
        }, 0 );
    

          }else{


              if(countarray.length>0){
               await setstart(items[countarray[0]])
               await setend(items[countarray[countarray.length-1]])
              pushdata.starttime = items[countarray[0]].Time
              pushdata.endtime = items[countarray[countarray.length-1]].Time
              timediff = new Date(pushdata.endtime)-new Date(pushdata.starttime)
               pushdata.timediff=(timediff/60000).toFixed(2)
              setdata(old=>[...old,pushdata])
            
            }
            pushdata={}
            countarray=[]
            i++
            setTimeout( function() {
              funSync();
          }, 0 );
          

          }


      }
      funSync();
  } catch (e) {
      reject(e);
  }
});
  
   
          

} 
pushdata={}
countarray=[]
async function setobject(i){
 await countarray.push(i)


}

async function setstart(props){
      props.Speed==null? '':
          result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+props.latitude+`,`+props.longitude+`&key=AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ`)
          .then(res => res.json())
          .then((json) => {
            pushdata.startaddress = json.results[0].formatted_address.split(' ').slice(1,20)
              
          })
    }
    async function setend(props){
      props.Speed==null? '':
          result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+props.latitude+`,`+props.longitude+`&key=AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ`)
          .then(res => res.json())
          .then((json) => {
            pushdata.endaddress = json.results[0].formatted_address.split(' ').slice(1,20)
              
          })
    }
useEffect(() => {
  props.setLoading(true)
 getdata()
 
}, [1]);
    return (
      <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
      <FlatList
            data={data}
            renderItem={({ item }) => (

            <View style={styles.shadow}>
           <View style={styles.button}
          
          >
    
        
                <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>

                {/* <Text style={styles.text}>Username : </Text>
                  <Text style={styles.text}>{item.Time}</Text> */}
                      <Text style={styles.text}>Start Time : </Text>
                  <Text style={styles.text}>{item.starttime}</Text>
                  <Text style={styles.text}>Start Address  </Text>
                  <Text style={styles.text}>{item.startaddress}</Text>
                  <Text style={styles.text}>End Time</Text>
                  <Text style={styles.text}>{item.endtime}</Text>
                  <Text style={styles.text}>End Address</Text>
                  <Text style={styles.text}>{item.endaddress}</Text>
                  <Text style={styles.text}>Alert Duration</Text>
                  <Text style={styles.text}>{item.timediff} mins</Text>
                
                  
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
export  function Trip(props) {
  const [data, setdata] = useState([]);
 

  async function getdata(){
  setdata([])
  props.setLoading(true) 
  let items = props.data;
  let i = 0;
  await new Promise(async (resolve, reject) => {
  try {
      if (items.length == 0) return resolve();
      let funSync = async () => {
        console.log(i)
          if (i == items.length) 
          {   
            if(countarray.length>0){
             await setstart(items[countarray[0]])
             await setend(items[countarray[countarray.length-1]])
            pushdata.starttime = items[countarray[0]].Time
            pushdata.endtime = items[countarray[countarray.length-1]].Time
            timediff = new Date(pushdata.endtime)-new Date(pushdata.starttime)
            pushdata.timediff=(timediff/60000).toFixed(2)
            setdata(old=>[...old,pushdata])

             }
            props.setLoading(false)
            resolve();
          }else if(items[i].Igni>=1){
       
            await setobject(i)
          i++
          setTimeout( function() {
            funSync();
        }, 0 );
    

          }else{


              if(countarray.length>0){
               await setstart(items[countarray[0]])
               await setend(items[countarray[countarray.length-1]])
              pushdata.starttime = items[countarray[0]].Time
              pushdata.endtime = items[countarray[countarray.length-1]].Time
              timediff = new Date(pushdata.endtime)-new Date(pushdata.starttime)
               pushdata.timediff=(timediff/60000).toFixed(2)
              setdata(old=>[...old,pushdata])
            
            }
            pushdata={}
            countarray=[]
            i++
            setTimeout( function() {
              funSync();
          }, 0 );
          

          }


      }
      funSync();
  } catch (e) {
      reject(e);
  }
});
  
   
          

} 
pushdata={}
countarray=[]
async function setobject(i){
 await countarray.push(i)


}

async function setstart(props){
      props.Speed==null? '':
          result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+props.latitude+`,`+props.longitude+`&key=AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ`)
          .then(res => res.json())
          .then((json) => {
            pushdata.startaddress = json.results[0].formatted_address.split(' ').slice(1,20)
              
          })
    }
    async function setend(props){
      props.Speed==null? '':
          result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+props.latitude+`,`+props.longitude+`&key=AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ`)
          .then(res => res.json())
          .then((json) => {
            pushdata.endaddress = json.results[0].formatted_address.split(' ').slice(1,20)
              
          })
    }
useEffect(() => {
  props.setLoading(true)
 getdata()
 
}, [1]);
    return (
      <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
      <FlatList
            data={data}
            renderItem={({ item }) => (

            <View style={styles.shadow}>
           <View style={styles.button}
          
          >
    
        
                <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>

                <Text style={styles.text}>Start Time : </Text>
                  <Text style={styles.text}>{item.starttime}</Text>
                  <Text style={styles.text}>Start Address  </Text>
                  <Text style={styles.text}>{item.startaddress}</Text>
                  <Text style={styles.text}>End Time</Text>
                  <Text style={styles.text}>{item.endtime}</Text>
                  <Text style={styles.text}>End Address</Text>
                  <Text style={styles.text}>{item.endaddress}</Text>
                  <Text style={styles.text}>Total Running Time</Text>
                  <Text style={styles.text}>{item.timediff} mins</Text>
 
                  <Text style={styles.text}> Total Distance</Text>
                 
                  <Text style={styles.text}> Average Speed</Text>
                  <Text style={styles.text}> Total Idling Time</Text>
                  <Text style={styles.text}> Idle(%)</Text>
                  <Text style={styles.text}> Max Speed</Text>
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
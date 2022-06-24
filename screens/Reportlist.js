import React,{useState,useEffect} from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,ScrollView,FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import * as api from "../services/auth";
import Loader from '../Components/Loader';
import b from "../configuration/Datahandler";
import {Data} from './data'
import TrackingReport from '../Components/Reportdata'
import {ADReport} from '../Components/Reportdata'
import {Consolidted} from '../Components/Reportdata'
import {CurrentSummary} from '../Components/Reportdata'
import {Halt} from '../Components/Reportdata'
import {Idiling} from '../Components/Reportdata'
import {IgnitionON_off} from '../Components/Reportdata'
import {OverSpeed} from '../Components/Reportdata'
import {Panic} from '../Components/Reportdata'
import {Trip} from '../Components/Reportdata'


export default function TrackScreen({navigation,route}) {
  //  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
   const [vehicle, setvehicle] = useState([]);
  // const [serverdate, setServerdate] = useState('');

  // var listofdata = [];
  // var notfound = [];
  const [list, setList] = useState({});

  useEffect(() => {
    // setLoading(true) 
    if(route.params.name !='Current Summary'){
          getdata()
    }

  }, []);
   
    async function getdata() {  
      // let response = await api.history(route.params.from,route.params.to,route.params.vehicle);      
      // setList(response.HistoryData)
      // setLoading(false) 
   

    }
  const data = Data.HistoryData
  function isObjectEmpty(obj) {
    var name;
    for (name in obj) {
      return false;
    }
    return true;
  }

  return (
    <View style={{flex:1,}}>
                           <Loader loading={loading} navigation={navigation} />

         <View style={styles.header}>
             <View style={{width:'100%',flexDirection:'row',justifyContent:'center'}}>
            <Text style={{color:'#000',fontWeight:'bold'}}>{route.params.name} :</Text>
             <Text style={{color:'#F33A6A',fontWeight:'bold'}}> {route.params.vehicle}</Text>
             </View>
             <View style={{
   borderBottomColor: 'black', 
   borderBottomWidth: 0.5, 
   width:'90%',marginTop:5,marginBottom:10}}>
</View>
             <Text style={{color:'#000'}}> From : {route.params.from}</Text>
             <Text style={{color:'#000'}}>From : {route.params.to}</Text>
             
      
        </View>
        {
            route.params.name =='AD IN/OUT'?isObjectEmpty(data)?<View></View>:
            <ADReport data={data} setLoading={setLoading}/>:
            route.params.name =='Consolidated'?isObjectEmpty(data)?<View></View>:
            <Consolidted data={data} setLoading={setLoading}/>:
            route.params.name =='Current Summary'?
            <CurrentSummary setLoading={setLoading} imei={route.params.imei}/>:
            route.params.name =='Halt'?isObjectEmpty(data)?<View></View>:
            <Halt data={data} setLoading={setLoading}/>:
            route.params.name =='Idiling'?isObjectEmpty(data)?<View></View>:
            <Idiling data={data} setLoading={setLoading}/>:
            route.params.name =='Ignition ON/OFF'?isObjectEmpty(data)?<View></View>:
            <IgnitionON_off data={data} setLoading={setLoading}/>:
            route.params.name =='Panic'?isObjectEmpty(data)?<View></View>:
            <Panic data={data} setLoading={setLoading}/>:
            route.params.name =='Over Speed'?isObjectEmpty(data)?<View></View>:
            <OverSpeed data={data} setLoading={setLoading}/>:
            route.params.name =='Trip'?isObjectEmpty(data)?<View></View>:
            <Trip data={data} setLoading={setLoading}/>:isObjectEmpty(data)?<View></View>:
               <TrackingReport data={data} setLoading={setLoading}/>
        }
    
 
  
    
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
        header:{width:'90%',height:100,backgroundColor:'#dedfe0',marginTop:20,borderRadius:15,justifyContent:'center',alignItems:'center',paddingLeft:20,elevation:3,alignSelf:'center'},
   
  })
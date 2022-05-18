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


  const data = Data.HistoryData
  const filteredData = searchText ? data.filter(x =>
    x.Reg_No.toLowerCase().includes(searchText.toLowerCase())
    ): data
    

  return (
    <View style={{flex:1,}}>
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
            route.params.name =='AD IN/OUT'?
            <ADReport data={data}/>:
            route.params.name =='Consolidated'?
            <Consolidted data={data}/>:
            route.params.name =='Current Summary'?
            <CurrentSummary data={data}/>:
            route.params.name =='Halt'?
            <Halt data={data}/>:
            route.params.name =='Idiling'?
            <Idiling data={data}/>:
            route.params.name =='Ignition ON/OFF'?
            <IgnitionON_off data={data}/>:
            route.params.name =='Panic'?
            <Panic data={data}/>:
            route.params.name =='Over Speed'?
            <OverSpeed data={data}/>:
            route.params.name =='Trip'?
            <Trip data={data}/>:
               <TrackingReport data={data}/>
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
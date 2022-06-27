import  React,{useState,useEffect} from 'react';
import { Text, View,TouchableOpacity,StyleSheet,TextInput,Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconb from 'react-native-vector-icons/MaterialCommunityIcons';

import DropDown from '../Components/dropdown';

import DatePicker from 'react-native-date-picker'

export default function Notification({navigation,route}) {
    const day = new Date()
    day.setDate(day.getDate()-1)
    const [from, setFrom] = useState(day);
    const [to, setTo] = useState(new Date());
    const [clicker, seclicker] = useState('');
    const [open, setOpen] = useState(false)
    const [vehicle, setVehicle] = useState('')
    const [imei, setImei] = useState('')
useEffect(() => {
  setVehicle(route.params.number)
  setImei(route.params.imei)

}, [])
    const setToday = () => {
        var startdate = new Date()
        startdate.setHours(0,0,0,0);
        var enddate = new Date()
        enddate.setHours(23,59,59,999);
        setFrom(startdate)
        setTo(enddate)
        seclicker('from')
      };
    
      const setYesterday = () => {
        var startdate = new Date()
        startdate.setDate(startdate.getDate()-1)
        startdate.setHours(0,0,0,0);
        var enddate = new Date()
        enddate.setDate(enddate.getDate()-1)
        enddate.setHours(23,59,59,999);
        setFrom(startdate)
        setTo(enddate)
        seclicker('from')
      };
      const setWeek = () => {
        var startdate = new Date()
        startdate.setDate(startdate.getDate()-7)
        startdate.setHours(0,0,0,0);
        var enddate = new Date()
        enddate.setHours(23,59,59,999);
        setFrom(startdate)
        setTo(enddate)
        seclicker('from')
      };
      const setMonth = () => {
        var startdate = new Date()
        startdate.setMonth(startdate.getMonth()-1)
        startdate.setHours(0,0,0,0);
        var enddate = new Date()
        enddate.setHours(23,59,59,999);
        setFrom(startdate)
        setTo(enddate)
        seclicker('from')
      };
     function settodate(){
        var startdate = new Date(from)
        startdate.setDate(startdate.getDate()+1)
        startdate.setHours(23,59,59,999);
        setTo(startdate)
     }
     function submit() {
      if (!vehicle) {
        alert('Please select vehicle');
        return;
      }else{ 
          navigation.navigate('Reports View',{name:route.params.name,vehicle:vehicle,from:from.toISOString(),to:to.toISOString(),imei:imei})
      }
    
     }
  return (
    <View style={{ flex: 1,alignItems: 'center',backgroundColor:'#fff' }}>
        <View style={styles.header}>
        {route.params.icontype == 'Icon' ?
        <Icon
        style={{marginRight:20}}
                                name={route.params.icon}
                                size={25}
                                color={'#000'}
                           
                            />
        :
        <Iconb
        style={{marginRight:20}}
                                name={route.params.icon}
                                size={25}
                                color={'#000'}
                           
                            />
        }
        <View style={{alignItems:'center',width:'70%'}}>
            <Text style={{color:'#000',fontSize:16}}>
                    {route.params.name}
            </Text>
        </View>
            
        </View>
        <View style={{flexDirection:'row',marginTop:30,width:'100%'}}>
   
        
   <View style={{flex:7}}>
       <Text style={{color:'#000',fontWeight:'bold',marginLeft:20}}>Select Vehicle Number</Text>
 <DropDown setVehicle={setVehicle} setImei={setImei} vehicle={vehicle} />
   </View>
   
</View>

{route.params.name=='Current Summary'?<View></View>:

<View style={{alignItems:'center'}}>


        <View style={{flexDirection:'row',margin:10,flexWrap:'wrap',justifyContent:'space-around',}}>
         <TouchableOpacity style={styles.datebutton} onPress={setToday}>
                <Text> Today </Text>

                </TouchableOpacity>
                    <TouchableOpacity style={styles.datebutton} onPress={setYesterday}>
                        <Text> Last Day </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.datebutton} onPress={setWeek}>
                    <Text> Last Week </Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.datebutton} onPress={setMonth}>
                <Text> Last Month </Text>

                </TouchableOpacity>
             

    </View>
   
    <View style={styles.datecard}>
        <View style={{width:'100%',alignItems:'center',padding:5}}>
            <Text style={{color:'#000',fontSize:17}}>
            Selected Custom Date
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
            <TouchableOpacity onPress={()=> {setOpen(true); seclicker('from')}}> 
                <Text style={{fontSize:16,marginBottom:10,textDecorationLine:'underline',color:'#000'}}>
       {clicker?from.toLocaleString():'Select A Date'}
                </Text>
                </TouchableOpacity>
       <TouchableOpacity onPress={()=> {setOpen(true); seclicker('To')}}>
           <Text style={{fontSize:16,textDecorationLine:'underline',color:'#000'}}>
        {clicker?to.toLocaleString():'Select A Date'}
        </Text> 
       </TouchableOpacity>
       
        </View>
        {open && (
            <DatePicker
            modal
            mode='datetime'
            open={open}
            date={clicker=='from'?from:to}
            onConfirm={(date) => {
              if(clicker=='from'){
                if(date>new Date()){
                  setOpen(false)
                  setFrom(new Date())
                }else{
                     setOpen(false)
                setFrom(date)
                settodate()

                }
             
              }else{
                if(date>new Date()){
                  setOpen(false)
                  setTo(new Date())
             
                }else{
                     setOpen(false)
                     setTo(date)

                }
             
              }
              
            }}
            onCancel={() => {
              setOpen(false)
            }}
          />
      )}
       
    </View>
    
    </View>}

    
    <TouchableOpacity
                  style={styles.button}
                  onPress={()=>{submit()}}
                > 
                
                   <Text style={{color:'#fff'}}>Generate Report</Text>

                 </TouchableOpacity>
    
               
    </View>
  );
}

const styles = StyleSheet.create({
    datebutton:{
        width:'45%',height:30,backgroundColor:'#fff',borderRadius:15,marginBottom:10,alignItems:'center',justifyContent:'center',elevation:3
    },
    header:{width:'90%',height:70,backgroundColor:'#fff',borderColor:'#F33A6A',borderWidth:1,marginTop:30,borderRadius:15,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingLeft:20,elevation:3},
    datecard:{flexDirection:'row',width:'90%',justifyContent:'flex-start',backgroundColor:'#fff',borderRadius:10,padding:10,flexWrap:'wrap',elevation:3},
    button: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        elevation: 5,
        
    },
    
})

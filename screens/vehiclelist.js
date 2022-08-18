import React,{useState,useEffect,useRef} from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,ScrollView,FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import * as api from "../services/auth";
import Loader from '../Components/Loader';
import b from "../configuration/Datahandler";


export default function TrackScreen({navigation,route}) {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
   const [vehicle, setvehicle] = useState([]);


  useEffect(() => {
    setLoading(true)
    setvehicle(b.getVehicle())
    setLoading(false)
  }, []);
   
  const data = vehicle
  const filteredData = searchText ? data.filter(x =>
    x.Reg_No.toLowerCase().includes(searchText.toLowerCase())
    ): data
    

  return (
    <View style={{flex:1,}}>
             <Loader loading={loading} navigation={navigation} /> 
         <Searchbar
          placeholder="Search"
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
          style={{top:10,width:'90%',alignSelf:'center',borderRadius:16}}
          />
          
          <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>

                <FlatList
                data={filteredData}
                renderItem={({ item }) => (

                <View style={styles.shadow}>
               <TouchableOpacity style={styles.button}
                onPress={() => { 
                  if(item.status =='Active'){
                    navigation.navigate('Individual Map',{ vehicle:item.Reg_No,imei:item.IMEI});
                  } 
              }}
              >
        
            
                    <View style={{flex:1,alignItems:'center'}}>
         
                      <Text style={{fontSize:16,color:'#000'}}>{item.Reg_No}</Text>
            <Text style={{fontSize:16,color:'#ae5899'}}>Subscription Status : {item.status}</Text>

                      <Text style={styles.text}>IMEI : {item.IMEI }</Text>
            <Text style={{fontSize:16,color:'#000'}}>Vehicle type : {item.V_Type}</Text>
                      
                        <View style={{flex:1,alignItems:'center'}}>
                       <Text style={styles.text}>Vehicle name : {item.Nick} </Text>

                        <Text style={{color:'#0783cb',fontSize:12}}>{item.status=="Active"?"Click Here to Track Live":"Please do the payment"}</Text> 
                        </View>
                      
                      
                        
                        </View>
              
               </TouchableOpacity>
              </View>
                )}
                keyExtractor={(item, Reg_No) => Reg_No.toString()}/>
    

  </View>
  
    
  </View>
  );
       }


const styles = StyleSheet.create({
   
    text: {
         color:'#000',
         fontSize:14,
      
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
        }
   
  })
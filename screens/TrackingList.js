import React,{useState,useEffect} from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,ScrollView,FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import * as api from "../services/auth";
import Loader from '../Components/Loader';
import b from "../configuration/Datahandler";


export default function TrackScreen({navigation,route}) {
   const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [vehicle, setvehicle] = useState([]);
  const [serverdate, setServerdate] = useState('');

  var listofdata = [];
  var notfound = [];

  useEffect(() => {
    getdata()
    setvehicle(b.getVehicle())
  }, []);
 
    async function getdata() {
      
        let response = await api.fetchdata(); 
        setList(response.data.response.LiveData)
        setServerdate(response.data.server.dateTime)
        setLoading(false) 

    } 
    route.params.screen=='Tracking Vehicle'?
    vehicle.forEach(vehicle => {
          list.forEach(element => {
            if(vehicle.Reg_No == element.Reg_No){
              servdate = new Date(serverdate)
              lastupdate = new Date(element.Time)
              lastupdate.setHours(lastupdate.getHours()+5)
              lastupdate.setMinutes(lastupdate.getMinutes()+30)
              diff = servdate - lastupdate
              offint = vehicle.Off_Int == null ? 90 : vehicle.Off_Int
              if(diff<offint*60000){
                listofdata=[...listofdata,element ];
              }
            }
            
          });
        }): route.params.screen=='Non-Tracking Vehicle'?    
        vehicle.forEach(vehicle => {
          found=false
          list.forEach(element => {
            if(vehicle.Reg_No == element.Reg_No){
              found=true
              servdate = new Date(serverdate)
              lastupdate = new Date(element.Time)
              lastupdate.setHours(lastupdate.getHours()+5)
              lastupdate.setMinutes(lastupdate.getMinutes()+30)
              diff = servdate - lastupdate
              offint = vehicle.Off_Int == null ? 90 : vehicle.Off_Int
              if(diff>offint*60000){
                listofdata=[...listofdata,element ];
              }
            }
            
          });
          if(!found){
            listofdata=[...listofdata,vehicle ];

          }
        }):
        listofdata=list;
        vehicle.forEach(vehicle => {
          found=false
          list.forEach(element => {
            if(vehicle.Reg_No == element.Reg_No){
              found=true
            }
            });
            if(!found){
              listofdata=[...listofdata,vehicle ];
            }
          })
      

  console.log(notfound)
  //Data can be coming from props or any other source as well
  const data = listofdata
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
                  navigation.navigate('Individual Map',{ vehicle:item.Reg_No});
              }}
              >
        
            
                    <View style={{flex:1,alignItems:'center'}}>
         
                      <Text style={{fontSize:16,color:'#000'}}>{item.Reg_No}</Text>
                      <Text style={styles.text}>IMEI : {item.IMEI || item.imei}</Text>
                      <Text style={{fontSize:16,color:'#000'}}>Ignition Status : {item.Igni==1?'Online':'Offline'}</Text>
                      {item.Speed==null?<Text style={styles.text}>
                        No Data
                        </Text>: 
                        <View style={{flex:1,alignItems:'center'}}>
                       <Text style={styles.text}>Speed : {item.Speed}</Text>
                      <Text style={styles.text}>Last Tracked : {item.Time}</Text>
                      <Text style={styles.text}>Address:</Text>
                        <Text style={{color:'#0783cb',fontSize:10}}>Click Here to Track Live</Text> 
                        </View>}
                      
                      
                        
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
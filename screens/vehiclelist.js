import React,{useState,useEffect,useRef} from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,ScrollView,FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import * as api from "../services/auth";
import Loader from '../Components/Loader';
import b from "../configuration/Datahandler";


export default function TrackScreen({navigation,route}) {
   const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
   const [vehicle, setvehicle] = useState([]);
  const [serverdate, setServerdate] = useState('');
  const [datas, setData] = useState([]);
  const vehicleRef = useRef();
  vehicleRef.current = vehicle;
  const listRef = useRef();
listRef.current = list;
   var listofdata = [];
  // var notfound = [];

  useEffect(() => {
    setvehicle(b.getVehicle())
    setLoading(true)  
    getdata()
  
  }, []);
   
  async function getdata() {
         setData([])
        let response = await api.fetchdata(); 
        setList(response.data.response.LiveData)
        setServerdate(response.data.server.dateTime)
      
        vehicleRef.current.forEach(vehic => {
          found=false
          listRef.current.forEach(element => {
            if(vehic.Reg_No == element.Reg_No){
              found=true
              result = fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+element.Lat+`,`+element.Lon+`&key=AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ`)
              .then(res => res.json())
              .then((json) => {
                element.address = json.results[0].formatted_address.split(',').slice(1,3)
                  
              })
              element.Expiry_Date = vehic.Expiry_Date;
              setData(old=>[...old,element])
              
            }
            });
            if(!found){
                setData(old=>[...old,vehic])
            }
          })
          setLoading(false) 

      
    } 

        


  //Data can be coming from props or any other source as well
  const data = datas
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
                  navigation.navigate('Individual Map',{ vehicle:item.Reg_No,imei:item.imei||item.IMEI});
              }}
              >
        
            
                    <View style={{flex:1,alignItems:'center'}}>
         
                      <Text style={{fontSize:16,color:'#000'}}>{item.Reg_No}</Text>
            <Text style={{fontSize:16,color:'#0783cb'}}>Expiry Date : {item.Expiry_Date}</Text>
            <Text style={{fontSize:16,color:'#0783cb'}}>Subscription Status : {new Date(serverdate) < new Date(item.Expiry_Date)?'Active':'Expired'}</Text>

                      <Text style={styles.text}>IMEI : {item.IMEI || item.imei}</Text>
                      <Text style={{fontSize:16,color:'#000'}}>Ignition Status : {item.Igni==1?'Online':'Offline'}</Text>
                      {item.Speed==null?<Text style={styles.text}>
                        No Data
                        </Text>: 
                        <View style={{flex:1,alignItems:'center'}}>
                       <Text style={styles.text}>Speed : {item.Speed}</Text>
                      <Text style={styles.text}>Last Tracked : {item.Time}</Text>
            <Text style={styles.text}>Address: {item.address!=null?item.address:'Loading...'}</Text>
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
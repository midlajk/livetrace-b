import React,{useState,useEffect} from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,ScrollView,FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import * as api from "../services/auth";


export default function TrackScreen({navigation}) {
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState('');
    async function getdata() {
        let response = await api.fetchdata();
        setList(response.data.response.LiveData)
    }
    getdata()
    
  
  //Data can be coming from props or any other source as well
  const data = list
  const filteredData = searchText ? data.filter(x =>
        x.Reg_No.toLowerCase().includes(searchText.toLowerCase())
      )
    : data
    

  return (
    <View style={{flex:1,backgroundColor:'#dedfe0'}}>
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
               <TouchableOpacity style={styles.button}>
        
            
                    <View style={{flex:1,alignItems:'center'}}>
                      <Text style={{fontSize:16,color:'#000'}}>{item.Reg_No}</Text>
                      <Text style={{fontSize:16,color:'#000'}}>Status: Online</Text>
                    
                      <Text style={styles.text}>Last Tracked : {item.Time}</Text>
                        <Text style={styles.text}>Halt Since : 4 Days</Text>
                
                        <Text style={{color:'#0783cb',fontSize:10}}>Click Here to Track Live</Text>
                      
                        
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
         fontSize:12,

       },
       textb: {
        color:'#fff',
        fontSize:16,

      },
       button: {
         width:'90%',height:160,borderRadius:16,backgroundColor:'#fff',justifyContent:'center',alignItems:'center',
         padding:20,
         flexDirection:'row',justifyContent:'space-between',
         shadowColor:'#000',
            shadowOffset:{
                width:0,
                height:10
            },
            shadowOpacity:0.25,
            shadowRadius:3.5,
            elevation:3,
        },
        shadow:{
            
            alignItems:'center',margin:5
        }
   
  })
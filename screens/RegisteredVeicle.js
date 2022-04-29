import React,{useEffect,useState} from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,ScrollView,Image,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Searchbar } from 'react-native-paper';
import * as api from "../services/auth";



export default function Collection({navigation,route}) {
  data = [
    {
      vehiclenumber: 'KL 12 AB 123',
      SerialNumber:'9744022332',
      SIMNumber : '9744022332232'
    },
    {
      vehiclenumber: 'Kb 12 bB 123',
      SerialNumber:'97440223322',
      SIMNumber : '974402233222'
    },
    {
      vehiclenumber: 'LB-12-CB32',
      SerialNumber:'97440223322',
      SIMNumber : '974402233222'
    }
  ]
  const filteredData = searchQuery ? data.filter(x =>
    x.vehiclenumber.toLowerCase().includes(searchQuery.toLowerCase())
  ) : data
  const [searchQuery, setSearchQuery] = useState('');
 

  return (
    <View style={{flex:1}}>
        <Searchbar
      placeholder="Search"
      onChangeText={(text) => setSearchQuery(text)}
      value={searchQuery}
      style={{top:10,width:'90%',alignSelf:'center',borderRadius:16}}
    />

  
  
 

  <View style={{ flex: 1, justifyContent: 'center',marginTop:20,marginBottom:50}}>
   
    <FlatList
                data={filteredData}
                renderItem={({ item }) => (
    <View style={styles.shadow}>
       { route.params.name == 'Select a vehicle' ?    
       <TouchableOpacity style={[styles.button,{height:60}]}
        onPress={() => {
                    
        navigation.navigate('Report Generation',{number:item.vehiclenumber,name:route.params.heading,icon:route.params.icon,icontype:route.params.icontype});
         }} 
        >
         
             <View>
                 <Text style={{fontSize:18}}>{item.vehiclenumber}</Text>
             
                 </View>
             <View>
                 
             </View>
             
        
       </TouchableOpacity>
       : 
      <TouchableOpacity style={styles.button}
        
       >
        
            <View>
                <Text style={styles.text}>Vehicle Number : {item.vehiclenumber}</Text>
                <Text style={styles.text}>Serial Number : {item.SerialNumber}</Text>
                <Text style={styles.text}>SIM Number : {item.SIMNumber}</Text>
                </View>
            <View>
                
            </View>
            
       
      </TouchableOpacity>

    }
      </View>
   
       )}/>

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
         width:'90%',height:90,backgroundColor:'#fff',justifyContent:'center',alignItems:'center',
         borderRadius:10,
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
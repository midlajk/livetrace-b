import * as React from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,ScrollView,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Searchbar } from 'react-native-paper';
import Category from '../navigation/Category';


export default function Collection({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={{flex:1}}>
         <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{top:10,width:'90%',alignSelf:'center',borderRadius:16}}
    />
      

    <ScrollView style={{flex:1}}>
  
  
 
   
  <View style={{ flex: 1, justifyContent: 'center',marginTop:20,marginBottom:50}}>

    <View style={styles.shadow}>
      <TouchableOpacity style={styles.button}
       >
        
     
            <View style={{flex:1,alignItems:'center'}}>
              <Text style={{fontSize:16,color:'#000'}}>KL 12 AB 123</Text>
              <Text style={{fontSize:16,color:'#000'}}>Status: Online</Text>
            
              <Text style={styles.text}>LAst Tracked : Dec 17 , 2021 2:10 PM</Text>
                <Text style={styles.text}>Halt Since : 4 Days</Text>
         
                <Text style={{color:'#0783cb',fontSize:10}}>Click Here to Track Live</Text>
               
                
                </View>
            
            
       
      </TouchableOpacity>
      </View>
   
      <View style={styles.shadow}>
      <TouchableOpacity style={styles.button}
       >
        
     
        <View style={{flex:1,alignItems:'center'}}>
              <Text style={{fontSize:16,color:'#000'}}>KL 12 AB 123</Text>
              <Text style={{fontSize:16,color:'#000'}}>Status: Online</Text>
            
              <Text style={styles.text}>LAst Tracked : Dec 17 , 2021 2:10 PM</Text>
                <Text style={styles.text}>Halt Since : 4 Days</Text>
         
                <Text style={{color:'#0783cb',fontSize:10}}>Click Here to Track Live</Text>
               
                
                </View>
       
      </TouchableOpacity>
      </View>

  </View>
  </ScrollView>
    
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
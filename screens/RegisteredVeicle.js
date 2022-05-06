import React,{useEffect,useState} from 'react';
import { Text, View,TextInput,StyleSheet,TouchableOpacity,ScrollView,Image,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Searchbar } from 'react-native-paper';
import * as api from "../services/auth";
import Loader from '../Components/Loader';


export default function Collection({navigation,route}) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
    getdata()
  }, []);
   
    async function getdata() {
      setLoading(true) 
        let response = await api.fetchdata(); 
         setList(response.data.response.LiveData)
        setLoading(false) 

    }
    data = list
  const filteredData = searchQuery ? data.filter(x =>
    x.Reg_No.toLowerCase().includes(searchQuery.toLowerCase())
  ) : data
  
 

  return (
    <View style={{flex:1}}>
               <Loader loading={loading} navigation={navigation} />
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
    
       <TouchableOpacity style={[styles.button,{height:60}]}
        onPress={() => {
                    
        navigation.navigate('Report Generation',{number:item.Reg_No,name:route.params.heading,icon:route.params.icon,icontype:route.params.icontype});
         }} 
        >
         
             <View>
                 <Text style={{fontSize:18}}>{item.Reg_No}</Text>
             
                 </View>
             <View>
                 
             </View>
             
        
       </TouchableOpacity>
   
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
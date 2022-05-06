
import React, { useState } from "react";
import {  StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/Feather';

const App = (props) => {
  const [tracking, setTracking] = useState(false);
  const [nonTracking, setNonTracking] = useState(false);
  return (
    <View style={styles.bottomviewcontainer}>
      
      
{props.screen=='mainscreen' ?
      
                <TouchableOpacity
                    style={[styles.button,{justifyContent:'center',width:'90%'}]}
                    onPress={() => {
                    
                      props.navigation.navigate('Vehicle Seperate List',{name:'All Vehicle'});
                  }}
                  > 
                 <Icon
                                  name={'format-list-bulleted'}
                                  size={20}
                                  color={'#fff'}
                            
                              />
                  <Text style={{color:'#fff'}}> List all Vehicle</Text>
                  </TouchableOpacity>
                  :
                  <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <View style={{width:'70%'}}>
                       <TouchableOpacity
                    style={[styles.button,{justifyContent:'center',width:'95%'}]}
                    onPress={() => {
                    
                      props.navigation.navigate('Vehicle Seperate List',{name:'List of all' + props.screen});
                  }}
                  > 
                 <Icon
                                  name={'format-list-bulleted'}
                                  size={20}
                                  color={'#fff'}
                            
                              />
                  <Text style={{color:'#fff'}}> List all {props.screen}</Text>
                  </TouchableOpacity>
                  </View>
                    <View style={{width:'20%'}}> 
                      <TouchableOpacity
                    style={[styles.button,{justifyContent:'center',width:'100%'}]}
                    onPress={() => {
                    
                      props.navigation.navigate('All Vehicle');
                  }}
                  > 
                 <FontAwesome5
                                  name={'refresh-ccw'}
                                  size={20}
                                  color={'#fff'}
                            
                              />
              
                  </TouchableOpacity>
                      </View>      
                 
                  </View>
             

}
            
                  <TouchableOpacity
                    style={[styles.button]}
                    onPress={() => {
                    
                      props.navigation.navigate('Tracking Vehicle');
                  }}
                  > 
                    <Icon
                                  name={'google-maps'}
                                  size={20}
                                  color={'#fff'}
                            
                              />
                  <Text style={{color:'#fff'}}> Tracking Vehicle</Text>
                  <Text style={{color:'#fff'}}> 8</Text>
                  </TouchableOpacity>
            
                  <TouchableOpacity
                  
                    style={[styles.button]}
                    onPress={() => {
                    
                      props.navigation.navigate('Non-Tracking Vehicle');
                  }}
                  > 
                    <Icon
                  name={'map-marker-off'}
                  size={20}
                  color={'#fff'}
            
              />
                  <Text style={{color:'#fff'}}> Non-Tracking Vehicle</Text>
                  <Text style={{color:'#fff'}}> 6</Text>
                  </TouchableOpacity>
                  </View>

  );
};

const styles = StyleSheet.create({
  bottomviewcontainer:{
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
  },
  button: {
    
    width: '90%',
    height: 38,
    borderRadius:10,
    marginTop:10,
    backgroundColor: '#000',
    elevation: 5,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-around'
},

});

export default App;
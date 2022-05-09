
import React, { useState } from "react";
import {  StyleSheet, Text, TouchableOpacity, View,Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/Feather';
import Trackingicons from './trackingicons';
import Nontrackingicon from './nontrackingicon';

const App = (props) => {
  const [tracking, setTracking] = useState(true);
  const [nonTracking, setNonTracking] = useState(true);
  return (
    <View style={styles.bottomviewcontainer}>
      
      
{props.screen=='mainscreen' ?

////Main screen button configuration
      <View style={{width:'100%',alignItems:'center'}}>

      
                <TouchableOpacity
                    style={[styles.button,{justifyContent:'center',width:'90%'}]}
                    onPress={() => {
                    
                      props.navigation.navigate('Vehicle Seperate List',{name:'List of All Vehicle',screen:'main'});
                  }}
                  > 
                 <Icon
                                  name={'format-list-bulleted'}
                                  size={20}
                                  color={'#fff'}
                            
                              />
                  <Text style={{color:'#fff'}}> List all Vehicle</Text>
                  </TouchableOpacity>
                  
                  
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

                  // First condition  check



                  :

                  <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <View style={{width:'70%'}}>
                       <TouchableOpacity
                    style={[styles.button,{justifyContent:'center',width:'95%'}]}
                    onPress={() => {
                    
                      props.navigation.navigate('Vehicle Seperate List',{name:'List of all ' + props.screen,screen:props.screen});
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
                  
             ////second condition check

}
{/* second condition check */}




{props.screen=='Tracking Vehicle' ?
tracking ?
 <View style={{width:'100%',alignItems:'center'}}>


             <TouchableOpacity
                    style={[styles.button,{borderBottomLeftRadius:0,borderBottomRightRadius:0}]}
                    onPress={()=>setTracking(false)}
                  > 
                    <Icon
                                  name={'google-maps'}
                                  size={20}
                                  color={'#fff'}
                            
                              />
                  <Text style={{color:'#fff'}}> Tracking Vehicle</Text>
                  <Text style={{color:'#fff'}}> 8</Text>
                  <Icon
                                  name={'chevron-down'}
                                  size={20}
                                  color={'#fff'}
                            
                              />
                  </TouchableOpacity>

                {/* Vehicle icons and Names of icon */}
                  
                   <Trackingicons/>
                {/* Vehicle icons and Names of icon */}
                  </View>

                  ////Second sub condition fail


            :
            <View style={{width:'100%',alignItems:'center'}}>
              <TouchableOpacity
            style={[styles.button]}
            onPress={()=>setTracking(true)}
          > 
            <Icon
                          name={'google-maps'}
                          size={20}
                          color={'#fff'}
                    
                      />
          <Text style={{color:'#fff'}}> Tracking Vehicle</Text>
          <Text style={{color:'#fff'}}> 8</Text>
          <Icon
                          name={'chevron-down'}
                          size={20}
                          color={'#fff'}
                    
                      />
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
          ////Third condition check on second condition fail 
          :props.screen=='Non-Tracking Vehicle' ?
          nonTracking ?
          <View style={{width:'100%',alignItems:'center'}}>


              <TouchableOpacity
                 style={[styles.button,{borderBottomLeftRadius:0,borderBottomRightRadius:0}]}
                 onPress={()=>setNonTracking(false)}
               > 
                 <Icon
                               name={'map-marker-off'}
                               size={20}
                               color={'#fff'}
                         
                           />
               <Text style={{color:'#fff'}}> Non-Tracking Vehicle</Text>
               <Text style={{color:'#fff'}}> 3</Text>
               <Icon
                               name={'chevron-down'}
                               size={20}
                               color={'#fff'}
                         
                           />
               </TouchableOpacity>


                {/* Vehicle icons and Names of icon */}
                                
                <Nontrackingicon/>
                {/* Vehicle icons and Names of icon */}


               </View>
               ///third condition sub fail
               :
               <View style={{width:'100%',alignItems:'center'}}>
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
               
               onPress={()=>setNonTracking(true)}
             > 
               <Icon
                             name={'map-marker-off'}
                             size={20}
                             color={'#fff'}
                       
                         />
             <Text style={{color:'#fff'}}> Non-Tracking Vehicle</Text>
             <Text style={{color:'#fff'}}> 8</Text>
             <Icon
                             name={'chevron-down'}
                             size={20}
                             color={'#fff'}
                       
                         />
             </TouchableOpacity>
         
               </View>
               /// third condition fail
                  :
             <View>

             </View>
            
            
            }
                 
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
iconstyle: {width: 26, height: 28},
});

export default App;
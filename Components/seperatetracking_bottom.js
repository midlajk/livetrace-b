// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React,{useState} from 'react';
import {StyleSheet, View, TouchableOpacity,Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Icons = (props) => {
    const {number,navigation, ...attributes} = props;
    const [buttonVisible, setButtonVisible] = useState(true);

  return (
    <View style={styles.viewstyle}>
                  <View style={{width:'100%',alignItems:'center'}}>


<TouchableOpacity
   style={buttonVisible?[styles.button,{borderBottomLeftRadius:0,borderBottomRightRadius:0}]:[styles.button]}
   onPress={()=>{buttonVisible?setButtonVisible(false):setButtonVisible(true)}}
 > 
   
 <Text style={{color:'#fff'}}> Live Tracking 
 {/* {number[0].Reg_No} */}
 </Text>
 <Icon
                                  name={'chevron-down'}
                                  size={20}
                                  color={'#fff'}
                            
                              />
 </TouchableOpacity>
 {buttonVisible?<View style={{width:'90%',backgroundColor:'#000',borderBottomLeftRadius:10,borderBottomRightRadius:10,padding:10}}>
                
              <Text style={{color:'#fff',width:'40%'}}>
                Last Tracked Time : 
              </Text > 
  
              <Text style={{color:'#fff',}}>
                 Speed :  --kmph
              </Text > 
       
            
              <Text style={{color:'#fff',}}>
               Status :  Online
              </Text > 
              <Text style={{color:'#fff'}}>
                 Location : Kerala,India
              </Text >
       
           
            
            
            </View>:<View>
                </View>}
 


 </View>
        <TouchableOpacity   style={[styles.button]}
    >
    <Text style={{color:'#fff'}}> Travel Reply</Text>
   </TouchableOpacity>
    <TouchableOpacity   style={[styles.button]}
    onPress={() => {  
      navigation.navigate('Report Screen',{ vehicle:number[0].Reg_No});
  }}>
    <Text style={{color:'#fff'}}> Report</Text>
   </TouchableOpacity>

  
            
            </View>
            
  );
};

export default Icons;

const styles = StyleSheet.create({
    viewstyle: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 40,
        justifyContent:'center',
         width: '100%',
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
        justifyContent:'space-evenly'
    },
});
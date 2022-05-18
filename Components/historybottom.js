// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React,{useState,useRef,useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity,Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';

const Icons = (props) => {
    const {navigation, setValue,data,value,pause,setPause,...attributes} = props;
    const [buttonVisible, setButtonVisible] = useState(true);
    const [pausebutton, setPausebutton] = useState(false);
    const [address, setAddress] = useState('');

    const pauseRef = useRef();
    const valueRef = useRef();
    pauseRef.current = pause;
    valueRef.current = value;
    var loopTimeout
    var kill;
useEffect(() => {
  loopTimeout = pause
}, [pause])
    function manageanimation(){
      loopTimeout = pauseRef.current
      if(loopTimeout==50||valueRef.current>data.length-2){
        if(valueRef.current>data.length-2){
                 setValue(0)
        setValue(0)
        setValue(0)
        setPausebutton(false)
        }
 
        return
      } else{
        setValue(va=>(va+1))
        setPause(1)  
          pauseanimation = setTimeout(() => {
              
            manageanimation();
            setPause(1)  
        }, 300);
        setPause(1)  
    }
      }
          useEffect(() => {
            getaddress()
          }, [value]);

    async function getaddress() {
    
        result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+data[value].latitude+`,`+data[value].longitude+`&key=AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ`)
        .then(res => res.json())
        .then((json) => {
          setAddress(json.results[0].formatted_address.split(',').slice(1,3))
            
     })
     
    }
  
  return (
    <View style={styles.viewstyle}>
                  <View style={{width:'100%',alignItems:'center'}}>


<TouchableOpacity
   style={buttonVisible?[styles.button,{borderBottomLeftRadius:0,borderBottomRightRadius:0}]:[styles.button]}
   onPress={()=>{buttonVisible?setButtonVisible(false):setButtonVisible(true);
  }}
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
                
              <Text style={{color:'#fff',width:'100%'}}>
                Tracked Time : {data[value].Time?data[value].Time:''}
              </Text > 
  
              <Text style={{color:'#fff',}}>
                 Speed :  {data[value].Speed} --kmph
              </Text > 
       
            
              <Text style={{color:'#fff',}}>
               Status : {data[value].Igni>0?'Online':'Offline'}
              </Text > 
              <Text style={{color:'#fff'}}>
                 Location : {address}
              </Text >
       
           <View style={{flexDirection:'row',justifyContent:'space-around',padding:5}}>
             <TouchableOpacity onPressIn={()=>{if(pausebutton)
             {
               setPausebutton(false)
               setPause(50) 
            }else{
              setPausebutton(true)
                    setPause(1)  
                  manageanimation()
    

            }

    }}>
                <Icon     
                                  name={pausebutton?'pause':'play'}
                                  size={20}
                                  color={'#fff'}
                            
                              />
             </TouchableOpacity>
          
                              <View style={{width:'90%'}}>
   <Slider     maximumValue={data.length-2} thumbStyle={{ height: 10, width: 10, backgroundColor: '#fff' }} onValueChange={c=>{setValue(c)}} value={valueRef.current} step={1} thumbTintColor={'#fff'} maximumTrackTintColor={'#fff'} 
     />
                              </View>
          </View>
              
            
            </View>:<View>
                </View>}
 


 </View>
       
  
            
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
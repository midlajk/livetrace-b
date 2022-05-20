// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React,{useRef,useEffect,useState} from 'react';
import {StyleSheet, View, Image,Text,Animated} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import {Slider} from 'react-native-elements';
import {Slider} from '@react-native-community/slider';
const Icons = (props) => {
    const [time, setTime] = useState();
    var b= [1,2,3,4,5,6,7,8,9]

var c=0
function change(){
       if(c<b.length){
    setTimeout(() => {
          c++
          setTime(c)
          change()
        
    }, 100);
    } else
    {
            return
        }
}
  return (
    <View style={{width:'90%',backgroundColor:'#fff',borderBottomLeftRadius:10,borderBottomRightRadius:10,padding:10,bottom:-310}}>
          <Text>hi</Text>
                
          <Slider onValueChange={()=>console.log('value changed')} onSlidingComplete={()=>console.log('complete')} onSlidingStart={()=>{console.log('start')}}  maximumValue={b.length} thumbStyle={{ height: 10, width: 10, backgroundColor: '#000' }} value={time} step={1}/>
   <TouchableOpacity onPress={change}><Text>
       click</Text></TouchableOpacity>
              
            </View>
            
  );
};

export default Icons;

const styles = StyleSheet.create({
    iconstyle: {width: 26, height: 28},
});
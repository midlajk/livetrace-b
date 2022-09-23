// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import * as api from "../services/auth";
import  {useAuth}  from "../Providers/Provider";
import React, {useState, createRef,useEffect}  from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../Components/Loader';
import DropDownv from '../Components/dropdown';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Vehicle Tracking is not live in App', value: '1' },
  { label: 'Emergency Alarm Off Request', value: '2' },
  { label: 'Device not Working/ Wiring Complaint', value: '3' },
  { label: 'Enquiry For Recharge', value: '4' },
  { label: 'Request a call back', value: '5' },
  { label: 'Others ( add detailed comments)', value: '6' },

];


const RegisterScreen = (props) => {

  const [vehicle, setVehicle] = useState('')
    const [imei, setImei] = useState('')
  const [userContact, setUserContact] = useState('');
  const [username, setusername] = useState('');
  const [deviceFault, setDeviceFault] = useState('Select Fault *');
  const [comment, setComment] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [isvehivle, setisVehicle] = useState(false);

  const [loading, setLoading] = useState(false); 
async function handleSubmitButton (state) {
 if (!username) {
      alert('Please fill User Name');
      return;
    }
    if(!isvehivle){
      alert('Please Select Valid Vehicle Number');
      return;
    }
    if (!userContact) {
      alert('Please fill User Contact');
      return;
    }

    if (!vehicle) {
      alert('Please select a Vehicle Number');
      return;
    }
    if (deviceFault == 'Select Fault *') {
      alert('Please select Device Fault');
      return;
    }
    let response = await api.report({
      name:username,
      mobile:userContact,
      vehicle:vehicle,
      imei:imei,
      fault:deviceFault,
      comment:comment
    }) 
   
    // alert(response.description);
    Alert.alert(  
      'Alert',  
      response.description + ' with Request number '+ response.RequestNo,

      [  
           
          {text: 'OK', onPress: () => {
            setVehicle('')
            setImei('')
            setusername('')
            setUserContact('')
            setDeviceFault('Select Fault *')
            setComment('')

          }},  
      ]  
  );  
    
  };

  return (
    <View style={{flex: 1,}}>
      <Loader loading={loading} navigation={props.navigation} />
      <View
        style={{marginTop:'15%'}}
        keyboardShouldPersistTaps="handled"
       >
        <View style={{alignItems: 'center'}}>
         
          <Text style={{color: 'red'}}>Fields marked with * are mandatory</Text>
        </View>
        <KeyboardAvoidingView enabled>
        <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(name) => setusername(name)}
              placeholder="Customer Name *"
              keyboardType='default'
              returnKeyType="next"
              value={username}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserContact) => setUserContact(UserContact)}
              placeholder="Contact Number *"
              keyboardType="phone-pad"
              returnKeyType="next"
              value={userContact}
            />
          </View>
          <DropDownv setVehicle={setVehicle} setImei={setImei} vehicle={vehicle} setisVehicle={setisVehicle}/>
      
          <Dropdown
          style={[{ borderColor:'#000',
          borderWidth:1,
          width:'83%',
          marginTop:20,
          alignSelf:'center',
          paddingLeft: 15,
          paddingRight: 15,
          height:50,
        }, isFocus && { borderColor: 'blue' }]}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? deviceFault : '...'}
          value={deviceFault}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setDeviceFault(item.label);
            setIsFocus(false);
          }}
       
        />
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(Comment) => setComment(Comment)}
              placeholder="Comment"
              keyboardType="default"
              returnKeyType="send"
              value={comment}

            />
          </View>
     
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>Submit Report</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        <Text style={{margin:20,textAlign:'center'}}> Report any issues here</Text>
      </View>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 50,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
  },
  buttonStyle: {
    backgroundColor: '#000',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 50,
    justifyContent:'center',
    alignItems: 'center',

    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    height:50,

    borderColor: '#000',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});
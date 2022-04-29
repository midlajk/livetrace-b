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
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../Components/Loader';

const RegisterScreen = (props) => {
  async function checkuser() {
    return await AsyncStorage.getItem('email').then((response) => {

        return response
    });
 }
 useEffect(() => {
  checkuser()
  }, [])



  

  const {navigation} = props;
  const {navigate} = navigation;
  const [error, setError] = useState(null);


  const [userName, setUserName] = useState('');
  const [userContact, setUserContact] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [deviceFault, setDeviceFault] = useState('');
  const [comment, setComment] = useState('');

  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  

  const nameInputRef = createRef();
  const userContactRef = createRef();
  const vehicleNumberRef = createRef();
  const serialNumberRef = createRef();
  const deviceFaultRef = createRef();


async function handleSubmitButton (state) {

    if (!userName) {
      alert('Please fill User Name');
      return;
    }

    if (!userContact) {
      alert('Please fill User Contact');
      return;
    }

    if (!vehicleNumber) {
      alert('Please fill Vehicle Number');
      return;
    }

    if (!serialNumber) {
      alert('Please fill Serial Number');
      return;
    }
    if (!deviceFault) {
      alert('Please fill Device Fault');
      return;
    }
    //Show Loader
    setLoading(true);
    setTimeout(() => {
      Alert.alert('Error','Report submitted successfully');
      setLoading(false)
    }, 1000); 

  
   
  };

  return (
    <View style={{flex: 1,}}>
      <Loader loading={loading} />
      <ScrollView

        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
          marginTop:'15%'
        }}>
        <View style={{alignItems: 'center'}}>
         
          <Text style={{color: 'red'}}>Fields marked with * are mandatory</Text>
        </View>
        <KeyboardAvoidingView enabled>
   
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserName) => setUserName(UserName)}
              placeholder="Customer Name *"
              keyboardType="default"
              ref={nameInputRef}
              returnKeyType="next"
           
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserContact) => setUserContact(UserContact)}
              placeholder="Contact Number *"
              keyboardType="phone-pad"
              ref={userContactRef}
              returnKeyType="next"
           
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(VehicleNumber) => setVehicleNumber(VehicleNumber)}
              placeholder="Vehicle Number *"
              keyboardType="name-phone-pad"
              ref={vehicleNumberRef}
              returnKeyType="next"
           
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(SerialNumber) => setSerialNumber(SerialNumber)}
              placeholder="Device Serial Number *"
              keyboardType="name-phone-pad"
              ref={serialNumberRef}
              returnKeyType="next"
           
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(DeviceFault) => setDeviceFault(DeviceFault)}
              placeholder="Device Fault *"
              keyboardType="default"
              ref={deviceFaultRef}
              returnKeyType="next"
           
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(Comment) => setComment(Comment)}
              placeholder="Comment"
              keyboardType="default"
              returnKeyType="send"
           
            />
          </View>
     
         {errortext != '' ? (
            <Text style={styles.errorTextStyle}>
              {errortext}
            </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>Submit Report</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        <Text style={{margin:20,textAlign:'center'}}> Report any issues here</Text>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
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

    borderColor: '#dadae8',
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
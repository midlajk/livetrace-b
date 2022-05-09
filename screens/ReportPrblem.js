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
  VariantsBox
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../Components/Loader';
import DropDown from '../Components/dropdown';


const RegisterScreen = (props) => {

  const {navigation} = props;
  const {navigate} = navigation;
  const [error, setError] = useState(null);

  const [userContact, setUserContact] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');

  const [deviceFault, setDeviceFault] = useState('');
  const [comment, setComment] = useState('');

  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  

  const userContactRef = createRef();
 

async function handleSubmitButton (state) {

    if (!userContact) {
      alert('Please fill User Contact');
      return;
    }

    if (!vehicleNumber) {
      alert('Please fill Vehicle Number');
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
      <Loader loading={loading} navigation={navigation} />
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
              onChangeText={(UserContact) => setUserContact(UserContact)}
              placeholder="Contact Number *"
              keyboardType="phone-pad"
              ref={userContactRef}
              returnKeyType="next"
           
            />
          </View>
         <DropDown/>
      
         
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
      </View>
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
// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import * as api from "../services/auth";
import  {useAuth}  from "../Providers/Provider";
import React, {useState, createRef,} from 'react';
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


  const {navigation} = props;
  const {navigate} = navigation;
  const [error, setError] = useState(null);


  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  

  const emailInputRef = createRef();
  const passwordInputRef = createRef();

async function handleSubmitButton (state) {
    
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }

    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    //Show Loader
    setLoading(true);
   
    try {
      let response = await api.login(userEmail,userPassword);
      dataparse = JSON.parse(response.config.data)
      logindata = dataparse.request
      await AsyncStorage.setItem('Username', logindata.userMailid);
      await AsyncStorage.setItem('Password', logindata.password);

    
     
      //check if username is null

      if (logindata){
        setLoading(false)
                  setTimeout(() => {
                    navigation.replace('App Screens');
                }, 1000);

                
           
      }
      else console.log('error monu')
  } catch (error) {
      setError(error.message);
  
                      setTimeout(() => {
                        Alert.alert('Error','Wrong Username / Password!');
                      }, 100);       
            setLoading(false)
  }
  
   
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Loader loading={loading} />
      <ScrollView

        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
          marginTop:'20%'
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('.././Assets/logowithname.png')}
            style={{
              width: '50%',
              height: 100,
              resizeMode: 'contain',
              margin: 30,
            }}
          />
          <Text>Live Trace login</Text>
        </View>
        <KeyboardAvoidingView enabled>
   
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              underlineColorAndroid="#f000"
              placeholder="Enter email"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword) =>
                setUserPassword(UserPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
             
              blurOnSubmit={false}
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
            <Text style={styles.buttonTextStyle}>Login</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        <Text style={{margin:20,textAlign:'center'}}> Register Your Fleet Or Vehicle With Us To Use The Application</Text>
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
    backgroundColor: '#f7951d',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 50,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 30,
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
    borderRadius: 30,
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
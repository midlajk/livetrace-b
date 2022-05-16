// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React,{useState} from 'react';
import {StyleSheet, View, Modal, TouchableOpacity,Text,TextInput} from 'react-native';
import DatePicker from 'react-native-date-picker'
const Loader = (props) => {
  const {picker,setPicker,fromdate,setFromdate,toDate,setToDate,navigation, ...attributes} = props;
  const [open, setOpen] = useState(false)
  const [opens, setOpens] = useState(false)

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={picker}
      onRequestClose={() => {
        setPicker(false)
    }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
           <Text style={{fontSize:16}}>
                  Pick dates to filter
                </Text>
          <View style={{alignItems:'center',width:'100%'}}>
               
                <View>
                   <TouchableOpacity style={styles.picbutton} onPress={()=>setOpen(true)}>
                  <Text>Pick From Date
                    </Text> 
                    <Text>{fromdate.toString().slice(4,15)}
                    </Text> 
                  </TouchableOpacity>
                </View>
                <View>
                   <TouchableOpacity style={styles.picbutton} onPress={()=>setOpens(true)}>
                  <Text>Pick To Date </Text> 
                  <Text>{toDate.toString().slice(4,15)}
                    </Text> 
                  </TouchableOpacity>
                </View>
               
   
          </View>
          <View style={{alignItems:'center',width:'100%',}}>
          <TouchableOpacity style={[styles.activityIndicator,{backgroundColor:'#000'}]} 
          onPress={()=>setPicker(false)}
          >
            <Text style={{color:'#fff'}}>
              Submit</Text>
        </TouchableOpacity>
                   <TouchableOpacity style={styles.activityIndicator} onPress={()=>setPicker(false)}>
            <Text>
              Close</Text>
        </TouchableOpacity>
          </View>
          <View>
          <DatePicker
        modal
        mode='date'
        open={open}
        date={fromdate}
        onConfirm={(date) => {
          setOpen(false)
          setFromdate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
         <DatePicker
        modal
        mode='date'
        open={opens}
        date={toDate}
        onConfirm={(date) => {
          setOpens(false)
          setToDate(date)
        }}
        onCancel={() => {
          setOpens(false)
        }}
      />
          </View>
 
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 350,
    width: '70%',
    borderRadius: 10,
    alignItems:'center',
    paddingTop:20
  },
  activityIndicator: {
    alignItems: 'center',
    height: 40,
    width:'80%',
    alignSelf:'center',
    borderRadius:16,
    marginTop:20,
    backgroundColor:'#ccc',
    justifyContent:'center'

    
  },picbutton:{
    marginTop:10,
    borderRadius:10,
    padding:10,
    backgroundColor:'#f7951d',
    width:200,
    alignItems:'center'
  }
});
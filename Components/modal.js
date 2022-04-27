// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {StyleSheet, View, Modal, ActivityIndicator,Text} from 'react-native';

const Loader = (props) => {

  return (
    <Modal
          animationType="slide"
          transparent={true}
          visible={props.loading}
          onRequestClose={() => {
            console.log("back");
          }}
          onBackButtonPress={() => this.visible(false)}
        >
         
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
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
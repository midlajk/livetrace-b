import * as React from 'react';
import { Text, View ,TouchableOpacity,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Non-Tracking Vehicles Map View!</Text>
      <TouchableOpacity
                  style={styles.full}

                > 
                
                    <FontAwesome5
                                name={'square'}
                                size={25}
                                color={'#fff'}
                           
                            />

                 </TouchableOpacity>
                 <TouchableOpacity
                  style={styles.refresh}

                > 
                
                    <FontAwesome5
                                name={'refresh-ccw'}
                                size={20}
                                color={'#fff'}
                           
                            />

                 </TouchableOpacity>
                 <TouchableOpacity
                  style={styles.info}

                > 
                
                    <FontAwesome5
                                name={'info'}
                                size={20}
                                color={'#fff'}
                           
                            />

                 </TouchableOpacity>
      <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    
                    navigation.navigate('Tracking Screen',{ name: 'Non-Tracking Vehicle' });
                }}
                > 
                
                <Icon
                                name={'bus-multiple'}
                                size={30}
                                color={'#fff'}
                           
                            />

                 </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
 
  button: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#005eaa',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 100,
      right: 10,
      elevation: 5,
  },
  refresh: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#d1d2d4',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 100,
    right: 10,
  
},
full: {
  width: 40,
  height: 40,
  borderRadius: 10,
  backgroundColor: '#d1d2d4',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 50,
  right: 10,

},
info: {
  width: 40,
  height: 40,
  borderRadius: 10,
  backgroundColor: '#005eaa',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 150,
  right: 10,

},
  
})

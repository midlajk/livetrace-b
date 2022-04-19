import * as React from 'react';
import { Text, View,TouchableOpacity,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconb from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ReportScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'space-around',flexDirection:'row',padding:20,flexWrap: 'wrap',}}>
      <TouchableOpacity style={{width:'30%',height:100,backgroundColor:'#d9dcdc',borderRadius:16,marginBottom:10,justifyContent:'center',alignItems:'center'}}>
                        <Icon
                                name={'sync-outline'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>AOI IN/OUT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Iconb
                                name={'file-alert-outline'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>Consolidated</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Iconb
                                name={'file-chart-outline'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text style={{textAlign:'center'}}>Current Summary</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Icon
                                name={'calendar-outline'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>Day wise</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Iconb
                                name={'bus-stop'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>Halt</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Icon
                                name={'timer-outline'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>Idiling</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Icon
                                name={'key-outline'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text style={{textAlign:'center'}}>Ignition ON/OFF</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Iconb
                                name={'truck'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>J1939</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Iconb
                                name={'usb-flash-drive-outline'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>OBD II</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Icon
                                name={'speedometer-outline'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>Over Speed</Text>
                            </TouchableOpacity> 
        <TouchableOpacity style={styles.button}>
        <Icon
                                name={'stop-circle-outline'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>Panic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Icon
                                name={'location-outline'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>Tracking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Iconb
                                name={'arrow-up-down-bold-outline'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>Trip</Text>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
 
  button: {
    width:'30%',height:100,backgroundColor:'#d9dcdc',borderRadius:16,marginBottom:10,justifyContent:'center',alignItems:'center'

  }

})
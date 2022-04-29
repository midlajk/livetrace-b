import  React,{useState,useEffect} from 'react';
import { Text, View,TouchableOpacity,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconb from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ReportScreen({navigation,route}) {
  const [initial, setInitial] = useState('Click here to select vehicle');
  useEffect(() => {
    getdata()
  }, []);
   
    async function getdata() {
     
     if(route.name != 'Report'){
        await setInitial(route.params.vehicle)
      }

    }
  return (
    <View style={{ flex: 1, justifyContent: 'space-around',flexDirection:'row',padding:20,flexWrap: 'wrap',}}>
      <TouchableOpacity style={{width:'30%',height:100,backgroundColor:'#fff',borderRadius:16,marginBottom:10,justifyContent:'center',alignItems:'center',elevation:3}}
        onPress={() => {
                    
          navigation.navigate('Report Generation',{number:initial, name: 'AOI IN/OUT',icon:'sync-outline',icontype:"Icon" });
      }}>
                        <Icon
                                name={'sync-outline'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>AOI IN/OUT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={() => {
                    
          navigation.navigate('Report Generation',{number:initial, name: 'Consolidated',icon:'file-alert-outline',icontype:"Iconb" });
      }}>
      <Iconb
                                name={'file-alert-outline'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>Consolidated</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => {
                    
        navigation.navigate('Report Generation',{number:initial, name: 'Current Summary',icon:'file-chart-outline',icontype:"Iconb" });
    }}>
      <Iconb
                                name={'file-chart-outline'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text style={{textAlign:'center'}}>Current Summary</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => {
                    
        navigation.navigate('Report Generation',{number:initial, name: 'Day wise',icon:'calendar-outline',icontype:"Icon" });
    }}>
      <Icon
                                name={'calendar-outline'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>Day wise</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => {
                    
        navigation.navigate('Report Generation',{number:initial, name: 'Halt',icon:'bus-stop',icontype:"Iconb" });
    }}>
      <Iconb
                                name={'bus-stop'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>Halt</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => {
                    
        navigation.navigate('Report Generation',{number:initial, name: 'Idiling',icon:'timer-outline',icontype:"Icon" });
    }}>
      <Icon
                                name={'timer-outline'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>Idiling</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
       onPress={() => {
                    
        navigation.navigate('Report Generation',{number:initial, name: 'Ignition ON/OFF',icon:'key-outline',icontype:"Icon" });
    }}>
      <Icon
                                name={'key-outline'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text style={{textAlign:'center',padding:5}}>Ignition ON/OFF</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => {
                    
        navigation.navigate('Report Generation',{number:initial, name: 'J1939',icon:'truck',icontype:"Iconb" });
    }}>
      <Iconb
                                name={'truck'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>J1939</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => {
                    
        navigation.navigate('Report Generation',{number:initial, name: 'OBD II',icon:'usb-flash-drive-outline',icontype:"Iconb" });
    }}>
      <Iconb
                                name={'usb-flash-drive-outline'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>OBD II</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => {
                    
        navigation.navigate('Report Generation',{number:initial, name: 'Over Speed',icon:'speedometer-outline',icontype:"Icon" });
    }}>
      <Icon
                                name={'speedometer-outline'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>Over Speed</Text>
                            </TouchableOpacity> 
        <TouchableOpacity style={styles.button}
        onPress={() => {
                    
          navigation.navigate('Report Generation',{number:initial, name: 'Panic',icon:'stop-circle-outline',icontype:"Icon" });
      }}>
        <Icon
                                name={'stop-circle-outline'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>Panic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={() => {
                    
          navigation.navigate('Report Generation',{number:initial, name: 'Tracking',icon:'location-outline',icontype:"Icon" });
      }}>
        <Icon
                                name={'location-outline'}
                                size={40}
                                color={'#000'}
                           
                            />
                            <Text>Tracking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
         onPress={() => {
                    
          navigation.navigate('Report Generation',{number:initial, name: 'Trip',icon:'arrow-up-down-bold-outline',icontype:"Iconb" });
      }}>
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
    width:'30%',height:100,backgroundColor:'#fff',borderRadius:16,marginBottom:10,justifyContent:'center',alignItems:'center',elevation:3

  }

})
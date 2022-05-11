
import React, { useState,useEffect } from "react";
import {  StyleSheet, Text, TouchableOpacity, View,FlatList,TextInput } from "react-native";
import  b from "../configuration/Datahandler";


const App = (props) => {
    const [vehicle, setvehicle] = useState({});

    useEffect(() => {
        setvehicle(b.getVehicle())
   
      }, []);
  const [filteredVehicle, setFilterVehicle] = useState([]);
  const [vehiclename, setVehiclename] = useState('');

    const filterVehicle = value => {
    
        let filterData =
        vehicle && vehicle.length > 0
            ? vehicle.filter(data =>
                data.Reg_No.toLowerCase().includes(value.toLowerCase()),
              )
            : [];
            setFilterVehicle([...filterData]);
        setVehiclename(value);
           
      };
      const onVehicleSelected = value => {
        setVehiclename(value);
        setFilterVehicle([]);
      };
  return (
    <View>
                  <View style={styles.SectionStyle}>
          <TextInput
                  value={vehiclename}
                  placeholder="Select Vehicle Number"
                  style={styles.inputStyle}
                  onChangeText={filterVehicle}
       
                  keyboardType="name-phone-pad"
                />
          </View>
             <FlatList
          style={{marginLeft: 35,
          marginRight: 35,maxHeight:180}}
                  data={filteredVehicle}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      onPress={() => onVehicleSelected(item.Reg_No)}
                      style={{padding:10,borderColor:'#000',borderWidth:.3}}>
                  
                        <Text
                          >
                          {item?.Reg_No || ''}
                        </Text>
               
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.Reg_No}
                />  
         
             
    </View>
  );
};

const styles = StyleSheet.create({
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
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


});

export default App;
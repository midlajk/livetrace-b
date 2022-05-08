
import React, { useState } from "react";
import {  StyleSheet, Text, TouchableOpacity, View,FlatList,TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/Feather';
import { ScrollView } from "react-native-gesture-handler";
var items = [
    {
      id: 1,
      name: 'JavaScript',
    },
    {
      id: 2,
      name: 'Java',
    },
    {
      id: 3,
      name: 'Ruby',
    },
    {
      id: 4,
      name: 'React Native',
    },
    {
      id: 5,
      name: 'PHP',
    },
    {
      id: 6,
      name: 'Python',
    },
    {
      id: 7,
      name: 'Go',
    },
    {
      id: 8,
      name: 'Swift',
    },
  ];
const App = (props) => {
    const { ...attributes} = props;

  const [filterBankList, setFilterBankList] = useState([]);
  const [bankName, setBankName] = useState('');

    const filterBanks = value => {
    
        let filterData =
        items && items.length > 0
            ? items.filter(data =>
                data.name.toLowerCase().includes(value.toLowerCase()),
              )
            : [];
        setFilterBankList([...filterData]);
        setBankName(value);
           
      };
      const onBankSelected = value => {
        setBankName(value);
        setFilterBankList([]);
      };
  return (
    <View>
                  <View style={styles.SectionStyle}>
          <TextInput
                  value={bankName}
                  placeholder="Select Bank Name"
                  style={styles.inputStyle}
                  onChangeText={filterBanks}
                  keyboardType="name-phone-pad"
                />
          </View>
          <View>
             <FlatList
          style={{marginLeft: 35,
          marginRight: 35,maxHeight:180}}
                  data={filterBankList}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      onPress={() => onBankSelected(item?.name)}
                      style={{padding:10,borderColor:'#000',borderWidth:.3}}>
                  
                        <Text
                          >
                          {item?.name || ''}
                        </Text>
               
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.id}
                />  
          </View>
         
             
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

import React, { useState } from "react";
import {  StyleSheet, Text, TouchableOpacity, View,FlatList,TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/Feather';
import { ScrollView } from "react-native-gesture-handler";
var items = [
    {
      id: 1,
      name: 'KL 12 Ab 6698',
    },
    {
      id: 2,
      name: 'Kl 73 fh 678',
    },
    {
      id: 3,
      name: 'KL 32 hg 788',
    },
    {
      id: 4,
      name: 'KL 32 hg9 788',
    },
    {
      id: 5,
      name: 'KL 2 hg 788',
    },
    {
      id: 6,
      name: 'KL 32 hg 88',
    },
    {
      id: 7,
      name: 'KL 32 788',
    },
    {
      id: 8,
      name: 'KL 2 88',
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
                  placeholder="Select Vehicle Number"
                  style={styles.inputStyle}
                  onChangeText={filterBanks}
       
                  keyboardType="name-phone-pad"
                />
          </View>
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
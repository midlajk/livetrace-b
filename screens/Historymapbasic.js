import React,{useState,useEffect} from  'react';
import { Text, View ,TouchableOpacity,StyleSheet} from 'react-native';
import {Data} from './data'
import * as api from "../services/auth";
import Loader from '../Components/Loader';

import MapTopButton from '../Components/maptopscreen';
import Mapview from './Historymap';
import BotomButton from '../Components/historybottom';

export default function Tracking({navigation,route}) {
  const [value, setValue] = useState(0);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [pause, setPause] = useState(0);
  const [list, setList] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true) 
    getdata()
    setTimeout(() => {
      getdata()
    }, 100);
  }, []);
   
    async function getdata() {
      setLoading(true) 
      let response = await api.history(); 
      setList(response)
      setLoading(false) 

    }
    function isObjectEmpty(obj) {
      var name;
      for (name in obj) {
        return false;
      }
      return true;
    }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                              <Loader loading={loading} navigation={navigation} />

                              {isObjectEmpty(list)?<View></View>:<Mapview i={value} data={list.HistoryData} navigation={navigation} />}
                     <MapTopButton getdata={getdata} navigation={navigation} setButtonVisible={setButtonVisible} buttonVisible={buttonVisible}/>

                     {isObjectEmpty(list)?<View></View>:buttonVisible?<BotomButton data={list.HistoryData}  navigation={navigation} setValue={setValue}  value={value} setPause={setPause} pause={pause}/>:<View></View>}
    
     
    </View>
  );
}

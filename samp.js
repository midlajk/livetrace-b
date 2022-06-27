// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React,{useState,useRef,useEffect,createRef} from 'react';
import {StyleSheet, View, TouchableHighlight,Text} from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker,Callout } from 'react-native-maps';
import Markericon from './markericon';

const Mapview = (props) => {
    const {list,navigation, ...attributes} = props;
      const mapRef = useRef();
      useEffect(() => {
        if (mapRef.current) {
          // list of _id's must same that has been provided to the identifier props of the Marker
          mapRef.current.fitToSuppliedMarkers(list.map(({ Reg_No }) => Reg_No),{ edgePadding: 
            {top: 150,
              right: 100,
              bottom: 100,
              left: 100},
              animated: true,
      
          });
        }
      }, [list]);
  return (
    <View style={styles.container}>
    <MapView
        ref={mapRef} 
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      initialRegion={{
        latitude: 11.949263,
        longitude: 75.609764,
        latitudeDelta: 1,
        longitudeDelta: 1,
      }}
    >
      {list.map((marker,index)=>{
      return(
      <Marker 
      
      key={index}
      identifier={marker.Reg_No}
      coordinate ={{
       latitude: marker.Lat,
       longitude: marker.Lon,
      }}
      rotation={parseFloat(marker.Course)}
      title={marker.Reg_No+" , "+marker.V_Type}
      description="Tap to track live"
      onCalloutPress={() => {
                    
        navigation.navigate('Individual Map',{ vehicle:marker.Reg_No,imei:marker.imei});
    }}>
         
        <Markericon vehicle={marker.V_Type} ignition={marker.Igni} speed={marker.Speed}  />
               
           </Marker>

      )
    })}
    </MapView>
  </View> 
            
  );
};


export default Mapview;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
      bubble: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 150,
      },
      // Arrow below the bubble
      arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32,
      },
      arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5,
        // marginBottom: -15
      },
});




const [data, setdata] = useState([]);
  const [distance, setdistance] = useState(0);
  const [runtime, setRunningtime] = useState(0);
  const [idtime, setidletime] = useState(0);
  const [overspeeddis, setOverspeeddistance] = useState(0);
  const [avgspeed, setaveragespeed] = useState(0);
  const [speed, highestspeed] = useState(0);
  const [idlepercentage, setIdleperc] = useState(0);

 runningtime = 0
 idletime = 0
 idlecount= 0

  async function getdata(){
  setdata([])
  props.setLoading(true) 
  let items = props.data;
  let i = 0;
  await new Promise(async (resolve, reject) => {
  try {
    var dis = await getPathLength(props.data);
    setdistance(dis/1000) 
    var newdata = props.data.filter(function (el) {
      return el.Speed > 50
    });
    var seepddis = await getPathLength(newdata);
    setOverspeeddistance(seepddis/1000) 
    let sum = props.data.reduce(function(prev, current) {
      return prev + +current.Speed
    }, 0);
    const highestMaxScore = Math.max(...props.data.map(data => data.Speed));
    highestspeed(highestMaxScore)
    if(sum>0){
      setaveragespeed(sum/items.length)
    }else{
      setaveragespeed(0)
    }
    
      if (items.length == 0) return resolve();
      let funSync = async () => {
          if (i == items.length) 
          {   
            if(onarray.length>0){
             await setstart(items[onarray[0]],'on')
             await setend(items[onarray[onarray.length-1]],'on')
             onpushdata.starttime = items[onarray[0]].Time
             onpushdata.endtime = items[onarray[onarray.length-1]].Time
            timediff = new Date(onpushdata.endtime)-new Date(onpushdata.starttime)
            onpushdata.timediff=(timediff/60000).toFixed(2)
            onpushdata.igni='On'
            runningtime = runningtime + (timediff/60000)
            setdata(old=>[...old,onpushdata])

             }
             if(offarray.length>0){
              await setstart(items[offarray[0]],'off')
              await setend(items[offarray[offarray.length-1]],'off')
              offpushdata.starttime = items[offarray[0]].Time
              offpushdata.endtime = items[offarray[offarray.length-1]].Time
             timediff = new Date(offpushdata.endtime)-new Date(offpushdata.starttime)
             offpushdata.timediff=(timediff/60000).toFixed(2)
             offpushdata.igni='Off'
             idletime = idletime + (timediff/60000)
             setdata(old=>[...old,offpushdata])
             idlecount++
           }
           setRunningtime(runningtime)
           setidletime(idletime)
           setIdleperc((idlecount/props.data)*100)
            props.setLoading(false)
            resolve();
          }else if(items[i].Igni>=1){

            if(offarray.length>0){
              await setstart(items[offarray[0]],'off')
              await setend(items[offarray[offarray.length-1]],'off')
              offpushdata.starttime = items[offarray[offarray]].Time
              offpushdata.endtime = items[offarray[offarray.length-1]].Time
             timediff = new Date(offpushdata.endtime)-new Date(offpushdata.starttime)
             offpushdata.timediff=(timediff/60000).toFixed(2)
             offpushdata.igni='Off'
             idletime = idletime + (timediff/60000)
             idlecount++
             setdata(old=>[...old,offpushdata])
             offpushdata={}
            offarray=[]
           }
          
            await seton(i)
          i++
          setTimeout( function() {
            funSync();
        }, 0 );
    

          }else{


              if(onarray.length>0){
               await setstart(items[onarray[0]],'on')
               await setend(items[onarray[onarray.length-1]],'on')
               onpushdata.starttime = items[onarray[0]].Time
              onpushdata.endtime = items[onarray[onarray.length-1]].Time
              timediff = new Date(onpushdata.endtime)-new Date(onpushdata.starttime)
              onpushdata.timediff=(timediff/60000).toFixed(2)
               onpushdata.igni='On'
               runningtime = runningtime + (timediff/60000)

              setdata(old=>[...old,onpushdata])
              onpushdata={}
              onpushdata=[]
            }
            
            await setoff(i)

            i++
            setTimeout( function() {
              funSync();
          }, 0 );
          

          }


      }
      funSync();
  } catch (e) {
      reject(e);
  }
});
  
   
          

} 
onpushdata={}
onarray=[]
async function seton(i){
 await onarray.push(i)

}
offpushdata={}
offarray=[]
async function setoff(i){
 await offarray.push(i)


}

async function setstart(props,igni){
      props.Speed==null? '':
          result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+props.latitude+`,`+props.longitude+`&key=AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ`)
          .then(res => res.json())
          .then((json) => {
            if(igni=='off'){
              offpushdata.startaddress = json.results[0].formatted_address.split(' ').slice(1,20)

            }else{
              onpushdata.startaddress = json.results[0].formatted_address.split(' ').slice(1,20)

            }
              
          })
    }
    async function setend(props,igni){
      props.Speed==null? '':
          result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+props.latitude+`,`+props.longitude+`&key=AIzaSyB4Zi4r1J4WhBzLxop9rVY9czHDtI_BOEQ`)
          .then(res => res.json())
          .then((json) => {
            if(igni=='off'){
              offpushdata.endaddress = json.results[0].formatted_address.split(' ').slice(1,20)

            }else{
              onpushdata.endaddress = json.results[0].formatted_address.split(' ').slice(1,20)

            }
              
          })
    }
useEffect(() => {
  props.setLoading(true)
 getdata()
 
}, [1]);
    return (
      <View style={{ flex: 1, justifyContent: 'center',marginTop:20}}>
      <FlatList
            data={data}
            renderItem={({ item }) => (

            <View style={styles.shadow}>
           <View style={styles.button}
          
          >
    
        
                <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
                <Text style={styles.text}>Ignition Status : </Text>
                  <Text style={styles.text}>{item.igni}</Text>
                  <Text style={styles.text}>Start Time : </Text>
                  <Text style={styles.text}>{item.starttime}</Text>
                  <Text style={styles.text}>Start Address  </Text>
                  <Text style={styles.text}>{item.startaddress}</Text>
                  <Text style={styles.text}>End Time</Text>
                  <Text style={styles.text}>{item.endtime}</Text>
                  <Text style={styles.text}>End Address</Text>
                  <Text style={styles.text}>{item.endaddress}</Text>
                  <Text style={styles.text}> Total Duration</Text>
                  <Text style={styles.text}>{item.timediff} mins</Text>
                  <Text style={styles.text}>Total Distance</Text>
            <Text style={styles.text}>{distance.toFixed(3)}</Text>
                  <Text style={styles.text}>Total Runing Time</Text>
                  <Text style={styles.text}>{parseInt(runtime)} </Text>
                  <Text style={styles.text}>Average Speed</Text>
                  <Text style={styles.text}>{avgspeed.toFixed(2)} </Text>
                  <Text style={styles.text}>Total Idling Time</Text>
                  <Text style={styles.text}> {parseInt(idtime)} </Text>
                  <Text style={styles.text}>Total Overspeed Distance</Text>
                  <Text style={styles.text}> {overspeeddis.toFixed(3)} </Text>
                  <Text style={styles.text}>Idle Percentage</Text>
                  <Text style={styles.text}>{idlepercentage} % </Text>
                  <Text style={styles.text}>Max Speed</Text>
                  <Text style={styles.text}>{speed} </Text>
                    </View>
          
           </View>
          </View>
            )}
            keyExtractor={(item, Reg_No) => Reg_No.toString()}/>

    
      </View>
    );
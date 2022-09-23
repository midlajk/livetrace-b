import React,{useEffect,useState} from 'react';
import { View, StyleSheet,Text,Switch,TouchableHighlight } from 'react-native';
import {
   
    Avatar,
    Title,
    Caption,
    Drawer,
    
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  b from "../configuration/Datahandler";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
export function DrawerContent(props) {
    const [user, setUser] = useState({});
    useEffect(() => {
        setUser(b.getUser())
   
      }, []);
      const [isEnabled, setIsEnabled] = useState(false);
      const toggleSwitch = () => {
         props.navigation.setParams({otherParam: 'Updated!'})
          setIsEnabled(previousState => !previousState)
          if(isEnabled){
              
            b.setMaptype('standard')
          }else{
            b.setMaptype('hybrid')
          }
          
        };
    return(
        <View style={{flex:1}}>
            
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                
                                    source={require('../Assets/radiantlogo.png')}
                    style={{backgroundColor:'#007ec7'}}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{user.CustName}</Title>
                                <Caption style={styles.caption}>Welcome Back !</Caption>
                            </View>
                        </View>

                    
                    </View>
 
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('All Vehicle')}}
                        />
                     
                      
                               <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialIcon 
                                name="report-problem" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Report a problem"
                            onPress={() => {props.navigation.navigate('Report Problem')}}
                        /> 
                        
                        </Drawer.Section>
                        {/* <Drawer.Section title="Preferences">
                        <TouchableHighlight 
                        onPress={toggleSwitch}
                        >
                            <View style={styles.preference}>
                                <Text>Satelite View</Text>
                                <View pointerEvents="none">
                                    <Switch
                                     trackColor={{ false: "#767577", true: "#f4f3f4" }}
                                     thumbColor={isEnabled ? "#7DE24E" : "#f4f3f4"}
                                     ios_backgroundColor="#3e3e3e"
                                           value={isEnabled}/>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </Drawer.Section> */}
                      
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                onPress={() => {
                    AsyncStorage.clear()
                    props.navigation.replace('Login Screen')
                }}
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                   
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
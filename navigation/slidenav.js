import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/IndividualTracking';

import ReportProblem from '../screens/ReportPrblem';
import Icon from 'react-native-vector-icons/Ionicons';


import { DrawerContent } from '../Components/DrawerContent';


const Drawer = createDrawerNavigator();
export default function App() {
  
  return (
  
      <Drawer.Navigator initialRouteName="HomeScreen"
      screenOptions={({navigation}) => ({

        headerStyle: {
          backgroundColor: "#fff",

      
        },
        headerTintColor: "white",
        headerTitleStyle: {
marginLeft:10,
          color: "black",
        },
        headerLeft: () => (
            <Icon
              name={'menu'}
              size={30}
              style={{ marginLeft: 20 }}
              onPress={navigation.toggleDrawer}
            />
          ),
       
      })}
      drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="All Vehicle" component={HomeScreen} />

        <Drawer.Screen name="Report Problem" component={ReportProblem} />
    
      </Drawer.Navigator>
    
  );r
}
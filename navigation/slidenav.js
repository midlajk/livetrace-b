import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './bottomnav';
import HomeScreen from '../screens/Home';
import ReportScreen from '../screens/Report';
import RegisteredVehicle from '../screens/RegisteredVeicle';
import TrackingList from '../screens/TrackingList';

import { DrawerContent } from '../Components/DrawerContent';

function HomeTabs() {
  return (
   
      <Tabs />

  );
}
const Drawer = createDrawerNavigator();
export default function App() {
  return (
  
      <Drawer.Navigator initialRouteName="HomeScreen"
      drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeScreen" component={HomeTabs} />
        <Drawer.Screen name="Report" component={ReportScreen} />
        <Drawer.Screen name="Register Vehicle" component={RegisteredVehicle} />
        <Drawer.Screen name="Tracking List" component={TrackingList} />

      </Drawer.Navigator>
    
  );
}
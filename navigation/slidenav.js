import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/Home';
import ReportScreen from '../screens/Report';
import TrackingList from '../screens/TrackingList';
import ReportProblem from '../screens/ReportPrblem';
import Icon from 'react-native-vector-icons/Ionicons';
import Tracking from '../screens/Trackingmap';
import NonTracking from '../screens/NontrackMap';

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
          headerRight: () => (
            <Icon
              name={'notifications-outline'}
              size={24}
              style={{ marginRight: 20 }}
              onPress={() =>
                navigation.navigate('Notification Screen')
              }
            />
          ),
      })}
      drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="All Vehicle" component={HomeScreen} />
        <Drawer.Screen name="Tracking Vehicle" component={Tracking} />
        <Drawer.Screen name="Non-Tracking Vehicle" component={NonTracking} />
        <Drawer.Screen name="Report" component={ReportScreen} />
        <Drawer.Screen name="Tracking List" component={TrackingList} />
        <Drawer.Screen name="Report Problem" component={ReportProblem} />
      </Drawer.Navigator>
    
  );r
}
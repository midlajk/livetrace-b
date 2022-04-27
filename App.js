
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler'
import Splash from './screens/Splash';
import Login from './screens/Login';
import TrackScreen from './screens/TrackingList';
import Notification from './screens/Notification';
import Tabs from './navigation/slidenav.js';

function HomeTabs() {
  return (
   
      <Tabs />

  );
}
const RootStack = createStackNavigator();

function App() {
  return (
    
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Splash"
          screenOptions={{
           
            cardStyle: { backgroundColor: '#fff' },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontSize: 16,
     
            }
          }}
        >
          <RootStack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
         
         <RootStack.Screen
            options={{headerShown: false}}
            name="Login Screen"
            component={Login}
            
          />

        <RootStack.Screen
            options={{headerShown: false}}
            name="App Screens"
            component={HomeTabs}
            
            
          />
           <RootStack.Screen
            name="Notification Screen"
            component={Notification}
            
            
          />
          <RootStack.Screen
            name="Tracking Screen"
            component={TrackScreen}
            options={({ route }) => ({ title: route.params.name })}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    
  )
}

export default App;
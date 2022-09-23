
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler'
import Splash from './screens/Splash';
import Login from './screens/Login';
import Tabs from './navigation/slidenav.js';
import IndividualMap from './screens/IndividualTracking';

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
              cardStyle: { backgroundColor: '#fff' },
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
            name="Individual Map"
            component={IndividualMap}
            options={({ route }) => ({ title: "Tracking "+route.params.vehicle })}
            
          />
       

        </RootStack.Navigator>
      </NavigationContainer>
    
  )
}

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './screens/Splash';
import Login from './screens/Login';


// import Tabs from './Navigation/Drawernav';

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
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#4263EB'
            },
            cardStyle: { backgroundColor: '#fff' },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold'
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

        {/*<RootStack.Screen
            options={{headerShown: false}}
            name="App Screens"
            component={HomeTabs}
            
          /> */}
        </RootStack.Navigator>
      </NavigationContainer>
    
  )
}

export default App;
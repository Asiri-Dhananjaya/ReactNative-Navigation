import React from 'react';
import IntroductionScreen from './screens/Introduction';
import Login from './screens/Login';
import Instructions from './screens/instruction';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Intro" component={IntroductionScreen} />
        <Stack.Screen name="Instruct" component={Instructions} />
        <Stack.Screen name="Login" component={Login} />
        {/*Add more components */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

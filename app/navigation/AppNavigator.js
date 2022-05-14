import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import InputScreen from '../screens/InputScreen';
import ServersScreen from '../screens/ServersScreen';
import StoreScreen from '../screens/StoreScreen';
import WitajScreen from '../screens/WitajScreen';
const Stack = createStackNavigator();
const AppNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Witaj" component={WitajScreen} />
    <Stack.Screen name="Form" component={InputScreen} />
    <Stack.Screen name="Servers" component={ServersScreen} />
    <Stack.Screen name="Market" component={StoreScreen} />
  </Stack.Navigator>
);
export default AppNavigator;

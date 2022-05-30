import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import Setting from './Setting';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

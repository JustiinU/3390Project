import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen.js';
import RegisterScreen from './RegisterScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions = {{
          headerBackTitle: 'Back',
        }}>
        <Stack.Screen 
        name = "Login" 
        component = {LoginScreen}
        options={{ 
          title: 'Scrpted',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
        }}
        />
        <Stack.Screen 
        name = "Register" 
        component = {RegisterScreen}
        options = {{ 
          title: 'Scrpted',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
         }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


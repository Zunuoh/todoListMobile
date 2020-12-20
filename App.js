import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';
import AddTodo from './src/AddTodo';
import { NavigationContainer } from '@react-navigation/native';
import {AppLoading} from 'expo';
import ModalScreen from './components/modal'


const Stack = createStackNavigator();

export default function App() {
//   let {fontsLoaded, error} = useFonts({
//     Raleway_200ExtraLight

//  });

//  if (!fontsLoaded){
//      return <AppLoading/>;
//  }
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
       <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
       <Stack.Screen name="AddTodo" component={AddTodo} options={{headerShown:false}}/>
     </Stack.Navigator>
   </NavigationContainer>

    //  <ModalScreen/>

    // 
  );
}


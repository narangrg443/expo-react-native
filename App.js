import { StatusBar } from 'expo-status-bar';
import {ScrollView, StyleSheet,Button, Text, View,Image } from 'react-native';
import styles from './style/style';


import {Provider} from 'react-redux';
import store from './reduxToolkit/store'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screen1 from './screen/Screen1';
import Screen2 from './screen/Screen2';
import Screen3 from './screen/Screen3';



const Stack=createStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Screen1'>
          <Stack.Screen name='Screen1' component={Screen1} options={{headerShown:false}}/>
          <Stack.Screen name='Screen2' component={Screen2} options={{headerShown:false}}/>
          <Stack.Screen name="Screen3" component={Screen3} options={{headerShown:false}}/>
        </Stack.Navigator>
        <StatusBar hidden={true} />
      </NavigationContainer>
    </Provider>
  );
}

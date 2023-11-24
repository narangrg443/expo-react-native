import { StatusBar } from 'expo-status-bar';

import {ScrollView, StyleSheet,Button, Text, View,Image } from 'react-native';
import styles from './style/style';


import {Provider} from 'react-redux';
import store from './reduxToolkit/store'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Cart from './components/Cart';
import Cart1 from './components/Cart1';
import Cart3 from './components/Cart3';



const Stack=createStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Screen1'>
          <Stack.Screen name='Screen1' component={Cart} options={{headerShown:false}}/>
          <Stack.Screen name='Screen2' component={Cart1} options={{headerShown:false}}/>
          <Stack.Screen name="Screen3" component={Cart3} options={{headerShown:false}}/>
        </Stack.Navigator>
        <StatusBar hidden={true} />
      </NavigationContainer>
    </Provider>
  );
}

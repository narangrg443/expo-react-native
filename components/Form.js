import React,{useState}  from 'react';
import {StyleSheet,View,Text} from 'react-native';
import Button from './Button';
import Input from './Input';

export default function Form({onClick}){
  return(
    <View>
    <Text>Full Name</Text><Input placeholder="name"/>
    <Text>Email</Text><Input placeholder="email"/>
    <Button text="submit" onClick={onClick}/>
    </View>
    
    );
};

const styles=StyleSheet.create({
  container:{
    
   
  },
  
  
})
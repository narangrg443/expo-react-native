import React,{useState} from 'react';
import {View,Text,TextInput,Button} from 'react-native';

export default function Submit({onPress}){
  const [data,setData]=useState('');


  return(
    <View style={{backgroundColor:'green',width:'80%'}}>
     <TextInput
     style={{borderWidth:1,
            borderColor:'grey',
            backgroundColor:'yellow',
            textAlign:'center',
            fontSize:15
     }}
     value={data}
     placeholder='Input text...'
     type='text'
     onChangeText={(e)=>{
       setData(e);
       
       
     }}
     />
    <Button title="send" 
      onPress={()=>{
      onPress(data);
      setData('');
      
    }}
    />
    </View>
    
    )
}
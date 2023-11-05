import React , {useState,useEffect} from 'react';
import {TextInput,View,Text,TouchableOpacity,Button} from 'react-native';
import styles from '../style/AppStyle';

export default function Userform({onPress,getList}){
  const [name,setName]=useState('');
  const [age,setAge]=useState('');
 
  const submitData=()=>{
   
   const data={name:name,age:age}
   if(name.trim!==''){
     setName('');
     setAge('');
      onPress(data);
   }
  }
  return(
    <View  style={styles.formContainer}>
      <Text>name:</Text> 
    <TextInput style={styles.inputContainer} value={name} onChangeText={(e)=>{setName(e)}}/>
    <Text >age:</Text>
      <TextInput style={styles.inputContainer} value={age} onChangeText={(e)=>{setAge(e)}}/>
    
    <TouchableOpacity style={styles.buttonContainer} 
      onPress={submitData}
    >
       <Text>ADD</Text>
    </TouchableOpacity>
   <Button title="showList" onPress={getList} />
    </View>
    
    
  )
}
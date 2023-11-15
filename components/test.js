import React, { useState,useRef } from 'react';
import { View, Text ,TextInput ,FlatList,Button} from 'react-native';
import styles from '../style/style';




function MyApp() {
const[text,setText]=useState('');
const [todo,setTodo]=useState([])
const useFocus=useRef(null)

function addHandler(){
  console.log("added..")

  setText(''); 
  
  
  setTodo(prev=>[...prev,text]);
    if (useFocus.current) {
      useFocus.current.focus();
    }
}

function resetHandler(){
  setText('');
  setTodo([]);
  
}

function findDelete(){
  setText('');
  setTodo(prev=>prev.filter(e=>e!==text))
}

  return (
   <View >
     {todo.map((e,i)=>{
       return <Text key={i}>{e}</Text>
     })}
   
   
     <TextInput
     ref={useFocus}
     value={text}
     placeholder="input text"
     onChangeText={(e)=>{setText(e)}}
     onSubmitEditing={addHandler}
     />
<Button title="add" onPress={addHandler}/>
<Button title="reset" onPress={resetHandler}/> 
<Button title="delete"onPress={findDelete}/>
   
   </View>
  );
}

export default MyApp;

import React,{useState} from 'react';
import {View,Pressable,Text}from 'react-native';


export default function CheckBoxRadio({onPress,type,color1,color2}){
  const[isChecked,setIsChecked]=useState(false);
  if(!type){
    type='circle';
  }
  if(!color1){
    color1==='grey'
    
  }
  if(!color2){
    color2==='grey';
  }
  
    function onClicked(){
    setIsChecked(prev=>!prev);
    onPress();
  }
  return(
    <View>
    
    <Pressable 
    onPress={onClicked}
    >
    <View style={[type==='circle'&&{
      padding:1,
      justifyContent:'center',
      alignItems:'center',
      width:20,
      height:20,
      borderRadius:10,
      borderWidth:1,
      borderColor:{color1}
      
    },type==='box'&&{
      padding:1,
      justifyContent:'center',
      alignItems:'center',
      width:20,
      height:20,
      borderWidth:1,
      borderColor:{color1}]}>
    
       {
      isChecked &&(
    
      <View style=
      {[type==='circle'&&{
        width:15,
        height:15,
        borderRadius:7.5,
        borderWidth:2,
        backgroundColor:{color2}
        
      },type==='box'&&{
        width:14,
        height:14,
        backgroundColor:{color2}
        
      }]}>
      </View>
      )
    
      
      
      
    }
    
    
    
    </View>
    
 
    
    
    
    </Pressable>
    
    </View>
    
    )
  
}
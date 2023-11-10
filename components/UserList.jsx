import React,{useState,useEffect} from 'react';
import {View,Text,Modal,FlatList} from 'react-native';
import styles from '../style/AppStyle';
export default function UserList(){
  const [users,setUsers]=useState([]);
 
 
 
  const getData=async ()=>{
    try{
      const url='http://localhost:3000/users'
     const response =await fetch(url);
      if(response.ok){
      const data=await response.json()
     
      setUsers(data);
        
      }else{
        console.log('no response')
      }
    }catch(err){
      console.error(err);
    }
    
  }
        useEffect(()=>{
        getData();
      },[])
      
      
  
    
    const  renderUserItem=({item})=>{
      
      return (
        <View>
        <Text> {item.name}</Text>
        </View>
        
        );
    }
    
    
  
  
  
  return(
    <View style={styles.itemContainer}>
    
   <FlatList 
      data={users}
      keyExtractor={(item)=>item.id.toString()}
    renderItem={renderUserItem}
      />
    </View>
    
    )
}
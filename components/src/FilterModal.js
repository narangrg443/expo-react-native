import React from 'react';
import {View,Text,Modal,Pressable,StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const FilterModal=({visible,onClose})=>{
  return(
    <Modal visible={visible} animationType="slide" transparent >
    <View style={styles.filterContainer}>
       <View style={styles.close}>
         <Pressable onPress={onClose}>
    
           <FontAwesome name="close" size={24} color="black" />
         </Pressable>
      </View>
      
     <Text>Filtered content</Text>
    
   </View>
   </Modal>
  )
}
const styles=StyleSheet.create({
  filterContainer:{
   
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red',
    width:"100%",
    height:'50%',
    top:100,
  },
  close:{
    position:'absolute',
     width:'100%',
     height:30,
     top:0,
     backgroundColor:'green',
     flexDirection:'row',
     justifyContent:'flex-end',
     paddingRight:10,
    
  }
  
})
export default FilterModal;
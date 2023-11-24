import React,{useState} from 'react';
import {View,Button,Text,ScrollView,Image,Pressable} from 'react-native';
import {phones} from './Data'
import styles from '../style/style';
import {useDispatch,useSelector}from 'react-redux';
import { addCartItem } from '../reduxToolkit/cartSlice'; // Update the path

import { AntDesign } from '@expo/vector-icons';

import FilterModal from './src/FilterModal';
const Cart=({navigation})=>{
  
  const[visible,setVisible]=useState(false);
  // const dispatch = useDispatch();
  // const cartCount = useSelector((state) => state.cart); // Assuming 'cart' is the name of your slice in the store

  const handleAddToCart = () => {
    dispatch(addCartItem());
  };
  
  const goToCart=(id)=>{
    
    navigation.navigate("Screen2");
  }

  const handleSpec=(id)=>{
   
    navigation.navigate('Screen3',{id})
  }
  
return (
    <View style={[styles.container, { justifyContent: 'center',marginTop:20 ,padding:5,}]}>
    
    <FilterModal visible={visible} onClose={()=>{setVisible(prev=>!prev)}}/>
    <View style={{width:'98%',height:30,
      backgroundColor:'red',position:'fixed',flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'center',opacity:0.8,
    }}>
    <Text style={{color:'white',marginRight:10}}>
    <View style={{flexDirection:'row'}}>
    <Pressable onPress={goToCart}>
      <View style={{marginRight:10}}>
      <AntDesign name="shoppingcart" size={24} color="black" />
     </View>
     </Pressable>
     <Pressable onPress={()=>{setVisible(true)}}>
     <AntDesign name="filter" size={24} color="black" />
     </Pressable>
      </View>
    </Text> 
    </View>
    <ScrollView style={{width:'100%'}}>
      {phones.map(item => (
        <View key={item.id} style={{
          alignItems: 'center' ,margin:5,
          backgroundColor:'#f298ac',padding:10,flexDirection:'row',
        }}>
           <View style={{flex:1}}>
           <Pressable onPress={()=>handleSpec(item.id)}>
             <Image style={{ width: 150, height: 180 }} source={{ uri: item.image }} />
             </Pressable>
           </View>
           <View style={{flex:1,width:'50%',justifyContent:'center',alignItems:'center',}}>
             <Text>
              Name: {item.name} </Text>
             <Text> Price: Rs.{item.price}
             </Text>
          <Pressable onPress={goToCart} style={{alignItems:'center',justifyContent:'center',paddingLeft:10,paddingRight:10,backgroundColor:'green',borderRadius:5,padding:5,marginTop:10}}>
          <Text>add</Text>
       

          </Pressable>
           </View>
        </View>
      ))}
      </ScrollView>
      
   </View>
  );
}

export default Cart;
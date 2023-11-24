import React,{useState,useEffect}  from 'react';
import {View,Button,Text,ScrollView,Image,Pressable} from 'react-native';
import {phones} from './Data';
import styles from '../style/style';
import {useDispatch,useSelector}from 'react-redux';
import { addCartItem } from '../reduxToolkit/cartSlice'; // Update the path

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Cart1=({navigation,route})=>{
   const [addedPhone,setAddedPhone]=useState([]);
   
   
  if(route.params){
const {id}=route.params;
console.warn(id);

const filteredPhone=phones.filter(item=>item.id===id);
setAddedPhone(prev=>[...prev,...filteredPhone])
}
 

  

  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart); // Assuming 'cart' is the name of your slice in the store

  const handleAddToCart = () => {
    dispatch(addCartItem());
  };
    const handleDeleteCart = (id) => {
    dispatch(handleDeleteCart(id));
  };
  
  const goBack=()=>{
    navigation.navigate('Screen1');
  };
return (
    <View style={[styles.container, { justifyContent: 'center',marginTop:20 }]}>
    <View style={{width:'100%',height:30,
      backgroundColor:'red',position:'fixed',flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',paddingLeft:10,
      paddingRight:10,
    }}>
      <Pressable onPress={goBack}>
      <Ionicons name="arrow-back" size={26} color="black" />
      </Pressable>
      <View style={{flexDirection:'row'}}>
      <AntDesign name="shoppingcart" size={24} color="black" />
      <Text style={{color:'white',marginRight:10,marginLeft:10,}}>
          {'screen2'}
      </Text> 
      </View>
    </View>
    <ScrollView style={{width:'100%'}}>
      {addedPhone.length>0 &&(
        addedPhone.map(item =>(
        <View key={item.id} style={{
          alignItems: 'center' ,margin:5,
          backgroundColor:'#f298ac',padding:10,flexDirection:'row',
        }}>
           <View style={{flex:1}}>
             <Image style={{ width: 150, height: 180 }} source={{ uri: item.image }} />
           </View>
           <View style={{flex:1,width:'50%'}}>
             <Text>
              Name: {item.name} </Text>
             <Text> Price: {item.price}
             </Text>
             <Button
             title="delete" 
          />
         
          
           </View>
        </View>
      )))}
      
      </ScrollView>
      <View style={{width:'100%',backgroundColor:'red',position:'fixed',height:30,alignItems:'center',justifyContent:'center'}}>
      <Text>total price:{'3000'}</Text>
      </View>
      
   </View>
  );
}

export default Cart1;
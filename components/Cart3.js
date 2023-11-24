import React,{useState,useEffect}from 'react';
import { View, Text, Pressable, StyleSheet,Image } from 'react-native';
import { phones } from './Data';

const Cart3 = ({ route }) => {
 const {id}= route.params; 
  const [addedPhone,setAddedPhone]=useState([]);
  
  useEffect(() => {
    const foundPhones = phones.filter(item => item.id === id);
    setAddedPhone(prev=>[...prev,...foundPhones]);
  
  }, [id]);

  return (
    <View style={styles.container}>
     <Text>Cart3</Text>
        {
          addedPhone.length>0?(
          addedPhone.map(phone=>(
            <View key={phone.id} style={styles.imageContent}>
              <Image style={styles.image} source={{uri:phone.image}} />
              <View style={{justifyContent:'center',alignItems:'center',
              marginTop:10,
              flex:1,
              }}>
               <Text >
                  name:{phone.name}
               </Text>
               </View>
            </View>
            ))
            ):(
              <Text>no phones</Text>
              )
        }
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'100%',
    backgroundColor:'brown',
    padding:10,
  },
  imageContent:{
    position:'absolute',
    top:0,
    
    height:'100%',
    
  },
  image:{
    position:'relative',
    top:5,
    width:250,
    height:300,
  }
});

export default Cart3;
;
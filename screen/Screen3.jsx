import React from 'react';
import {View,Text,Button} from 'react-native';

export default function Screen3({navigation,route}){
  const {user=null}=route.params||{};

  return(
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
      flex: 1,
    }}>
    <Text style={{fontSize:22}}>Screen3</Text>
    { user ?(
         <Text style={{fontSize:22}}>
            Name:{user.name}{'\n'}
            age:{user.age}{'\n'}
            email:{user.email}
    
           </Text>
    ):(<Text>no data</Text>)
    }
           <Button title="to to screen 2" onPress={()=>{
      navigation.navigate('Screen2')
      
    }}/>
             <Button title="to to screen 1" onPress={()=>{
      navigation.navigate('Screen1')
      
    }}/>
    </View>
    )
}
import React from 'react';
import {View,Text,Button} from 'react-native';

export default function Screen1({navigation}){
    const user = {
    name: 'Narayan',
    age: 12,
    email: 'jefi@gmia.com',
  };
 
  const a="hell world from scren 1";
  return(
    <View style={{justifyContent:'center',
      alignItems:'center',backgroundColor:'red',flex:1,
    }}>
     <Text style={{fontSize:22,margin:10}}>Screen1</Text>
    <Button title="toScreen2" onPress={()=>{
         navigation.navigate('Screen2',{data:a})
      }
      
    }
    />
        <Button title="toScreen3" onPress={()=>{
         navigation.navigate('Screen3',{user})
      }
      
    }
    />
  
    </View>
    )
}
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './style/AppStyle';
import Userform from './components/Userform';
import UserList from './components/UserList'
export default function App() {
  
  const urlPost = "http://localhost:3000/users";
  const[data,setData]=useState(null);
   const [showList,setShowList]=useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [msg,setMsg]=useState('');
  const [invalid,setInvalid]=useState(false);
  
  

  
  const submitData = async (data) => {
    try {
      if(data.name.trim()!==''){
        //valid data request handler
      const response = await fetch(urlPost, {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
      }); 

      if (response.ok) {
        console.log('Data submitted');
        setShowMsg(true);
        setMsg('added successfully');
      } else {
        throw new Error("Response error");
      }
    }else{
      //invalide data request handler
      setShowMsg(true);
      setMsg('invalid data!');
      setInvalid(true);
      console.log('put data');
    }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {               
    if (showMsg) {
      const timeout = setTimeout(function () { setShowMsg(false);setInvalid(false); }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [showMsg]);
  
  

  
 const listHandler=()=>{
 setShowList(true);
 }
  return (
    <View style={styles.container}>
      <View style={styles.appContainer}>
 {
  showList ? (
    <UserList  onPress={()=>{setShowList(false)}}/>
  ) : (
    <>
      <Userform onPress={submitData} getList={listHandler} />
      {showMsg ? <Text style={[styles.showMsg, invalid && { color: 'red' }]}>{msg}</Text> : null}
    </>
  )
}

      </View>
    </View>
  );
}

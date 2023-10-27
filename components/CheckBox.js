import React,{useState} from 'react'
import Checkbox from 'expo-checkbox';

export default function CheckBox({toggleChange}){
    const[isChecked,setIsChecked]=useState(false);
    const setChange=()=>{
        setIsChecked(!isChecked);
        toggleChange(isChecked);
    }
   
    return(
        <Checkbox 
        value={isChecked}
        onChangeValue={setChange}
        color={isChecked?'red':undefined}
        />
    );
}
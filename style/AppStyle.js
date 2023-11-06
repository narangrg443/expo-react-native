import { StyleSheet } from "react-native";

 const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    margin:2,

  },
  appContainer:{
   width:'90%',
   height:'90%',
     padding:5,
     marginTop:20,
     backgroundColor:'lightblue',
  },
  formContainer:{
    
   
    padding:1,

    
  },
  showMsg:{
    textAlign:'center',
    textAlignVertical:'center',
    marginTop:20,
    color:'green',
   
  },
  inputContainer:{
    borderWidth:1,
    borderColor:'grey',
    borderRadius:2,
    paddingHorizontal:8,
    
  },
  buttonContainer:{
       justifyContent:"center",
       alignItems:'center',    backgroundColor:'green',
      marginTop:10,
      padding:8,
      
  },
  
  
  
  listContainer:{
    flex:1,
    padding:5,
  },
  itemContainer:{
    padding:10,
    backgroundColor:'blue',
  },
  eachItem:{
    flexDirection:'row',
    margin:2,
    padding:5,
    justifyContent:'space-between',
   backgroundColor:'green',
   borderRadius:5,
   
  },
  itemStyle:{
   flex:1,
   
   textAlign:'center',
   textAlignVertical:'center',
  
  },
  updateDelete:{
    flexDirection:'column',
  },
  listButon:{
    marginButtom:15,
  },
  modalContainer:{
    justifyContent:'center',
    alignItems:'center',
    padding:25,
    paddingTop:50,
    
    
    
  },
  modalChildContainer:{
    padding:50,
  }

})

export default styles;
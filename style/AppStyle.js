import { StyleSheet } from "react-native";

 const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  appContainer:{
    width:'90%',
    height:'90%',
    marginTop:20,
    margin:3,
    backgroundColor:'green',
    borderRadius:10,
    padding:10,
  },
  itemContainer:{
    
    flexDirection:'row',
    
    backgroundColor:'lightblue',
    margin:3,
    justifyContent:'space-between',
    borderRadius:5,
  },
  buttonView:{
   
    margin:2,
    borderRadius:4,
    
  },
  names:{
   width:"60%",
   textAlign:'center',
   textAlignVertical:'center',
   fontSize:14,
    
  }
})

export default styles;
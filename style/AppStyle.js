import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  questionContainer:{
  
  marginTop:50,
  margin:10,
  borderWidth:4,
   borderColor:'black',
    borderRadius:10,
  },
  question:{
      width:350,
    height:100,
    borderRadius:5,
    padding:10,
    backgroundColor:'grey',
    fontSize:18,
   textAlign:'center',
   textAlignVertical:'center',
  
  },
answerOption:{
 width:150,
  borderWidth:2.5,
  borderRadius:5,
  borderColor:'black',
  margin:5,
},
answerText:{
  fontSize:10,
  width:100,
  height:30,
  backgroundColor:'green',
  borderRadius:5,
   textAlign:'center',
   textAlignVertical:'center',

  
},
resetButton:{
  flexDirection:'row',

  
},


});

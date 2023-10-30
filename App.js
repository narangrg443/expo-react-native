import React,{useState} from 'react';
import { View, Text, FlatList,Button } from 'react-native';
import { styles } from './style/AppStyle';
import Checkbox from 'expo-checkbox';
import questions from './components/Questions';




export default function App() {
  const [questionNo,setQuestionNo]=useState(0);
  const [goNext,setGoNext]=useState(false);
  const [score,setScore]=useState(0);
  const [answerColor,setAnswerColor]=useState(['blue','blue','blue','blue'])
  
  
  const renderItem = ({ item,index}) => (
    <View style={styles.answerOption}>
      <Button style={styles.answerText} title={item}
   onPress={()=>handleAnswer(index)}
     color={answerColor[index]}

      />
    </View>
  );
  
  //next question handler
const nextQuestion=()=>{
  if(goNext){
    if(questionNo>=questions.length-1){setScore(0)}
  setQuestionNo(prev=>prev>questions.length-2?0:prev+1);
  setGoNext(false);
  setAnswerColor(prev=>prev.map(data=>'blue'));
}
  
}
// answer handleer
 const handleAnswer=(id)=>{
   //if answer is correct
   
   if(id===questions[questionNo].answer){
     
     if(!goNext){setScore(prev=>prev+1);}
     setAnswerColor(prev=>{
      const updatedColor=[...prev]
      updatedColor[id]='green';
      return updatedColor;
      
      });
    }else{
      //if answer is incorrect
      setAnswerColor(prev=>{
        const updatedColor=[...prev];
        updatedColor[id]='red';
        return updatedColor;
      })
    }  
    
    setGoNext(true);
 }



  return (
    
    
    <View style={styles.container}>
    
      <View style={styles.questionContainer}>
    
        
        <Text style={{textAlign:'center',backgroundColor:'red'}}>questionNo:{`${score}/${questionNo+1}`}</Text>
      
        
        <Text style={styles.question}>{questions[questionNo].question}</Text>
        
        
      </View>
         
          <View style={styles.nextButton}>
         {goNext?(
        

         <Button title="next" onPress={nextQuestion}/>
         ):null
         
    }     
    </View>
      
     
      
      
      
      <FlatList
        data={questions[questionNo].options }
        keyExtractor={(item,i) =>i.toString()}
        renderItem={renderItem}
        numColumns={2} // Set the number of columns as needed
      />
      <View style={styles.myButton} >
  <Button title="reset" onPress={()=>{
           //reset
           setQuestionNo(0)
           setScore(0)
           setAnswerColor(prev=>prev.map(color=>'blue'));
         }}
         />
         </View>
    </View>
  );
}

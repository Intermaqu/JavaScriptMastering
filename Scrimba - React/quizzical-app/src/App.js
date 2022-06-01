import React, {useState} from "react"
import StartQuiz from "./components/StartQuiz"
import QuizQuestion from "./components/QuizQuestion"
import {nanoid} from 'nanoid'


function App() {
  const [rollNewQuestions, setRollNewQuestions] = React.useState(0)
  const [quizFinished, setQuizFinished] = React.useState(false)
  const [start, setStart] = React.useState(false)
  const [questions, setQuestions] = React.useState([])

  React.useEffect(()=>{
    setQuizFinished(false)
    fetch("https://opentdb.com/api.php?amount=5")
    .then((res) => res.json())
    .then(q => setQuestions(q.results.map(quest => {
      return {
        ...quest,
        answer: null,
        id: nanoid(),
        allAnswers: prepereAnswers([...quest.incorrect_answers, quest.correct_answer]),
        finished: false
      }
    })))
  },[rollNewQuestions])
  
  function prepereAnswers(array){
    for(let i = array.length-1; i>0; i--){
        const j = Math.floor(Math.random()*array.length)
        const tmp = array[i]
        array[i] = array[j]
        array[j] = tmp;
    }
    return array
  }

  function handleNewQuiz(){
    setRollNewQuestions(prev => prev + 1)
  }

  function handleChangeAnswer(id, ans){
    setQuestions(prevQuestions => prevQuestions.map(
      prevQuestion => {
        return prevQuestion.id === id ? 
          {
            ...prevQuestion,
            answer: ans
          } :
          prevQuestion
      }
    ))
  }

  function checkAnswers(){
    setQuizFinished(true)
    setQuestions(prevQuestions => prevQuestions.map(
      prevQuestion => {
        return {...prevQuestion, finished: true}
      }
    ))
  }

  function unEscape(htmlStr) {
    htmlStr = htmlStr.replace(/&lt;/ , "<");	 
    htmlStr = htmlStr.replace(/&gt;/ , ">");     
    htmlStr = htmlStr.replace(/&#039;/ , "\'");   
    htmlStr = htmlStr.replace(/&quot;/ , "\"");  
    htmlStr = htmlStr.replace(/&amp;/ , "&");
    return htmlStr;
  }
  
  function handleStartQuiz(){
    setStart(true)
  }
  return (
    <div className="App">
      {
        !start ? 
        <StartQuiz startQuiz={handleStartQuiz}/> :
        <div>
         { questions.map(question => {
          return(
            <QuizQuestion
              key = {question.id}
              correctAnswer = {question.correct_answer}
              question = {unEscape(question.question)}
              type = {question.type}
              id = {question.id}
              chosenAnswer = {question.answer}
              allAnswers = {question.allAnswers}
              onClickHandler = {(id, ans) => handleChangeAnswer(id, ans)}
              finished = {question.finished}
            />
          )
        })}
        {
          !quizFinished ?
          <button onClick={checkAnswers}>Check Answers</button> :
          <button onClick={handleNewQuiz}>Roll New Questions</button>
        }
        </div>
      }
    </div>
  );
}

export default App;

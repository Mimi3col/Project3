import React from 'react';
import { useState } from 'react'
import './App.css'
/*Importing Components*/
import CardFlip from '../components/CardFlip';


let flashcards = [
  { id: 0, qstn: '2 + x = 5', answ: '3' },
  { id: 1, qstn: '3x + x = 12', answ: '3'},
  { id: 2, qstn: 'π', answ: '3.14'},
  { id: 3, qstn: '16*3', answ: '48' },
  { id: 4, qstn: '1+1', answ: '2'},
  { id: 5, qstn: '100+20', answ: '5!'},
];


function App() {
  const [card, setNextCard] = useState(0)
  const [userInput, setNextUserInput] = useState('')
  const [correct, setCorrect] = useState(-1)
  
  const handelSubmit = () =>{
      if(flashcards[card].answ == userInput){
        setCorrect(1)
      }else{
        setCorrect(0)
      }
  }


  return (
   <div className='App'> 
    <h1>Can you Math?</h1>
    <h2>simple* mental math problems</h2>
    <div className='card'>
      <CardFlip frontCard={flashcards[card].qstn} backCard={flashcards[card].answ}/>
    </div>
    <div>
      <p></p>
    <div>
      <input type='text' value={userInput} onChange={(event)=>{setNextUserInput(event.target.value)}}></input>
      <button type='submit' onClick={handelSubmit}>Check Answer</button> 
      </div>
    </div>
    <h3>{correct==-1?"" : `Your answer ${userInput} was ${correct==1? "correct": "incorrect"}` } </h3>
    <div className='buttons'>
      <button onClick={() =>{setNextCard((card-1)<0?(flashcards.length-1):card - 1);setCorrect(-1);setNextUserInput('')}}>⟸</button>
      <button onClick={() =>{setNextCard((card+1)>=(flashcards.length)?0:card + 1);setCorrect(-1);setNextUserInput('')}}>⟹</button>
    </div>
    <div className='small'>
      *simple is a subjective term and does not imply any measure of complexity
    </div>
    

    
    </div>



  )
}

export default App

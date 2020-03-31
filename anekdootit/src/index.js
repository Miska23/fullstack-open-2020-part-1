import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Result = ({votes, anecdotes}) => {

  //! joka kierroksella verrataan arvoa seuraavaan ja palautetaan tämän vertailun tulos
  //! seuraavan kierroksen vertailun toiseksi osapuoleksi, palauttaa lopulta indeksin!
  let indexOfMaxValue = votes.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
  console.log("indexOfMaxValue is: ", indexOfMaxValue);

 //! palauttaa true jos yksikin jäsenistä ei ole nolla 
   const anyVotesGiven = (array) => array.some(item => item !== 0);
   console.log("anyVotesGiven is ",anyVotesGiven(votes));
   
  if (anyVotesGiven(votes)) {
    return(
      <div>
        <h4>Anecdote with most votes</h4>
        <div> {anecdotes[indexOfMaxValue]} </div>
        <div>{"has"} {votes[indexOfMaxValue]} {"votes"} </div>
      </div>
    )
  } else {
    return (
      <div>
      <h4>Anecdote with most votes</h4>
      <div>No votes given yet!</div>
      </div>
    )
  }
} 

const Button = ({clicked, text}) => {
  return (
    <div>
      <button  onClick={clicked}>{text} </button>
    </div>
  )
}

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(6).fill(0));
  console.log(votes);
  console.log(anecdotes.indexOf(anecdotes[selected]));

  const handleVoteClick = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    console.log("lisätty yksi listan jäsenelle ", index, "joka on anekdootti ", anecdotes[selected]);
    setVotes(newVotes);
  }

  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  const getIndexOfAnecdote = (anec) => {
    return anecdotes.indexOf(anec)
  }

  return (
    <div>
      <h4>Anecdote of the day</h4>
      <div>{anecdotes[selected]}</div>
      <div>{"has"} {votes[getIndexOfAnecdote(anecdotes[selected])]} {"votes"} </div>      
      <Button text={"next anecdote"} clicked={() => anecdotes[setSelected(getRndInteger(0, 5))]}/>
      <Button text={"vote"} clicked={() => handleVoteClick(getIndexOfAnecdote(anecdotes[selected]))}/>
      <Result votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
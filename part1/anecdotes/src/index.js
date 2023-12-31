import React, { useState } from 'react'
import * as ReactDOMClient from 'react-dom/client'

const DisplayAnecdote = ({anecdotes, points}) => {

  const maxVotes = Math.max.apply(null, points)
  const indexMaxVotes = points.indexOf(maxVotes)

  return(
    <>
      <p>{anecdotes[indexMaxVotes]}</p>
      <p>has {maxVotes} votes</p>
    </>
  )
}

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(6).fill(0))

  const handleRandom = () => 
    setSelected(Math.floor(Math.random()*6))

  const handleVote = select => {
    const copy = [...points]
    copy[select] += 1
    setPoints(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={() => handleVote(selected)} text={'vote'} />
      <Button handleClick={handleRandom} text={'next anecdote'} />

      <h1>Anecdote with  most votes</h1>
      <DisplayAnecdote anecdotes={props.anecdotes} points={points} />
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

const rootElement = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootElement)
root.render(<App anecdotes={anecdotes} />, )
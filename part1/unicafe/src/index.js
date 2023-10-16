import React, { useState } from 'react'
import * as ReactDOMClient from 'react-dom/client'

const StatisticLine = ({text, value, symbol}) => {
  return(
    <tr>
      <td>{text} </td>
      <td>{value} {symbol}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, all}) => {

  if(all === 0){
    return(
        <p>No feedback given</p>
    )
  }
  return(
    <table>
      <tbody>
        <StatisticLine text={"good"} value={good} />
        <StatisticLine text={"neutral"} value={neutral} />
        <StatisticLine text={"bad"} value={bad} />
        <StatisticLine text={"all"} value={all} />
        <StatisticLine text={"average"} value={(good-bad)/all} />
        <StatisticLine text={"neutral"} value={good*100/all} symbol={'%'} />
      </tbody>
    </table>
  )
} 

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={'good'} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={'neutral'} />
      <Button handleClick={() => setBad(bad + 1)} text={'bad'} />
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} all={all}/>
    </div>
  )
}

const rootElement = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootElement)
root.render(<App />, )
import { getValue } from '@testing-library/user-event/dist/utils'
import React from 'react'
import ReactDOM from 'react-dom'

const Part = (props) => {
  return(
    <>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </>
  )
}

const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  const [p1,p2,p3] = props.parts
  return (
    <>
      <Part part = {p1} />
      <Part part = {p2} />
      <Part part = {p3} />
    </>
  )
}

const Total = (props) => {
  const [p1,p2,p3] = props.parts
  return(
    <>
      <p>
        Number of exercises {p1.exercises + p2.exercises + p3.exercises}
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts = {parts} />
      <Total parts = {parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

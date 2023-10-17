import React from 'react'
import * as ReactDOMClient from 'react-dom/client'


const Header = ({course}) => <h1>{course.name}</h1>

const Part = ({part}) => <p> {part.name} {part.exercises} </p>

const Content = ({course}) => {
  return (
    <>
      {course.parts.map(element => (
        <Part key={element.id} part = {element} />
      ))}
    </>
  )
}

const Total = ({course}) => {
  const sum = course.parts.reduce((totalExercises, part) => totalExercises + part.exercises, 0)

  return(
    <>
      <p>
        Number of exercises {sum}
      </p>
    </>
  )
}

const Course = ({course}) => {
  return(
    <div>
      <Header course = {course} />
      <Content course = {course} />
      <Total course = {course} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  }

  return <Course course = {course} />
}

const rootElement = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootElement)
root.render(<App />, )
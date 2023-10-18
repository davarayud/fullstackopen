import React from 'react'

const Header = ({ course }) => <h2>{course.name}</h2>

const Part = ({ part }) => <p> {part.name} {part.exercises} </p>;

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map(element => (
        <Part key={element.id} part={element} />
      ))}
    </>
  )
}

const Total = ({ course }) => {
  const sum = course.parts.reduce((totalExercises, part) => totalExercises + part.exercises, 0)

  return (
    <>
      <h3>
        total of {sum} exercises
      </h3>
    </>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default Course
import React from "react";

const PersonLine = ({ person, deletePerson }) => {
  const handleClick = () => deletePerson(person)
  return(
    <p>
      {person.name} {person.number} <button onClick={handleClick}>delete</button>
    </p>
  )
}

const ShowPersons = ({ persons, deletePerson }) =>
  persons.map(person => 
    <PersonLine
      key={person.id}
      person={person}
      deletePerson={deletePerson}
    />)

export default ShowPersons
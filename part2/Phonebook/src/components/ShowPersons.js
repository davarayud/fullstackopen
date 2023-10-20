import React from "react";

const PersonLine = ({ person }) => <p>{person.name} {person.number}</p>

const ShowPersons = ({ persons }) =>
  persons.map(person => <PersonLine key={person.name} person={person} />)

export default ShowPersons
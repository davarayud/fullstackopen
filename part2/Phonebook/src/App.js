import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import ShowPersons from './components/ShowPersons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  } 

  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()
    if ((persons.filter(person => person.name === newName)).length > 0){
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject ={
        name: newName ,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const personsToShow = persons.filter(person =>
     person.name.toUpperCase().includes(filter.toUpperCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson} 
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber} 
        setNewNumber={setNewNumber} 
      />
      <h2>Numbers</h2>
      <ShowPersons persons={personsToShow} />
    </div>
  )
}

export default App
import React, { useState } from 'react'

const PersonLine = ({ person }) => <p>{person.name} {person.number}</p>

const ShowPersons = ({ persons }) =>
  persons.map(person => <PersonLine key={person.name} person={person} />)


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  const handleFilterChange = (event) => setFilter(event.target.value)
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  
  const personsToShow = persons.filter(person =>
     person.name.toUpperCase().includes(filter.toUpperCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter show with: <input
          name='filter'
          value={filter}
          onChange={handleFilterChange} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            name='name'
            value={newName}
            onChange={handleNameChange}
            />
        </div>
        <div>
          number: <input
            name='number'
            value={newNumber}
            onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ShowPersons persons={personsToShow} />
    </div>
  )
}

export default App
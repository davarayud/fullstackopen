import React, { useState, useEffect } from 'react'
import personsServices from './services/persons'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import ShowPersons from './components/ShowPersons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notifMessage, setNotifMessege] = useState( [ null, ''] )

  const hook = () => {
    personsServices
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  } 
  useEffect(hook, [])

  const setNotifObjet = (notif) => {
    setNotifMessege(notif)
    setTimeout(() => {
      setNotifMessege([null,''])
    }, 5000)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if ((persons.filter(person => person.name === newName)).length > 0){
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const personToModif = persons.find(person => person.name === newName)
        const changedPerson = {...personToModif, number: newNumber}
        personsServices
          .updatePerson(personToModif.id, changedPerson)
          .then(response => {
            setNotifObjet([`Modified ${newName}`, 'add-modif'])
            setPersons(persons.map(person => person.id !== personToModif.id ? person : response))
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            setNotifObjet([`${newName} was already removed from server`, 'error'])
            setPersons(persons.filter(person => person.id !== personToModif.id))
          })
      }
    } else {
      const personObject ={
        name: newName ,
        number: newNumber
      }
      personsServices
        .createPerson(personObject)
        .then(returnedPerson => {
          setNotifObjet([`Added ${newName}`, 'add-modif'])
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })  
    }
  }

  const deletePerson = (personToDelete) => {
    if (window.confirm(`Delete ${personToDelete.name}?`)){
      personsServices.deletePerson(personToDelete.id)
      setPersons(persons.filter(person => person.id !== personToDelete.id))
    }
  }

  const personsToShow = persons.filter(person =>
     person.name.toUpperCase().includes(filter.toUpperCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notifObjet={notifMessage} />
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
      <ShowPersons persons={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App
import React from "react";

const PersonForm = ({
    addPerson, 
    newName, 
    setNewName, 
    newNumber, 
    setNewNumber
  }) => {
    const handleNameChange = (event) => setNewName(event.target.value)
    const handleNumberChange = (event) => setNewNumber(event.target.value)
    return(
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
    )
}

export default PersonForm
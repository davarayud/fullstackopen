import React, {useState, useEffect} from "react";
import axios from "axios";
import Filter from "./components/Filter"
import DisplayCountries from './components/DisplayCountries'

function App() {
  const [ filter, setFilter] = useState('')
  const [ countries, setCountries] = useState([])

  const hook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(hook,[])

  const countriesToShow = countries.filter(countrie =>
    countrie.name.common.toUpperCase().includes(filter.toUpperCase())
 )


  return (
    <div className="App">
      <Filter filter={filter} setFilter={setFilter} text={"find countries:"} />
      <DisplayCountries countries={countriesToShow} />
    </div>
  );
}

export default App;

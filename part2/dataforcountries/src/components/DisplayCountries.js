import React from "react";

const DisplayLine = ({ countrie, setFilter }) => {
  const handleClick = () => setFilter(countrie.name.common)
  return(
    <p>
      {countrie.name.common}
      <button onClick={handleClick}>show</button>
    </p>
  )
}

const ShowCountries = ({ countries, setFilter}) =>
  countries.map(countrie => 
    <DisplayLine 
      key={countrie.name.common} 
      countrie={countrie} 
      setFilter={setFilter} 
    />
  )

const LanguageLine = ({ language }) => <li>{language}</li>

const ShowLanguages = ({ languages }) =>
  languages.map(language => 
    <LanguageLine key={language} language={language} />)

const ShowOneCountrie = ({ countrie }) =>{
  const languages = Object.values(countrie.languages)
  return(
    <div>
      <h1>{countrie.name.common}</h1>
      <p>Capital: {countrie.capital[0]}</p>
      <p>Population: {countrie.population}</p>
      <h2>Languages:</h2>
      <ul>
        <ShowLanguages languages={languages} />
      </ul>
      <img src={countrie.flags.png} alt="flag of countrie"/>
    </div>
  )
} 

  const DisplayCountries = ({ countries, setFilter }) =>{
  if(countries.length > 10){
    return(
      <p>Too many matches, specify another filter.</p>
    )
  }
  if(countries.length > 1 && countries.length < 11){
    return(
      <ShowCountries countries={countries} setFilter={setFilter}/>
    )
  }
  if(countries.length === 1){
    return(
      <ShowOneCountrie countrie={countries[0]} />
    )
  }
}

export default DisplayCountries
import axios from "axios";
import React, {useState, useEffect} from "react";

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

const ShowWeatherIcons = ({weatherIcons}) => weatherIcons.map(icon =>
    <img key={icon} src={icon} alt="weater icon"/>)

const ShowWeather = ({weather}) => {
  const windSpeedMph = parseInt(weather.windSpeed*0.621371)
  return(
    <>
      <p>
        <b>Temperature: </b>
        {weather.temperature} Celcius
      </p>
      <ShowWeatherIcons weatherIcons={weather.weatherIcons} />
      <p>
        <b>Wind: </b>
        {windSpeedMph} mph direction {weather.windDir}
      </p>
    </>
  )
}

const ShowOneCountrie = ({ countrie }) =>{
  const [weather, setWeather] = useState({
    temperature:'',
    weatherIcons:[],
    windSpeed:'',
    windDir:''
  })
  const languages = Object.values(countrie.languages)
  const params = {
    access_key: process.env.REACT_APP_API_KEY,
    query: countrie.capital[0]
  }
  const hook = () =>{
    axios
      .get('https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current', {params})
      .then(response => {
        setWeather({
          temperature: response.data.current.temperature,
          weatherIcons: response.data.current.weather_icons,
          windSpeed: response.data.current.wind_speed,
          windDir: response.data.current.wind_dir
        })
      })
      .catch(error => {console.log(error)})
  }
  useEffect(hook,[])

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
      <ShowWeather weather={weather} />
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
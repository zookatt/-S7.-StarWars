import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const url = 'https://swapi.py4e.com/api/starships/?page=1';
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await fetch(url);

        const { results } = await response.json()

        const starshipDetails = await Promise.all(results.map(async (starship) => {
          const { name, url } = starship
          const responseStarship = await fetch(url)
          const { model } = await responseStarship.json()
          console.log(`${name}\n${model}`);
          return { name, model };
        })
        );

        setStarships(starshipDetails);
      } catch (error) {
        console.log(error);
      }
    }

    callApi();
  }, [url]);

  return (
    <>
      <div className='container'>
        <ul>
          {starships.map((starship, index) => (
            <li key={index}>{starship.name}<br />{starship.model}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App

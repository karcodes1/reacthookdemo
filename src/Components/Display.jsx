import React, { useState, useEffect } from "react"
import AnimalDisplay from './AnimalDisplay';


const Display = () => {

  const [ animals, setAnimals ] = useState([]);

  const apiCall = () => {
    const resultArr = [];
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
    .then((res) => res.json())
    .then((data) => {
      const newAnimals = JSON.parse(JSON.stringify(animals));
      newAnimals.push(data);
      setAnimals(newAnimals);
    })
  }

  const handleClick = () => {
    apiCall();
  }


  useEffect(() => {
    apiCall();
  }, [])


  return (
    <div>
      <AnimalDisplay 
      animals = { animals }
      handleClick = { handleClick }/>
    </div>
  )

}


export default Display;

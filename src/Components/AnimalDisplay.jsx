import React, { useState, useEffect } from "react"
import AnimalCard from './AnimalCard';


const AnimalDisplay = ({ animals, handleClick }) => {
  const [ cards, setCards ] = useState([])

  useEffect(() => {
    const newCards = [];
    for(let i = 0; i < animals.length; i++){
      newCards.push(<AnimalCard
        key = { i }
        name = { animals[i].name }
        activeTime = { animals[i].active_time }
        animalType = { animals[i].animal_type }
        diet = { animals[i].diet }
        habitat = { animals[i].habitat }
        geoRange = { animals[i].geo_range }
        imageLink = { animals[i].image_link }
        latinName = { animals[i].latin_name }
        lengthMax = { animals[i].length_max }
        lengthMin = { animals[i].length_min }
        lifespan = { animals[i].lifespan }
        weightMax = { animals[i].weight_max }
        weightMin = { animals[i].weight_min }
        handleClick = { handleClick }
        />)
        setCards(newCards);
    }
  }, [animals])

 
    return (
      <div className="card"> 
        { cards }
      </div>
    )



}

export default AnimalDisplay;
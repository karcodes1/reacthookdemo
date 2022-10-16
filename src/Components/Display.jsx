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


// class AnimalDisplay2 extends Component {
//   constructor() {
//     super();
//     this.state = {
//       animals: [],
//     };
//   }


//   apiCall = () => {
//     const resultArr = [];
//     fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
//     .then((res) => res.json())
//     .then((data) => {
//       resultArr.push(data);
//       const newState = JSON.parse(JSON.stringify(this.state.animals));
//       newState.push(data);
//       this.setState({animals: newState});
//       // this.setState({animals: resultArr});
//     })
//   }

//   handleClick = () => {
//     this.apiCall();
//   }


//   render() {

//     const cards = [];
//     for(let i = 0; i < this.state.animals.length; i ++){
//       cards.push(<AnimalCard
//         key = { i }
//         name = { this.state.animals[i].name }
//         activeTime = { this.state.animals[i].active_time }
//         animalType = { this.state.animals[i].animal_type }
//         diet = { this.state.animals[i].diet }
//         habitat = { this.state.animals[i].habitat }
//         geoRange = { this.state.animals[i].geo_range }
//         imageLink = { this.state.animals[i].image_link }
//         latinName = { this.state.animals[i].latin_name }
//         lengthMax = { this.state.animals[i].length_max }
//         lengthMin = { this.state.animals[i].length_min }
//         lifespan = { this.state.animals[i].lifespan }
//         weightMax = { this.state.animals[i].weight_max }
//         weightMin = { this.state.animals[i].weight_min }
//         handleClick = { this.handleClick }
//         />)
//     }

//     return(
//       <div className="card">
//         { cards }
//       </div>
//     )
//   }
// }

export default Display;
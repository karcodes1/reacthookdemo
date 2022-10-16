import React, { Component, useLayoutEffect } from 'react';
import { render } from 'react-dom';


const AnimalCard = (
  { name, 
    handleClick,
    latinName,
    animalType,
    geoRange,
    habitat,
    imageLink,
    diet,
    lifespan,
    lengthMax,
    lengthMin,
    weightMax,
    weightMin 
  }) => {
  return (
    <ul>
    <li>
      <img src= {imageLink} className="image"></img>
    </li>
    <li>
      <span className ="leftList">Name: </span>
      <span className="rightList">{name}</span>
    </li>
    <li>
    <span className ="leftList">Latin Name: </span>
    <span className="rightList">{latinName}</span>
    </li>
    <li>
    <span className ="leftList">Animal Type: </span>
    <span className="rightList">{animalType}</span>
    </li>
    <li>
    <span className ="leftList">Geographical Range: </span>
    <span className="rightList">{geoRange}</span>
    </li>
    <li>
    <span className ="leftList">Habitat: </span>
    <span className="rightList">{habitat}</span>
    </li>
    <li>
    <span className ="leftList">Diet: </span>
    <span className="rightList">{diet}</span>
    </li>
    <li>
    <span className ="leftList">Lifespan: </span>
    <span className="rightList">{lifespan + ' years'}</span>
    </li>
    <li>
    <span className ="leftList">Length Range: </span>
    <span className="rightList">{lengthMin + ' - ' + lengthMax + ' meters'}</span>
    </li>
    <li>
    <span className ="leftList">Weight Range: </span>
    <span className="rightList">{weightMin + ' - ' + weightMax + ' kg'}</span>
    </li>
    <li>
      <button onClick={handleClick}>
        Get New Animal!
      </button>
    </li>
  </ul>

  )
}

class AnimalCard2 extends Component {
  constructor(props) {
    super();
  }

  render() {
    return(
      <ul>
        <li>
          <img src= {imageLink} className="image"></img>
        </li>
        <li>
          <span className ="leftList">Name: </span>
          <span className="rightList">{name}</span>
        </li>
        <li>
        <span className ="leftList">Latin Name: </span>
        <span className="rightList">{latinName}</span>
        </li>
        <li>
        <span className ="leftList">Animal Type: </span>
        <span className="rightList">{animalType}</span>
        </li>
        <li>
        <span className ="leftList">Geographical Range: </span>
        <span className="rightList">{geoRange}</span>
        </li>
        <li>
        <span className ="leftList">Habitat: </span>
        <span className="rightList">{habitat}</span>
        </li>
        <li>
        <span className ="leftList">Diet: </span>
        <span className="rightList">{diet}</span>
        </li>
        <li>
        <span className ="leftList">Lifespan: </span>
        <span className="rightList">{lifespan + ' years'}</span>
        </li>
        <li>
        <span className ="leftList">Length Range: </span>
        <span className="rightList">{lengthMin + ' - ' + lengthMax + ' meters'}</span>
        </li>
        <li>
        <span className ="leftList">Weight Range: </span>
        <span className="rightList">{weightMin + ' - ' + weightMax + ' kg'}</span>
        </li>
        <li>
          <button onClick={handleClick}>
            Get New Animal!
          </button>
        </li>
      </ul>
    )
  }
}

export default AnimalCard;
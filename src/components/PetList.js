import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


// delete is called here 

const PetList = (props) => {

  removePet = (petName) => {
    const updatedPets = props.pets.filter(pet => pet.name === petName )

    this.setState
  }
  // updatedPets = 

const listOfPets = props.pets.map((pet, i) => {
    return <PetCard 
    key={i} 
    id={pet.id}
    name={pet.name}
    species={pet.species}
    about={pet.about}
    className="pet-card"
    remove={removePet}
    />;})

  return ( 
    <div className="app-card-list"> 
        {listOfPets}
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
}


export default PetList;

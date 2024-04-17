import React from 'react';
import profileImg from '../assets/person.jpg';
import './card.css'

const Card = ({ candidateNames }) => {
  return (
    <div className='container'>
      {candidateNames.map((candidate, i) => {
        return (
          <div className='card' key={i}>
            <img src={profileImg} alt="Candidate" id="profileImg"/>
            <p className='name'> {candidate} </p>
          </div>
        )
      })}
    </div>
  )
}

export default Card;



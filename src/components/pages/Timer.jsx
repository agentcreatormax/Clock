import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import '../styles/Timer.css';
import { useNavigate } from 'react-router-dom';

const Timer = () => {
  const navigate=useNavigate();

  const handleBack=()=>{
    navigate('/')
  }

  return (
    <div>
      <h1 className='page'>
              <button className="back" onClick={handleBack}><FontAwesomeIcon icon={faArrowLeft}/></button>
              Timer
      </h1>
      <h2 className='text'>Try Urself</h2>
    </div>
  )
}

export default Timer



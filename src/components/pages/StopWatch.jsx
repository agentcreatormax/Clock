import React, { useEffect } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay,faStop,faPause,faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/StopWatch.css'

const StopWatch = () => {

  const navigate=useNavigate();

  const handleBack=()=>{
    navigate('/')
  }
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(()=>{
    let interval = null
    if(isRunning){
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 10)
    }
    else if(!isRunning){
      clearInterval(interval);
    }
    return ()=>clearInterval(interval);     
  }, [isRunning]);
  
  const handleStart=()=>{
    setIsRunning(true);

  }
  const handlePause=()=>{
    setIsRunning(false);
  }
  const handleReset=()=>{
    setTime(0);
    setIsRunning(false);
  }
  return (
    <div>
      <h1 className='page'>
        <button className="back" onClick={handleBack}><FontAwesomeIcon icon={faArrowLeft}/></button>
        StopWatch
      </h1>
      <div className='container'>
        <p className='time'>
          <span>{("0"+ Math.floor(time/6000)%60).slice(-2)}:</span>
          <span>{("0"+ Math.floor(time/100)%60).slice(-2)}:</span>
          <span>{("0"+ Math.floor(time/1)%100).slice(-2)}</span>
        </p>  
        <div className='btn'>
          {isRunning===false?
            <button className='playbtn' onClick={handleStart}> <FontAwesomeIcon icon={faPlay}/> <p className='gap'>Start</p>    </button>:
            <button className='stopbtn' onClick={handlePause}><FontAwesomeIcon icon={faPause}/> <p className='gap'>Stop</p></button>
          }
          <button className='resetbtn' onClick={handleReset}><FontAwesomeIcon icon={faStop}/> <p className='gap'>Reset</p></button>
        </div>
      </div>
      
    </div>
  )
}

export default StopWatch

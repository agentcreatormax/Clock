import React from 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();

  const NavToStopwatch = () =>{
    navigate('/stopwatch');
  };

  const NavToTimer = ()=>{
    navigate('/timer');
  }
  return (
    <div>
      <h1 className='page'>Clock</h1>
      <div className="container">
        <button className="btns" onClick={NavToStopwatch}>StopWatch</button>
        <button className="btns" onClick={NavToTimer}>Timer</button>
      </div>
    </div>
  )
}

export default Home

// import React from 'react';
// import '../styles/Home.css';
// import { useNavigate } from 'react-router-dom';

// function Homepage() {

//   const handleStopwatch = () => {
//     navigate('/stopwatch'); 
//   };

//   const handleTimer = () => {
//     navigate('/timer'); 
//   };

//   return (
//     <div>
//       <h1 className='page'>Set Time</h1>
//       <div className='container'>
//         <button className='btns' onClick={handleStopwatch}>Stopwatch</button>
//         <button className='btns' onClick={handleTimer}>Timer</button>
//       </div>
//     </div>
//   );
// }

// export default Homepage;
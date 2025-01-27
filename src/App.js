
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/pages/Home';
import StopWatch from './components/pages/StopWatch';
import Timer from './components/pages/Timer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/StopWatch" element={<StopWatch />} />
          <Route path="/Timer" element={<Timer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


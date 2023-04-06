import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Trasgo from './pages/trasgo';
import RacePageHome from './pages/RacePageHome';


function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/racePageHome' element={<RacePageHome />} />
      <Route path='/trasgo' element={<Trasgo />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;

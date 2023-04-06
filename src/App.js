import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Trasgo from './pages/trasgo';
import trasgoDesc from './texts/TrasgoDesc';
import acromantula from './images/bestiary/acromantulasFundo.png';
import acromantulaDesc from './texts/AcromantulaDesc';
import trasgo from './images/bestiary/fundoTrasgo.png';
import RacePageHome from './pages/RacePageHome';


function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/racePageHome' element={<RacePageHome />} />
      <Route path='/trasgo' element={<Trasgo image={trasgo} creatureContent={trasgoDesc}/>} />
      <Route path='/acromantula' element={<Trasgo image={acromantula} creatureContent={acromantulaDesc}/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;

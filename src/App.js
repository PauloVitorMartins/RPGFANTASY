import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Creature from './pages/Creature';
import trasgoDesc from './texts/TrasgoDesc';
import acromantula from './images/bestiary/acromantulasFundo.png';
import acromantulaDesc from './texts/AcromantulaDesc';
import trasgo from './images/bestiary/fundoTrasgo.png';
import RacePageHome from './pages/RacePageHome';
import Bestiary from './pages/Bestiary';


function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/racePageHome' element={<RacePageHome />} />
      <Route path='/trasgo' element={<Creature image={trasgo} creatureContent={trasgoDesc}/>} />
      <Route path='/acromantula' element={<Creature image={acromantula} creatureContent={acromantulaDesc}/>} />
      <Route path='/bestiary' element={<Bestiary />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;

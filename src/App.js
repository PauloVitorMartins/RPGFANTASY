import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import elf from './images/elf2.jpg';
import human from './images/Human 2.jpg';
import orc from './images/Orc2.jpg';
import RacePage from './pages/racePage';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/elf' element={<RacePage text="The Elves" image={elf}/>} />
      <Route path='/human' element={<RacePage text="The Humans" image={human} />} />
      <Route path='/orc' element={<RacePage text="The Orcs" image={orc} />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;

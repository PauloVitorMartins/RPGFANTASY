import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ElfPage from './pages/ElfPage';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/elf' element={<ElfPage />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;

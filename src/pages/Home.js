import Header from '../components/Header';
import Chose from '../components/Chose';
import ImagesRace from '../components/Images';
import orcFlag from '../images/orcFlag.png';
import humanFlag from '../images/humanFlag.png';
import elfFlag from '../images/elfFlag.png';
import React, {useState} from 'react';
import elf from '../images/elf.jpg';
import orc from '../images/orc.jpg';
import human from '../images/human.jpg';
import '../css/home.css';

export default function Home () {
    const [whoExibs, setWhoExibs] = useState(0);
    const funcSet = () => {
        if (whoExibs < 2) {
            setWhoExibs(whoExibs + 1);
            console.log(whoExibs);
        }
    }
    const funcSetSub = () => {
        if(whoExibs > 0) {
            setWhoExibs(whoExibs -1);
        }
    }
    return (
<div className='everything'>
      <Header />
      <hr className='underBar'></hr>
      <div className='underUnderBar'>
      <Chose />
      <div className='imageDivs'>
      <button onClick={funcSet}>seta</button>
      {whoExibs === 1 &&<ImagesRace imageRace={elfFlag} link={elf} race='elf'/>}
      {whoExibs === 0 && <ImagesRace imageRace={humanFlag} link={human} race='human'/>}
      {whoExibs === 2 &&<ImagesRace imageRace={orcFlag} link={orc} race='orc'/>}
      <button onClick={funcSetSub}>seta</button>
      </div>
      </div>
    </div>
    )
}
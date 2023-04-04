import Header from '../components/Header';
import Chose from '../components/Chose';
import ImagesRace from '../components/Images';
import orcFlag from '../images/orcFlag.png';
import humanFlag from '../images/humanFlag.png';
import elfFlag from '../images/elfFlag.png';
import parapeito from '../images/parapeito.png';
import leftArrow from '../images/arcoSeta.png';
import rightArrow from '../images/rightArrow.png';
import React, {useState} from 'react';
import elf from '../images/elf.png';
import orc from '../images/orc.png';
import human from '../images/human.png';
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
      <hr className='parapeito'></hr>
      <div className='underUnderBar'>
      <div className='wall'>
      <Chose />
      <div className='disp'>
      <div className='imageDivs'>
      <button id='r' onClick={funcSetSub}><img className="arrowB" src={leftArrow}/></button>
      {whoExibs === 1 &&<ImagesRace imageRace={elfFlag} link={elf} race='elf'/>}
      {whoExibs === 0 && <ImagesRace imageRace={humanFlag} link={human} race='human'/>}
      {whoExibs === 2 &&<ImagesRace imageRace={orcFlag} link={orc} race='orc'/>}
      <button id='l' onClick={funcSet}><img className="arrowB" src={rightArrow} /></button>
      </div>
      </div>
      </div>
      </div>
    </div>
    )
}
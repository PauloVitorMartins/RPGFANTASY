import Header from '../components/Header';
import Chose from '../components/Chose';
import ImagesRace from '../components/Images';
import elf from '../images/elf.jpg';
import orc from '../images/orc.jpg';
import human from '../images/human.jpg';
import '../css/home.css';

export default function Home () {
    return (
<div className='Everything'>
      <Header />
      <hr className='underBar'></hr>
      <Chose />
      <div className='imageDivs'>
      <ImagesRace link={elf} race='elf'/>
      <ImagesRace link={human} race='human'/>
      <ImagesRace link={orc} race='orc'/>
      </div>
    </div>
    )
}
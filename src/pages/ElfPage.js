import Header from '../components/Header';
import elf from '../images/elf2.jpg';
import ElfDesc from '../texts/ElfDesc';
import '../css/elfPage.css';


export default function Home () {
    return (
<div className='Everything'>
      <Header />
      <hr className='underBar'></hr>
      <h1 className='theElfs'>The Elfs</h1>
      <div className='elfBox'>
        <img className='elfImage' src={elf}></img>
        <ElfDesc />
      </div>
      </div>
    )
}
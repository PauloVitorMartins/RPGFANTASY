import Header from '../components/Header';
 import ImagesRace from '../components/Images'; 
import background from '../images/fundoRaceHome.png';
import '../css/racePageHome.css'


export default function RacePageHome () {
    return (
<div className='every'>
<Header />
<img className='background-race-home' src={background} />
<div className='main-cont'>
  <p className='texto'>Escolha a sua raça</p>
  <ImagesRace />
</div>
</div>
    )
}
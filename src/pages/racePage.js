import Header from '../components/Header';
import ElfDesc from '../texts/ElfDesc';
import '../css/racePage.css';
import HumanDesc from '../texts/HumanDesc';
import OrcsDesc from '../texts/OrcsDesc';


export default function RacePage (props) {
  const image = props.image
  const text = props.text
  return (
    <div className='Everything'>
      <Header />
      <hr className='underBar'></hr>
      <h1 className='theElfs'>{text}</h1>
      <div className='elfBox'>
        <img className='elfImage' src={image}></img>
        {text === 'The Elves' && <ElfDesc />}
        {text === 'The Humans' && <HumanDesc />}
        {text === 'The Orcs' && <OrcsDesc />}
      </div>
      </div>
    )
}
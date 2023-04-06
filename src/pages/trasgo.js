import Header from '../components/Header';
import '../css/trasgo.css';

export default function RacePage (props) {
    const image = props.image;
    const CreatureText = props.creatureContent;
  return (
    <div className='everythingTrasgo'>
      <Header />
      <img className="fundoTrasgo" src={image}/>
      <CreatureText />
    </div>
    )
}
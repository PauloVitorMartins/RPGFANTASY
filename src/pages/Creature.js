import Header from '../components/Header';
import '../css/creature.css';

export default function Creature (props) {
    const image = props.image;
    const CreatureText = props.creatureContent;
  return (
    <div className='everythingCreature'>
      <Header />
      <img className="fundoCreature" src={image}/>
      <CreatureText />
    </div>
    )
}
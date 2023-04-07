import Header from '../components/Header';
import backgroundB from '../images/bestiary/biblirayFund.png';
import '../css/bestiary.css';

export default function Bestiary () {
    const creatures = ['acromantula', 'trasgo'];
  return (
    <div className='everythingBest'>
    <Header />
    <img className='background-b' src={backgroundB}/>
    <div className='main-content-b'>
        <p className='title-book'>Criaturas</p>
        {creatures.map((el) => <a className='textBook' href={`/${el}`}>{el}</a>)}
    </div>
    </div>
    )
}
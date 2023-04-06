import { useNavigate } from 'react-router-dom';
import '../css/creature.css';

export default function creatureT () {
    const navigate = useNavigate
    return (
<div className='main-content-creature'>
        <p className='titleCreature'>Trasgo</p>
        <div className='textCreatureMain'>
        <p className='textCreature'>Os Creatures sempre estiveram nessas</p>
        <p className='textCreature'>terras, desde quando o primeiro pântano</p>
        <p className='textCreature'>húmido foi formado ele passava lama</p>
        <p className='textCreature'>em sua cara feia</p>
        <p className='textCreature'>mas não se engane...</p>
        <p className='textCreature'>São criaturas altamente perigosas</p>
        <p className='textCreature'>Pode apresentar comportamento tribal</p>
        <p className='textCreature'>altamente territorialisa</p>
        <p className='textCreature'>grande força é a sua característica</p>
        <p className='textCreature'>seria capaz de arremessar vacas pelo ar</p>
        <p className='textCreature'>com seu enorme porrete</p>
        <p className='textCreature'>onde vi isso antes...</p>
        <p className='textCreature'>enfim, se o ver passe o cabo da espada</p>
        <p className='textCreature'>pode ganhar uns trocados</p>
        </div>
        <button className="backToBestiary" onClick={() => navigate('/bestiary')}>Back</button>
      </div>

    )
}
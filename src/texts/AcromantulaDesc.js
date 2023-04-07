import { useNavigate } from 'react-router-dom';
import '../css/creature.css';

export default function AcromantulaT () {
    const navigate = useNavigate
    return (
<div className='main-content-creature'>
        <p className='titleCreature'>Acromântula</p>
        <div className='textCreatureMain'>
        <p className='textCreature'>O que dizer, aranhas já são assustadoras</p>
        <p className='textCreature'>quem dirá se estiverem em um tamanho</p>
        <p className='textCreature'>extra grande!</p>
        <p className='textCreature'>cuidado viajante, no fundo das florestas</p>
        <p className='textCreature'>onde a luz do sol mal consegue passar</p>
        <p className='textCreature'>ou em cavernas escuras</p>
        <p className='textCreature'>ali elas se encontram</p>
        <p className='textCreature'>altamente territorialisa</p>
        <p className='textCreature'>geralmente em grandes quantidades</p>
        <p className='textCreature'>é raro ver uma acromântula só</p>
        <p className='textCreature'>mantenha-se atento a todas suas oito pernas</p>
        <p className='textCreature'>tente corta-lás</p>
        <p className='textCreature'>assim talvez não vire jantar</p>
        </div>
        <a className="backToBestiary" href='/bestiary'>Back</a>
      </div>

    )
}
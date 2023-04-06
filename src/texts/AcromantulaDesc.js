import { useNavigate } from 'react-router-dom';
import '../css/trasgo.css';

export default function AcromantulaT () {
    const navigate = useNavigate
    return (
<div className='main-content-trasgo'>
        <p className='titleTrasgo'>Acromântula</p>
        <div className='textTrasgoMain'>
        <p className='textTrasgo'>O que dizer, aranhas já são assustadoras</p>
        <p className='textTrasgo'>quem dirá se estiverem em um tamanho</p>
        <p className='textTrasgo'>extra grande!</p>
        <p className='textTrasgo'>cuidado viajante, no fundo das florestas</p>
        <p className='textTrasgo'>onde a luz do sol mal consegue passar</p>
        <p className='textTrasgo'>ou em cavernas escuras</p>
        <p className='textTrasgo'>ali elas se encontram</p>
        <p className='textTrasgo'>altamente territorialisa</p>
        <p className='textTrasgo'>geralmente em grandes quantidades</p>
        <p className='textTrasgo'>é raro ver uma acromântula só</p>
        <p className='textTrasgo'>mantenha-se atento a todas suas oito pernas</p>
        <p className='textTrasgo'>tente corta-lás</p>
        <p className='textTrasgo'>assim talvez não vire jantar</p>
        </div>
        <button className="backToBestiary" onClick={() => navigate('/bestiary')}>Back</button>
      </div>

    )
}
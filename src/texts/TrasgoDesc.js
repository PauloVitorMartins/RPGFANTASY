import { useNavigate } from 'react-router-dom';
import '../css/trasgo.css';

export default function TrasgoT () {
    const navigate = useNavigate
    return (
<div className='main-content-trasgo'>
        <p className='titleTrasgo'>Trasgo</p>
        <div className='textTrasgoMain'>
        <p className='textTrasgo'>Os trasgos sempre estiveram nessas</p>
        <p className='textTrasgo'>terras, desde quando o primeiro pântano</p>
        <p className='textTrasgo'>húmido foi formado ele passava lama</p>
        <p className='textTrasgo'>em sua cara feia</p>
        <p className='textTrasgo'>mas não se engane...</p>
        <p className='textTrasgo'>São criaturas altamente perigosas</p>
        <p className='textTrasgo'>Pode apresentar comportamento tribal</p>
        <p className='textTrasgo'>altamente territorialisa</p>
        <p className='textTrasgo'>grande força é a sua característica</p>
        <p className='textTrasgo'>seria capaz de arremessar vacas pelo ar</p>
        <p className='textTrasgo'>com seu enorme porrete</p>
        <p className='textTrasgo'>onde vi isso antes...</p>
        <p className='textTrasgo'>enfim, se o ver passe o cabo da espada</p>
        <p className='textTrasgo'>pode ganhar uns trocados</p>
        </div>
        <button className="backToBestiary" onClick={() => navigate('/bestiary')}>Back</button>
      </div>

    )
}
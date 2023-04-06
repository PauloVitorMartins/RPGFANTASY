import Header from '../components/Header';
import background from '../images/fundoHome.png';
import React from 'react';


import '../css/home.css';

export default function Home () {
    return (
<div className='everything'>
<Header />
<img className='background'src={background} />
<div className='main-content'>
<p className='text'>Entre em nosso mundo!<br/>escolha já sua raça e sua classe</p>
<a className="magic" href='/racePageHome'>Magic Here</a>
</div>
</div>
)
}
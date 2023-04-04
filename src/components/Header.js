import '../css/header.css';
import logo from '../images/logo.png';
import gif from '../images/R.gif';

export default function Header () {
    return (
        <header className="Header">
            <a className='navBar' href="/">Home</a>
            <a className='navBar' href="/">Bestiary</a>
            <a className='navBar' href="/">Places</a>
            <img className='dragonGIF' src={gif}/>
        </header>
    )
}
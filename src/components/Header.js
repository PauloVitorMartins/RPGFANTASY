import '../css/header.css';
import gif from '../images/R.gif';

export default function Header () {
    return (
        <header className="Header">
            <a className='navBar' href="/">Home</a>
            <a className='navBar' href="/">Bestiary</a>
            <a className='navBar' href="/">Places</a>
            <a className='Title'>Kingdom Vanance</a>
            <img className='dragonGIF' src={gif}/>
        </header>
    )
}
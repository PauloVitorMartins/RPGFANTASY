import '../css/header.css';

export default function Header () {
    return (
        <div>
        <div className='kingdom'>
            <a className='kingdom-title' href="/">Kingdom Vanance</a>
        </div>
        <header className="Header">
            <a className='navBar' href="/">Home</a>
            <a className='navBar' href="/bestiary">Bestiary</a>
            <a className='navBar' href="/">Places</a>
        </header>
        </div>
    )
}
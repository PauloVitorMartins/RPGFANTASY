import '../css/images.css';
import { useState } from 'react';
import elf from '../images/race/elf.png';
import orc from '../images/race/orc.png';
import human from '../images/race/human.png';
import dwarf from '../images/race/dwarf.png'

export default function ImagesRace () {
    const [whoExibs, setWhoExibs] = useState(0);
    const funcSet = () => {
        if (whoExibs < 3) {
            setWhoExibs(whoExibs + 1);
            console.log(whoExibs);
        }
    }
    const funcSetSub = () => {
        if(whoExibs > 0) {
            setWhoExibs(whoExibs -1);
        }
    }
    if(whoExibs === 0) {
        return (
            <div className='images-paint'>
                <img className="imageItself" src={human} />
                <div className='nameAndBut'>
                <button onClick={funcSetSub}>{"<"}</button>
                <p>Human</p>
                <button onClick={funcSet}>{">"}</button>

                </div>
            </div>

        )
    }
    if(whoExibs === 1) {
        return (
            <div className='images-paint'>
                <img className="imageItself" src={dwarf} />
                <div className='nameAndBut'>
                <button onClick={funcSetSub}>{"<"}</button>
                <p>Dwarf</p>
                <button onClick={funcSet}>{">"}</button>

                </div>
            </div>

        )
    }
    if(whoExibs === 2) {
        return (
            <div className='images-paint'>
                <img className="imageItself" src={elf} />
                <div className='nameAndBut'>
                <button onClick={funcSetSub}>{"<"}</button>
                <p>Elf</p>
                <button onClick={funcSet}>{">"}</button>

                </div>
            </div>

        )
    }
    if(whoExibs === 3) {
        return (
            <div className='images-paint'>
                <img className="imageItself"src={orc} />
                <div className='nameAndBut'>
                <button onClick={funcSetSub}>{"<"}</button>
                <p>Orc</p>
                <button onClick={funcSet}>{">"}</button>

                </div>
            </div>

        )
    }
}
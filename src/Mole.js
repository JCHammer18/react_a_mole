import mole from '../src/embedded/mole.png';
import { useEffect } from 'react';

export default function Mole(props) {
    useEffect(() => {
        const hideMoleAfter = Math.floor(Math.random() * 4500 + 500);
        const timer = setTimeout(() => {
                props.setIsShowing(false); 
        }, hideMoleAfter); 
        return () => {
            clearTimeout(timer);
        }
    })
    return <img alt='mole' src={mole} onClick={props.moleClicked}/>
}
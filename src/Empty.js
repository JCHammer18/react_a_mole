import moleHill from '../src/embedded/molehill.png';
import { useEffect } from 'react';

export default function Empty(props) {    useEffect(() => {
    const showMoleAfter = Math.floor(Math.random() * 4500 + 500);
    const timer = setTimeout(() => {
            props.setIsShowing(true); 
    }, showMoleAfter); 
    return () => {
        clearTimeout(timer);
    }
})
    return <img alt='empty mole hill' src={moleHill}/>
}
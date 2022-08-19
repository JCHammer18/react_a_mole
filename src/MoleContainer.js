import {useState} from 'react'; 
import Empty from './Empty';
import Mole from './Mole';

export default function MoleContainer(props) {
    const [isShowing, setIsShowing] = useState(false); 


    const handleMoleClicked = () => {
        if (isShowing) {
            props.addToScore(1);
        }
    }
    return <div>
        {
            isShowing ? 
            <Mole setIsShowing={setIsShowing} moleClicked={handleMoleClicked}/> 
            : 
            <Empty setIsShowing={setIsShowing}/>
        }   
        </div>
}
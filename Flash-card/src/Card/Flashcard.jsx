import icon from '/src/assets/reload.png'
import styles from './Flashcard.module.css';
import { useState } from 'react';

function Flashcard({front,back}){
    const [isFront, setIsFront] = useState(true);


    const handleClick = () =>{
      setIsFront(prev => !prev);
    };

    return(
        <div id='body' className={styles.Cards}>
            <h2 id= 'message'> {isFront ? front : back}</h2>

            <input id='fcard' 
                type="image"
                src= {icon}
                width ='50' 
                alt= 'reload symbol'
                onClick= {handleClick}
            />
        </div>
    );
}


export default Flashcard
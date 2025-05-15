import icon from '/src/assets/reload.png'
import styles from './Flashcard.module.css';

function Flashcard(front,back){

    return(
        <div className={styles.Cards}>
            <h2 id= 'message'> Welcome to France, What would you like to eat</h2>

            <input id='fcard' 
                type="image"
                src= {icon}
                width ='50' 
                alt= 'reload symbol'
                onclick="handleClick(front, back)"
            />
        </div>
    );
}


export default Flashcard
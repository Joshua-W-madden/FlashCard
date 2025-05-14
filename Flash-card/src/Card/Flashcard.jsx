import icon from '/src/assets/reload.png'
import styles from './Flashcard.module.css';

function Flashcard(props){
    return(
        <div className={styles.Cards}>
            <h2>{props.front}</h2>
            <input id='fcard' 
                type="image"
                src= {icon}
                width ='50' 
                alt= 'reload symbol'
            />
        </div>
    );
}

export default Flashcard
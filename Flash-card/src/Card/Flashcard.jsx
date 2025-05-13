import icon from '/src/assets/reload.png'
import styles from './Flashcard.module.css';
function Flashcard(){
    return(
        <div className={styles.Cards}>
            <h2>What is the capital of France</h2>
            <input 
                type="image"
                src= {icon}
                width ='50' 
                alt= 'reload symbol'
            />
        </div>
    );
}

export default Flashcard
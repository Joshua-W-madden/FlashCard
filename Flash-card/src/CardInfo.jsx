import { useState } from "react";
import Flashcard from "./Card/Flashcard";

function CardInfo(){
    const [fInput, setFinput] = useState("");
    const [bInput, setBinput] = useState("");
    const [flashCards, setFlashCards] = useState([]);
    
    const handleSubmit = event =>{
        event.preventDefault();
        if(fInput === "" || bInput === "") return;

        const newCard = {front: fInput, back: bInput};
        setFlashCards([ newCard,...flashCards]);
        setBinput("");
        setFinput("");


    }
        

    return(
        <div className="CardDetails">
            <form onSubmit={handleSubmit}>
                <label htmlFor="fInput">Front: </label>
                <input type="text" id='fInput' name= "fInput" value={fInput} onChange={(e) => setFinput(e.target.value)}/>
                <br/>

                <label htmlFor="bInput">Back: </label>
                <input type="text" id="bInput" name= "bInput" value={bInput} onChange={(e) => setBinput(e.target.value)}/>
                <br/>

                <button type="submit">submit</button>
                <button type="reset" onClick={() => {setFinput(''); setBinput('')}}>reset</button>
            </form>

            <div className="FlashCardList">
                {flashCards.map((card, index) => (
                    <Flashcard key={index} front={card.front} back={card.back}/>
                ))}
            </div>
        </div>
    );
}

export default CardInfo
import { useState } from "react";
import Flashcard from "./Card/Flashcard";

function CardInfo(){
    
    return(
        <div className="CardDetails">
            <form>
                <label htmlfor="front">Front: </label>
                <input type="text" id='fInput' name= "front" />
                <br/>

                <label htmlFor="back">Back: </label>
                <input type="text" id="bInput" name= "back" />
                <br/>

                <button type="submit">submit</button>
                <button type="reset">reset</button>
            </form>
        </div>
    );
}

export default CardInfo
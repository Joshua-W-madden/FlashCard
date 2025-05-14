import Flashcard from "./Card/Flashcard";

function CardInfo(){
    var flashInfo = {front:"", back:""};
    return(
        <div className="CardDetails">
            <form onSubmit={<Flashcard front={front}/>}>
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

function sendCard(){
    return(
        <Flashcard front={front}/>
    );
}

export default CardInfo
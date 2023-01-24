import { useState } from "react";
import quotes from "../quotes.json";

const colorsBackground = [ '#2D2698', '#0055C2', '#007AD5', '#009BD4', '#00B9C5', '#00D5B1'];


const QuoteBox = () =>{

    const indexRamdom = Math.floor(Math.random() * quotes.length );
    const [index, setIndex] = useState(indexRamdom);

    const changeQuote = () => {
        const randomIndex = Math.floor(Math.random () * quotes.length);
        setIndex(randomIndex)
    }

    const randomColor = Math.floor(Math.random() * colorsBackground.length )
    document.body.style = `background: ${colorsBackground[randomColor]} `;

  return (
    <div className="quotes-card" style = {{color: colorsBackground[randomColor]}}>
        
        <div className="quotes-quote">
            <div className="quote-icon">
                <i className="fa-solid fa-quote-left"></i>
            </div>
            <div className="quote-text">
                <div className="phrase">
                    {quotes[index].quote}
                </div>
                <div className="author">
                    {quotes[index].author}
                </div>
            </div>
            <div className="OnClick" >
                <button onClick={changeQuote} style = {{background: colorsBackground[randomColor]}}><i className="fa-solid fa-angle-right"></i></button>    
            </div>
            
        </div>


      
    </div>
  );

}

export default QuoteBox;
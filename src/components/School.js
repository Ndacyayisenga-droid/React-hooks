import React from "react";
import {useState} from "react";

function School(){
    const [ pens, setPens] = useState(0);
    const [ books, setBooks] = useState(0);
    
    return(
        <main>
            <section>
                <div>pens :{pens}</div>
                <button onClick={() => setPens(pens + 1)}>add</button>
                <button onClick={() => setPens(pens - 1)}>subtract</button>
            </section>

            <section>
                <div>books :{books}</div>
                <button onClick={() => setBooks(books + 1)}>add</button>
                <button onClick={() => setBooks(books - 1)}>subtract</button>
            </section>
        </main>
    )
}

export default School;
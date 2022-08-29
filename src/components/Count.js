import React from "react";
import { useState} from 'react';

function Count(){
    const [ goats, setGoats] = useState(0);
    const [ cows, setCows] = useState(0);

    return(
        <main>
            <section>
                <div>goats: {goats}</div>
                <button onClick={() => setGoats(goats + 1)}>Increment</button>
                <button onClick={() => setGoats(goats -1)}>Decrement</button>
            </section>

            <section>
                <div>cows: {cows}</div>
                <button onClick={() => setCows(cows + 1)}>Increment</button>
                <button onClick={() => setCows(cows -1)}>Decrement</button>
            </section>
        </main>
    )
}

export default Count;
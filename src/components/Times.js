import React from "react";
import { useState} from 'react';

function Times(){
    const [ times, setTimes ] = useState(0);

    return(
        <main>
            <section>
                <div>You have clicked me {times} times</div>
                <button onClick={()=> setTimes(times + 1)}>Click</button>
            </section>
        </main>
    )
}

export default Times;
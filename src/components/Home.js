import React from 'react';
import { useState } from 'react';


function Home(){
    const [ forks, setForks ] = useState(0);
    const [ spoons, setSpoons ] = useState(0);

    return(
        <main>
            <section>
                <div>forks: {forks}</div>
                <button onClick={()=> setForks(forks +1)}>Add</button>
                <button onClick={() => setForks(forks -1)}>Subtract</button>
            </section>

            <section>
                <div>spoons: {spoons}</div>
                <button onClick={() => setSpoons(spoons +1)}>Add</button>
                <button onClick={() => setSpoons(spoons -1)}>Subtract</button>
            </section>
        </main>
    )
}

export default Home;
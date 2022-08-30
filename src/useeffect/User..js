import React from "react";
import { useEffect } from 'react';


function User({name}){
    useEffect(() => {
        return () => {
            document.title = name;
        };
    }, [name])

    return <h2>My name is {name}</h2>
}

export default User;
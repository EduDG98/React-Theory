import React, { useEffect, useState } from 'react'

const url = 'http://img.omdbapi.com/?apikey=[yourkey]&';

export const Search = () => {
    const [information, setInformation] = useState();

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
    }, []);

    return (
        <>
            <h2>Here is the definition of:</h2>
        </>
    )
}

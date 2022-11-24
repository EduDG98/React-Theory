import React, { useState, useEffect } from 'react'

export const Main = () => {
    const [resource, setResource] = useState('');
    const [jsonItems, setJsonItems] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
            .then(response => response.json())
            .then(data => setJsonItems(data))
    }, [resource])

    return (
        <>
            <div>
                <button onClick={() => setResource('posts')}>Show Posts</button>
                <button onClick={() => setResource('users')}>Show Users</button>
                <button onClick={() => setResource('comments')}>Show Comments</button>
            </div>
            {`The ${resource} are:`}
            {
                jsonItems.map((item) => {



                    if (resource == 'users') {
                        return <pre>{JSON.stringify(item.name)}</pre>
                    }
                    else if (resource == 'posts') {
                        return <pre>User {(item.userId)}; posted: "{item.title}"</pre>
                    }
                    else {
                        return <pre>User {JSON.stringify(item)}; posted: {JSON.stringify(item.body)} </pre>
                    }

                })
            }
        </>
    )
}

export default Main
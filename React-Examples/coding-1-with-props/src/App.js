import React from "react";
import './styles/index.css'

//Create a second React component:
const Basket = (props) => {
    return (
        <>
            <ul>
                <li>This is my basket of <i>{props.fruit}</i>.</li>
            </ul>
        </>
    )
}

//Create the main React component as an arrow function
const App = () => {
    return (
        <>
            <h2>Look at my differents baskets:</h2>
            <Basket id='orange' fruit='Oranges'></Basket>
            <Basket fruit='Bananas'></Basket>
            <Basket fruit='Cherries'></Basket>

        </>
    )
}

export default App;

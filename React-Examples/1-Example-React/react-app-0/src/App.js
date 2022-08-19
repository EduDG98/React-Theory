import React from "react";
import Box from './components/Box'
import './styles/Box.css'

//Create a second React component:
const Basket = (props) => {
    return (
        <>
            <h3>This is my basket of {props.fruit}</h3>
        </>
    )
}

//Create the main React component as an arrow function
const App = () => {
    return (
        <>
            <h3>Look how many boxes I have:</h3>
            <Basket fruit='Oranges'></Basket>
            <Box></Box>
            <Box></Box>
            <Box></Box>
        </>
    )
}

export default App;

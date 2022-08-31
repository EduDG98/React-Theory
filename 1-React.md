# REACT

## Create a React App:
    npx create-react-app AppName

---
## React Components
- React components can be created as a class or as a function.
- It is a better practice to do it with arrow functions.
- A React component can has an other React component within.
- They always start with the first letter in upper case.

They can be created as function or as a Class:
```javascript
const ComponentName = () => {
    return (
        <>
            ...
        </>
    )
}
```
```javascript
class ComponentName extends React.Component {
  render() {
    return (
        <>
            ...
        </>
    );
  }
}
```
---
## 1. Properties
- To work with ``props`` in a componente we have to pass it as an argument of a functional component.
- The JSX attributes go through the component as an object called ``props``. Where the attribute is *property* of the props object.

    We use {...} to add JS in HTML or JSX elements

We can repeat the component and change the attributte to each one:
**EXAMPLE:**
```javascript
const Salude = (props) => {
    return(
        <>
            <p>Welcome to my {props.myWeb}</p>
        </>
    )
}

const App = () => {
    return(
        <>
            <Salude myWeb='gitHub'></Salude>
            <Salude myWeb='Facebook'></Salude>
            <Salude myWeb='Youtube Channel'></Salude>
        </>
    )
}
```
(see ``coding-1-with-props``)

---
## 2. States and Life Cicle
### A React Hook
- Hooks can only be used within function components.
- To use a Hook first it has to be imported

```javascript
    import { useState } from 'react';
```

### **useState()** 
- The useState() Hook let us add an state to a function component.
- We create an ``state`` variable and a method to update the state and it is called as the variable but with ``set`` at the beginning.
- If we want to add an initial value it will be between brackets (...).

**EXAMPLE:**
```javascript
    const [count, setCount] = useState(0);
```

- The Hook fired with every render of the app
```javascript
const App = () => {

  const [count, setCount] = useState(0);

  const decrementCount = () => setCount(count - 1)
  const increaseCount = () => setCount(count + 1)


  return (
    <>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={increaseCount}>+</button>
    </>
  );
}
```
(see ``coding-2-with-props``)

---

## 3. Handle Events
- With JSX we pass a function as the event handler as we saw in ``2.States and Life Cicle``.
- We create an HTML element and when a event is fired it calls a function which is in JS so it goes between ``{}``
- With React we do not need to cal ``addEventListener``, it is enough to provide a ``listener``. ( *onClick*, *onSubmit*, ... )

(see ``coding-3-with-events``)

---

## 4. External Props
- Normally, in React, we create many components which will be sons and siblings of other components.
- All this ``sons components`` will be called in a main component which form the App.
- To comunicate between them we pass the information through props. Normally, we will have a state in the father to save that information.

**EXAMPLE:**
- We create a father component ``App`` and a son component ``ButtonWrapper``.
- We use useState to save the state of the count
```javascript
    const App = () => {

        const [count, setCount] = props;

        // Create the function to increase the count
        const handleIncreaseCount = () => setCount(count + 1);

        return(
            <>
                <p>{count}</p>
                <ButtonWrapper text='+' onClickProp={handleIncreaseCount}/>
            </>
        )
    }
```

- Create the son component with the ``props`` arguments.
- ``props`` is like an object with contain all the props that we pass from the father to the son element, in this case are ``text`` and ``onClickProp``.
- These ``props`` can have any name, normally is the same but we have change to differenciate with variables.
```javascript
    export const ButtonWrapper = (props) => {

        // DEstructuring the props
        const { text, onClickProp } = props;    

        return(
            <>
                <button onClick={onClickProp}>{text}</button>
            </>
        )
    }
```
- We can also create a function in the son component and add there the ``onClickProp`` in case we want to add more code:
```javascript
export const ButtonWrapper = (props) => {
    
    // DEstructuring the props
        const { text, onClickProp } = props;    

        const handleOnClick = () => onClickProp();
        
        return(
            <>
                <button onClick={handleOnClick}>{text}</button>
            </>
        )
    }
```
- Normally, instead of ``onClickProp`` it is name ``onClick``.

(see **``coding-4-with-external-props``**)

- If we want to alterate a state which is pass as a prop 

- We use ``events`` to move up (to give a parent component) a state.
- We use ``props`` (the object) to move down a state for example (from a parent to a child).

(see **``coding-5-with-events-and-external-props``**)






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
- With React we do not need to cal ``addEventListener``, it enough to provide a ``listener``. ( *onClick*, *onSubmit*, ... )






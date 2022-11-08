# HOOKS

1. ``useState``
2. ``useEffect``
3. ``useContext``
4. ``useRef``
5. ``useCallBack``
6. ``useMemo``
7. ``useReducer``

To import a hook in react:
```js 
import { useHook } form "react";
```

---

## 1. useState
It is use to save an state in a variable and change it state in a fast and easy way.
```js
const [name, setName] = useSate('')
```

---

## 2. useEffect
It carries out an effect every time the component render or if we choose it if a dependency change its state.

    useEffect(function, [dependency])

We can have three behaviour when we use useEffect:

1. ``Not to add the dependecy array:`` it runs with every render.
2. ``Add the dependency array empty:`` it only renders the first time the component is mount.
3. ``Add dependencies in the dependency array:`` it only renders the first time and when the dependencies change.

```javascript
useEffect( () => {

    /*...do something when the component render or the dependency specify in the array changes...*/

    return () => {
        /* ...do something when the component is unmount...*/
    }
}, [/*dependency*/]);
```

---

## 3. useContext
- It is used to aovid ``props drilling``. Passing props to the children component that we want, instead of passing as a props through all components.
- We should use it when we are sharing global data.
- The steps to use are:
1. To creacte a context with **``createContext()``**
2. To use the created context to wrap the around the component tree. We do it with the **``Provider``** property.
3. To use the ``value`` prop in our context to move the props.
4. To read the value in the other component using the the **``Consumer``** property.

- The created ``context`` is an object with two properties **``Provider``** and **``Consumer``**. Which both are **components**.

<ins>**EXAMPLE** </ins> (with the ``.Provider``)
```js
    export const MyContext = createContext();

    const GrandFather = () => {
        return(
            <MyContext.Provider value={name}>
                <p>I'm your grandpa and my name is Juanjo</p>
                <Father />
            </MyContext.Provider>
        )
    }

    const Father = () => {
        return(
            <>
                <p>I'm your father</p>
                <Children />
            </>
        )
    }

    const Children = () => {
        const name = useContext(MyContext);

        return(
            <p>Hello family, my name is {name}</p>
        )
    }
```

<ins>**EXAMPLE** </ins> (with the ``.Provider`` and ``.Consumer``)
- But we do not really use the ``.Consumer`` anymore.

```javascript
const MyContext = useContext();

const GrandFather = () => {
    return(
        <MyContext.Provider value={{name, setName}}>
            <p>My name is {name}</p>
            <Father />
        </MyContext.Provider>
    )
}

const Father = () => {
    retur(
        <>
            <p>I'm your Father and my name is Jerry</p>
            <Child />
        </>
    )
}

const Child = () => {
    return(
        <MyContext.Consumer>
            { 
                ({name, setName}) => {
                    return(
                        <>
                            <p>My name is {name}</p>
                            <button onClick{() => setName('Jerry Jr.')}>Change my name here</button>
                        </>
                    )
                }
            }
        </MyContext.Consumer>
    )
}
```

---

## 4. useRef
- It is used to store a value between renders.
- When we use useState we can store values but with a render it just restart.
- useRef return an object with a property ``.current`` that is the one that persists between renders.

```javascript
    const varName = useRef(/*inititial value*/);
```

---

## 5. useMemo

### <ins>MEMOIZING</ins>: Is as caching (to store in the cache) a value so that it does not need to be recalculated. 

- It is used to recompute a value when the dependencies specified changes.
- So the useMemo Hooks is normally formed by a ``function`` and an ``array`` of ``dependency``. The function execute everytime that the dependency changes.
- But also we can use the Memo Hook in ``objects`` and when a dependency changes the component render the object. In this way, we acelerate every render of the component.

```javascript
    const memoizedValue = useMemo(() => /*function*/, [/*dependencies*/])
```

<ins>**EXAMPLE**</ins> (To use ``useMemo`` in a function)
```javascript
    const slowFunction = (number) => {
        for(let index = 0; index < 1000000; index++) {}
        return number;
    }

    const MyComponent = () => {
        const doubleNumber = useMemo(slowFunction(num), [num]);
        
        return(
            <>
                <input type='number' value={value} onChange={(event) => event.target.value}></input>
                <button>{doubleNumber}</button>
            </>
        )
    }
```
<ins>**EXAMPLE**</ins> (To use ``useMemo`` in an object)
```javascript
    const MyComponent = () => {
        const [life, setLife] = useState(false)
        const plantColor = useMemo({
            return {
                color: life ? green : brown
            }
        }, [life])

        return(
            <>
                <p>Hey there, my plant is {plant}</p>
                <button onClick={() => setPlant(!life)}> plant it </button>
            </>
        )
    }
```

---

## 6. useCallback

- Instead of a memoized value, this Hook return a memoized function or callback.
- The use and syntaxis is the same as the useMemo but useCallback have a nice advantages referenciating values. As this Hook return and callbak not a value, we can add an argument to this callback

```javascript
    const showNextNumbers = ((argument)=> {
        return [number + argument, number + argument + 1, number + argument + 2]
    }, [number])

```

---

## 7. useReducer
- *Components with many state updates spread across many event handlers can get overwhelming. For these cases, you can consolidate all the state update logic outside your component in a single function, called a reducer* - ReactDocs.
- So this hook is used to manage state with a ``reducer``.
- The hook return and array with the current state of the variable (which can have a initial state if it is given) and a dispatch function to change the interaction.
- The Hook it is initialize with the ``reducer`` function and an ``initial value``. This value is usually an object because we workwith more complex states.
- ``dispatch`` is a function that we call it to update the variable ``state``. We do that because when we use dispatch, it is calling the ``reducer`` function.

```js
const [state, dispatch] = useReducer(reducer, {count: 0})
```

- The ``reducer`` function has 2 arguments:
    1. state: it's the current state.
    2. action: it's what we send through the ``dispatch`` function.
- When we are calling ``dispatch`` we are changing the ``action`` argument in the reducer.
- So to conclude, the ``reducer`` return a new state accordint to the ``action`` specify. Each ``action`` it is a different way to update the ``state``, in that case we usually use a ``switch-case``.

```js
const reduer = (state, action) => {
    switch (action.type {
        case: 'increment':
            return {count: state.count + 1}
    })
}
```










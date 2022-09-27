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
2. ``Add the dependency array empty:`` it only renderse the first time thecomponent is mount.
3. ``Add dependencies in the dependency array:`` it only renders the first timen and when the dependencies change.
```js
useEffect( () => {

    /*...do something when the component render or the dependency specify in the array changes...*/

    return () => {
        /* ...do something when the component is unmount...*/
    }
}, [/*dependency*/]);
```
---
## 3. useContext
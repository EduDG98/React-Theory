# HOOKS

1. ``useState``
2. ``useEffect``
3. ``useRef``
4. ``useCallBack``
5. ``useMemo``
6. ``useContext``
7. ``useReducer``
---
To import a hook in react:
```js 
import { useHook } form "react";
```
## 1. useState
It is use to save an state in a variable and change it state in a fast and easy way.
```js
const [name, setName] = useSate('')
```

## 2. useEffect
It carries out an effect every time the component render or if we choose it if a variable change its state.
```js
useEffect( () => {
    /*...do something when the component render or the variable in the array change...*/
}, [/*variables*/]);
```
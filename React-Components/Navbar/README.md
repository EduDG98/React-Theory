# MAKE A BAR:

1. Create a ``unorder list`` with an ``link`` in each item.
```html
     <ul>
        <li>
            <a>Home</a>
        </li>
        <li>
            <a>Profile</a>
        </li>
        <li>
            <a>Settings</a>
        </li>
     </ul>
 ```
 ### In **``CSS``**:
 2.  We use the ``float`` property which places element to a side of its container, so other elments/text can appear/wrap aside.
 ```css
    ul {
        float: left
    }
 ```
 3. We use de ``display`` property for all the list items to put it each one next to them.
 ```css
    li {
        display: inline-block
    }
 ```
 4. Add a margin, a padding and move the list items where we want.
 5. To put the bar on the top of the window we add to the father container:
 ```css
    margin: 0px;
    padding: 0px;
 ```

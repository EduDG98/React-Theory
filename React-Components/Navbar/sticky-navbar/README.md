# Sticky Navbar

- Here we can see a esay way to make a navbar with ``grid`` instead of float.
```css
ul {
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
```

- To make the bar ``sticky`` is as easy as:
```css
    nav {
        position: sticky;
        top: 0;
    }
```
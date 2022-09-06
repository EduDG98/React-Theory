import './../styles/navbar.css'
import { Menu } from './Menu'

import { Searchbar } from "./Searchbar"

export const Navbar = () => {
    return (
        <div className="bar">
            <Menu />
            <Searchbar />
        </div>
    )
}
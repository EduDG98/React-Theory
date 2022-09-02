import '../../styles/navbar/navbar.css'
import { Logo } from './Logo'
import { Searchbar } from './Searchbar'
import { Settings } from './Settings'

export const Navbar = () => {


    return (
        <div className='container'>
            <Logo />
            <Searchbar />
            <Settings />
        </div>
    )
}
import '../../styles/navbar/headerNavbar.css'
import { Logo } from './Logo'
import { Menubar } from './menubar/Menubar'
import { Settings } from './Settings'

export const HeaderNavbar = () => {
    return (
        <div className='header-navbar-container'>
            <Logo />
            <Menubar />
            <Settings />
        </div>
    )
}
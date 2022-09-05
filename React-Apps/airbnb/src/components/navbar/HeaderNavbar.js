import '../../styles/navbar/headerNavbar.css'
import { Logo } from './Logo'
import { Menubar } from './Menubar'
import { Settings } from './Settings'

export const HeaderNavbar = () => {
    return (
        <div className='container'>
            <Logo />
            <Menubar />
            <Settings />
        </div>
    )
}
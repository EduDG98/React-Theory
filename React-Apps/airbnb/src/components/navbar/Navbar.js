import '../../styles/navbar/navbar.css'
import { FooterNavbar } from './FooterNavBar'
import { HeaderNavbar } from './HeaderNavbar'


export const Navbar = () => {
    return (
        <div className='navbar'>
            <HeaderNavbar />
            <FooterNavbar />
        </div>
    )
}
import '../../styles/navbar/navbar.css'
import { FooterNavbar } from './footerNavBar/FooterNavBar'
import { HeaderNavbar } from './headerNavbar/HeaderNavbar'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <HeaderNavbar />
            <FooterNavbar />
        </div>
    )
}
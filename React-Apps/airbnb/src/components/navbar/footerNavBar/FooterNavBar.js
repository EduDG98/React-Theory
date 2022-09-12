import './../../../styles/navbar/footerNavbar.css'
import { CategoryList } from './CategoryList'

export const FooterNavbar = () => {
    return (
        <div className='footer-navbar-container'>
            <CategoryList />
            <button>FILTER</button>
        </div>
    )
}
import './../../../styles/navbar/footerNavbar.css'
import { CategoryList } from './CategoryList'

export const FooterNavbar = () => {
    return (
        <div className='footer-navbar-container'>
            <CategoryList />
            <button id='filter-button'>FILTER</button>
        </div>
    )
}
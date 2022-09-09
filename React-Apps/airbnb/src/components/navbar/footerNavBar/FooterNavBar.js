import './../../../styles/navbar/footerNavbar.css'
import { CategoryList } from './CategoryList'

export const FooterNavbar = () => {
    return (
        <div className='footer-navbar-container'>
            <div className='scroll-container'>
                <CategoryList />
            </div>
            <button>FILTER</button>
        </div>
    )
}
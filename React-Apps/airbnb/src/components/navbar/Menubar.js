import '../../styles/navbar/menubar.css'
import { Searchbar } from './Searchbar'
import { SearchButton } from './SearchButton'

export const Menubar = () => {
    return (
        <>
            <nav >
                <ul>
                    <li>
                        <a>Anywhere</a>
                    </li>
                    <li>
                        <a>Any week</a>
                    </li>
                    <li>
                        <Searchbar />
                        <SearchButton />
                    </li>
                </ul>
            </nav>
        </>
    )
}
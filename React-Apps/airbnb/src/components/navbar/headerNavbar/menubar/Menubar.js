import { Anywhere } from './Anywhere'
import { AnyWeek } from './AnyWeek'
import { AddGuest } from './AddGuest'
import { SearchButton } from './SearchButton'

export const Menubar = () => {
    return (
        <div className='menubar-container'>
            <nav >
                <ul>
                    <li>
                        <Anywhere />
                    </li>
                    <li>
                        <AnyWeek />
                    </li>
                    <li>
                        <AddGuest />
                        <SearchButton />
                    </li>
                </ul>
            </nav>
        </div>
    )
}
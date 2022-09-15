import { Anywhere } from './Anywhere'
import { AnyWeek } from './AnyWeek'
import { AddGuest } from './AddGuest'
import { SearchButton } from './SearchButton'

export const Menubar = () => {
    return (
        <div className='menubar-container'>
            <nav >
                <ul>
                    <li key='anywhere-key'>
                        <Anywhere />
                    </li>
                    <li key='any-week-key'>
                        <AnyWeek />
                    </li>
                    <li key='add-guest-key'>
                        <AddGuest />
                        <SearchButton />
                    </li>
                </ul>
            </nav>
        </div>
    )
}
import { Anywhere } from './Anywhere'
import { AnyWeek } from './AnyWeek'
import { AddGuest } from './AddGuest'
import { SearchButton } from './SearchButton'

export const Menubar = () => {
    return (
        <div className='menubar-container'>
            <nav >
                <ul>
                    <li key='item1'>
                        <Anywhere />
                    </li>
                    <li key='item2'>
                        <AnyWeek />
                    </li>
                    <li key='item3'>
                        <AddGuest />
                        <SearchButton />
                    </li>
                </ul>
            </nav>
        </div>
    )
}
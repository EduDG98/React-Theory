import magnifyingGlass from '../../../images/search.png'

export const SearchButton = () => {
    return (
        <div className='search-button'>
            <button type="submit"><img src={magnifyingGlass} /></button>
        </div>
    )
}
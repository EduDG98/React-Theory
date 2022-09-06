import './../styles/searchbar.css'

export const Searchbar = () => {
    return (
        <div className='searchbar'>
            <input type='text' placeholder='Search...' />
            <button type="submit">🔍</button>
        </div>
    )
}
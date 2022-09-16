import categoryList from '../../../data/categoryList.js'

export const CategoryList = (scrollOffset) => {
    return (
        <div className='category-list'>
            {
                Array.from(categoryList).map(categoryItem => {
                    return (
                        <div key={categoryItem.id} className='category-item'>
                            <img src={categoryItem.icon} />
                            <p>{categoryItem.caption}</p>
                        </div>
                    )
                })
            }
            {/** <button className='scroll-button'>➡</button> */}
        </div>
    )
}
import categoryList from '../../../data/categoryList.js'


export const CategoryList = () => {
    return (
        <div className='category-list'>
            {
                Array.from(categoryList).map(categoryItem => {
                    console.log(categoryItem.name)
                    return (
                        <div className='category-item'>
                            <img src={categoryItem.icon} />
                            <p>{categoryItem.caption}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
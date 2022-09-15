import categoryList from '../../../data/categoryList.js'


export const CategoryList = () => {
    return (
        <div>
            {
                Array.from(categoryList).map(categoryItem => {
                    console.log(categoryItem.name)
                    return (
                        <img src={categoryItem.icon} />
                    )
                })
            }
        </div>
    )
}
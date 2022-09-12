import categoryList from '../../../data/categoryList'


export const CategoryList = () => {
    return (
        <>
            {
                categoryList.map(categoryItem => {
                    return (
                        <img src={categoryItem.icon} />
                    )
                })
            }
        </>
    )
}
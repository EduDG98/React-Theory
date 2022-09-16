import hotel from './../../images/hotel.png'
import housesList from '../../data/housesList'

export const Card = () => {
    return (
        <div className="card">
            {
                housesList.map((houseItem, index) => {
                    return (
                        <div keys={houseItem.id}>
                            <img className='card-photo' src={houseItem.images[0]} />
                            <p> Place </p>
                            <p> Type</p>
                            <p> Date</p>
                            <a> Price ($)</a>
                        </div>
                    )
                })
            }
        </div>
    )
}
import hotel from './../../images/hotel.png'
import housesList from '../../data/housesList'

export const Card = () => {
    return (
        <div className="card-wrapper">
            {
                housesList.map((houseItem) => {
                    return (
                        <div keys={houseItem.id} className='card'>
                            <img className='card-photo' src={houseItem.images[0]} />
                            <button className='card-button left-card-button'>{'<'}</button>
                            <button className='card-button right-card-button'>{'>'}</button>
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
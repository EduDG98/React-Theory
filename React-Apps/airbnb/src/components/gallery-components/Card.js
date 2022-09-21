import hotel from './../../images/hotel.png'
import housesList from '../../data/housesList';
import leftArrow from '../../images/card-buttons/left-arrow.png'
import rightArrow from '../../images/card-buttons/right-arrow.png'

export const Card = () => {
    return (
        <div className="card-wrapper">
            {
                housesList.map((houseItem) => {
                    return (
                        <div keys={houseItem.id} className='card'>
                            <img className='card-photo' src={houseItem.images[0]} />
                            <button className='card-button left-card-button'><img src={leftArrow} /></button>
                            <button className='card-button right-card-button'><img src={rightArrow} /></button>
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
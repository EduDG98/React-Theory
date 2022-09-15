import hotel from './../../images/hotel.png'

export const Card = () => {
    return (
        <div className="card">
            <img className='card-photo' src={hotel} />
            <p> Place </p>
            <p> Type</p>
            <p> Date</p>
            <a> Price ($)</a>
        </div>
    )
}
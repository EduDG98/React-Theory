import earth from './../../../images/earth.png'
import profile from './../../../images/profile.jpg'
import options from './../../../images/options.png'

export const Settings = () => {
    return (
        <div className="setting-container">
            <div className='host-button-container'>
                <button><p>Become a host</p></button>
            </div>
            <button>
                <img src={earth} />
            </button>
            <div className='profile-wrapper'>
                <button>
                    <img src={options} />
                    <img src={profile} />
                </button>
            </div>
        </div>

    )
}
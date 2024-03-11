import {FaLocationDot, FaPhone} from 'react-icons/fa6';
import {motion} from 'framer-motion'
import { Tilt } from '@jdion/tilt-react'

const Profilecard = ({profileImgUrl, profileName , ProfileAddress, ProfileOccupation, ProfileNumber, ProfileEmail}) => {
    return (
        <Tilt className="card">
            <div className="card-top">
                <div className="card-top__profile-img">
                    <img src={profileImgUrl} alt="" />
                </div>
                <div className="card-top__profile-content">
                    <h2 className="profile-name">
                        {profileName}
                    </h2>
                    <h4 className="profile-occupation">
                        {ProfileOccupation}
                    </h4>
                    <div className="profile-info">
                        <div className="profile-address">
                            <FaLocationDot/>
                            <span>
                                {ProfileAddress}
                            </span>
                        </div>
                        <div className="profile-number">
                            <FaPhone/>
                            <span>
                                {ProfileNumber}
                            </span>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="card-bottom">
                <div className="divider"></div>
                <p className="profile-email">{ProfileEmail}</p>
            </div>
        </Tilt>
    )
}

export default Profilecard
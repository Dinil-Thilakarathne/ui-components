import {FaLocationDot, FaPhone} from 'react-icons/fa6';
import {motion} from 'framer-motion'

const Profilecard = ({profileImgUrl, profileName , ProfileAddress, ProfileOccupation, ProfileNumber, ProfileEmail}) => {
    return (
        <motion.div className="card"
            whileHover={{ 
                scale: 1.1, 
                rotateX: 10, 
                rotateY: 15, 
                translateZ: 20,
                boxShadow: '0 0 30px rgba(0, 0, 0, 0.4)' 
            }} 
            transition={{ duration: 0.5 , ease : 'easeIn'}} 
        >
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
        </motion.div>
    )
}

export default Profilecard
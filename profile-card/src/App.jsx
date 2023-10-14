import Profilecard from "../components/Profilecard"
import { logo } from "../public"
import './style.scss'

const App = () => {
    const profileData = {
        imgUrl : logo,
        name : 'Dinil',
        occupation: 'Front-end Developer',
        address: 'Lorem ipsum dolor',
        number: '111-222-3333',
        email: 'example@gmail.com'
    }
    return (
        <>
            <Profilecard
                profileImgUrl={profileData.imgUrl}
                profileName={profileData.name}
                ProfileOccupation={profileData.occupation}
                ProfileAddress={profileData.address}
                ProfileNumber={profileData.number}
                ProfileEmail={profileData.email}
            />
        </>
    )
}

export default App
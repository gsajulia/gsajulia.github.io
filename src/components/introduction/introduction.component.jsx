import React from 'react';

/* Styles */
import {ContainerIntroduction} from './introduction.styles';

/* Images */
import profileImage from "../../assets/profile-image.png";


const Introduction: React.FC = () => {
    return (
        <>
            <ContainerIntroduction>
                <img alt="profile image" src={profileImage}/>
            </ContainerIntroduction>
        </>
    )

}

export default Introduction;
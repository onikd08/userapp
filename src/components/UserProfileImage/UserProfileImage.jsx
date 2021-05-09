import React from 'react';
import './UserProfileImage.style.css';

const UserProfileImage = (props) => {
    return (
        <div className="image-container">
            <div className="profile-image">
                {props.name ? props.name[0] : ''}
            </div>
        </div>
    );
};

export default UserProfileImage;
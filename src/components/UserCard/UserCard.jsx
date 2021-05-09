import React from 'react';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import './UserCard.style.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';



const UserCard = (props) => {
    const { id, name, username, website } = props.user;
    const webAddress = `http://${website}`;
    return (
        <div className="card-container">
            <div>
                <UserProfileImage name={name} />
                <h5 className="card-text">{name}</h5>
                <p className="card-text">@{username}</p>

                <a href={webAddress} target="_blank" rel='noreferrer' className="website">{webAddress}</a> <br />
                <Link to={`/user/${id}`}> <Button text="More Details" /> </Link>



            </div>
        </div>
    );
};

export default UserCard;

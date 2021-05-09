import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './UserDetails.style.css';
import Button from '../Button/Button';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

import { Link } from 'react-router-dom';

const UserDetails = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(userData => setUser(userData))
    }, [url]);
    const { name, username, email, phone, company, website, address } = user;
    const { street, suite, city, zipcode } = address || {};
    const webAddress = `http://${website}`;


    return (
        <div>
            {

                <div className="container d-flex align-items-center justify-content-center">
                    <div > <UserProfileImage name={name} /> </div>
                    <div className="card-container d-flex align-items-center justify-content-center ">

                        <h5 className="card-text"> Name: {name} </h5>
                        <p className="card-text">username:  {username} </p>
                        <p className="card-text">email: {email}</p>
                        <p className="card-text">phone:  {phone} </p>
                        <p className="card-text">company:  {company ? company.name : ''}</p>
                        <a href={webAddress} target="_blank" rel='noreferrer' className="card-text">{webAddress}</a> <br />
                        <p className="card-text"> <u> Address:</u></p>
                        <p className="card-text">{street}, {suite} <br />{city}, zipcode: {zipcode}.</p>
                        <Link to={`/homepage`}><Button text="Back" /></Link>

                    </div>
                </div>

            }
        </div>
    );
};

export default UserDetails;
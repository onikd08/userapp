import React, { useEffect, useState } from 'react';
import UserCard from '../UserCard/UserCard';




const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(usersData => setUsers(usersData))
    }, [])

    return (

        <div className="d-flex justify-content-center align-items-center flex-wrap container">
            {
                users.map(user => <UserCard key={user.id}
                    user={user} />)
            }
        </div>
    );
};

export default Home;
import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
    const userData = useContext(UserContext);

    return (
        <div style={{ border: '1px solid gray', padding: '15px', margin: '15px', borderRadius: '8px', maxWidth: '300px', textAlign: 'center' }}>
            <h2 style={{ color: 'blue', fontSize: '1.5em', marginBottom: '10px' }}>{userData.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{userData.age}</span></p>
            <p>Bio: <span style={{ fontStyle: 'italic', color: 'gray' }}>{userData.bio}</span></p>
        </div>
    );
};

export default UserProfile;

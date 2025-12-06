import React, { useContext } from 'react';
import UserContext from './UserContext';

function MainContent() {
    const userData = useContext(UserContext);

    return (
        <main style={{ backgroundColor: '#f0f8ff', padding: '20px', textAlign: 'center', fontSize: '1.1em', width: '100%' }}>
            <p>{userData.name} loves to visit New York, Paris, and Tokyo.</p>
        </main>
    );
}

export default MainContent;

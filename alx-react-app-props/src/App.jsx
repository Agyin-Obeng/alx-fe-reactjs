import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import UserContext from './components/UserContext';

function App() {
    const userData = {
        name: "Alice Johnson",
        age: 28,
        bio: "A passionate traveler who loves exploring new cities and cultures."
    };

    return (
        <UserContext.Provider value={userData}>
            <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#e6f2ff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                <Header />
                
                <UserProfile /> {/* UserProfile now consumes context */}
                
                <MainContent />
                
                <Counter />
                
                <Footer />
            </div>
        </UserContext.Provider>
    );
}

export default App;

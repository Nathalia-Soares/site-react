import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="main-container">
                <Nav />
                <Main />
                <Aside />
            </div>
            <Footer />
        </div>
    );
}

export default App;

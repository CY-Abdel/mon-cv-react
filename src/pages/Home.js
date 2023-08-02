import React from 'react';

import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Chougar Abdel</h1>
                    <div className="container">
                        <h2>Développeur web</h2>
                        <div className='gradient'></div>
                    </div>
                    <div className="pdf">
                        <a href="./media/cv.pdf"
                            target="_blank">Télécharger CV</a>
                    </div>
                    <div className='qr'>
                        <img
                            src={require('../../../../React/mon-cv-react/src/media/QR.jpg')} alt="QR_code"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
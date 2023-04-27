import React from 'react';
import Navigation from '../components/Navigation';

// cette bibliotheque permet de copier sur un truc quand on clique dessus
// pour installer on lance la commande suivante
// npm i react-copy-to-clipboard
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
  return (
    <div className='contact'>
      <Navigation />
      <div className="contactContent">
        <div className="header">
          <div className="contactBox">
            <h1>Contactez-moi</h1>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>France</span>
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i>
                <CopyToClipboard text="0763730879">
                  <span className='clickInput'
                    onClick={() => { alert('Numéro de téléphone copié !'); }}>07 63 73 08 79
                    <i className="far fa-copy"></i>
                  </span>
                </CopyToClipboard>
              </li>
              <li>
                <i className="far fa-envelope"></i>
                <CopyToClipboard text="chougar.abdelhadi@gmail.com">
                  <span className='clickInput'
                    onClick={() => { alert('E-mail copié !'); }}>chougar.abdelhadi@gmail.com
                    <i className="far fa-copy"></i>
                  </span>
                </CopyToClipboard>
              </li>
            </ul>
          </div>
          <div className="socialNetwork">
            <ul>
              <a href="http://www.google.com" target="_blank"
              rel="noopener noreferrer">
                <h4>LinkedIn</h4>
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="http://www.google.com" target="_blank"
              rel="noopener noreferrer">
                <h4>Github</h4>
                <i className="fab fa-github"></i>
              </a>
              <a href="http://www.google.com" target="_blank"
              rel="noopener noreferrer">
                <h4>Whatsapp</h4>
                <i className="fab fa-whatsapp"></i>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/ChougarCV.jpg" alt="photp-profil" style={{ width: "12%" }} />
                    <h3>CHOUGAR Abdelhadi</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/chougar-abdelhadi/" target="_blank" rel="noopener noreferrer"><i className='fab fa-linkedin'></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/ChougarAbdelhadi/cv-react" target="_blank" rel="noopener noreferrer"><i className='fab fa-github'></i></a>
                    </li>
                    <li>
                        <a href="https://news-crud-react.netlify.app/" target="_blank" rel="noopener noreferrer"><i className='fab fa-react'></i></a>
                    </li>
                    <li>
                        <a href="https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/master-XB/master-mathematiques-et-informatique-appliquees-aux-sciences-humaines-et-sociales-miashs-IDIVLQ8C/parcours-double-competence-informatique-et-sciences-sociales-IJLAENY0.html" target="_blank" rel="noopener noreferrer"><i><img src="./media/MIASHS.jpg" alt="UGA-LOGO" style={{ width: "3%" }} /></i></a>
                    </li>
                </ul>

                <div className="signature">
                    <p>Chougar Abdel - 2021</p>
                </div>
            </div>
        </div>

    );
};

export default Navigation;
import React from 'react';
// importer la librairie pour faire le routage
import { NavLink } from 'react-router-dom';


const Notfound = () => {
    return (
        <div>
            <div className="notFound">
                <div className="notFoundContent">
                    <h3>Désonlé cette page n'existe pas!</h3>
                    <h3>sorry this page does not exist!</h3>

                    <NavLink exact to="/">
                        <i className="fas fa-home"></i>
                        <span> Acceuil</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Notfound;
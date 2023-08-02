import React from 'react';

const Experiences = () => {
    return (
        <div className="experience">
            <h3>Exprérience</h3>
            <div className="exp1">
                <h4>STAGE DE FIN D'ÉTUDES - SERAMM</h4>
                <h4>2019 - 2020</h4>
                <p>Evolution et mise à jour d’une Application web, testing et correction des bugs et étude du cahier des charges.
                    <br />Front-end : HTML5, CSS3, JavaScript. <br />Back-End : Conception MVC avec le Framework Symfony, update de Sf2.4 vers Sf4.3 / migration de PHP5 à php7.3.
                </p>
            </div>

            <div className="exp2">
                <h4>projets backend</h4>
                <h4>2020 - 2021</h4>
                <p>Développement d’un Blog sous Laravel et d'une agence immobilière sous symfony (architecture MVC)<br /> Back-End : routing, Authentifaction, implémenter un CRUD, mapping Base de données et templates, validations de formulaire ... Base de données / Outil : MySQL et Git.</p>
            </div>

            <div className="exp3">
                <h4>Portfolio & projets JS</h4>
                <h4>2021-2023</h4>
                <p>portfolio conçu avec React, met en lumière une sélection de mes projets dans le domaine du développement front et back.<br />Développement de plusieurs mini Projets JS : Manipulation du DOM, les Events et Callback, Les animations et transitions, manipuler des dates.</p>
            </div>
        </div>
    );
};

export default Experiences;
// rcc pour une classe component
import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    // on peut ajouter des states qui sont des endroit ou on peut stocker
    //on peut egalement ajouter d'autre fonctions
    state = {
        languages: [
            {id: 1, value: "Javascript", xp: 0.75},
            {id: 2, value: "Html", xp: 0.82},
            {id: 3, value: "Css", xp: 0.80},
            {id: 4, value: "Php", xp: 0.59}
        ],
        frameworks: [
            {id: 1, value: "React", xp: 0.7},
            {id: 2, value: "Bootstrap", xp: 0.8},
            {id: 3, value: "Sass", xp: 0.7},
            {id: 4, value: "Laravel/Symfony", xp: 0.6}
        ]
    }
    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    // {languages} = this.state.languages 
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    languages={frameworks}
                    className="frameworkDisplay"
                    title="frameworks & bibliothèques"
                />
            </div>
        );
    }
}

export default Languages;

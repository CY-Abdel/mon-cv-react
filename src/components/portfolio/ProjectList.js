import React, { Component } from 'react';
// on appel la const portfolio!oData
import {portfolioData} from "../../data/portfolioData";
import Project from './Project';

class ProjectList extends Component {
    state = {
        // this.state.projects = portfolioData (toute l'array == notre base de données)
        projects:portfolioData
    };


    render() {
        //on fait le destructring des familles
        // donc quand on faot this.state.projects == projects
        // c-a-s this.state.projects.id = projects.id ....
        let {projects} = this.state;

        return (
           <div className="portfolioContent">
               <ul className="radioDisplay">

               </ul>

               <div className="projects">
                   {/* on met tout entre 2 crochets {} pour ecrire du js dasn jsx  */}
                   {
                        //  item peut etre remplacer par nimporte quel mot coucou bonjour pas importatn
                       projects.map(item => {
                        return (
                            <Project 
                                // si on defenie oas la cle key={} il va retourner une erreur
                                key= {item.id}
                                item = {item}
                                // on envoi on props item

                            />
                        )
                       })
                   }
               </div>
           </div>
        );
    }
}

export default ProjectList;
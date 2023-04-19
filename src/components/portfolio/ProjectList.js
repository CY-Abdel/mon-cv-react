import React, { Component } from 'react';
// on appel la const portfolio!oData
import { portfolioData } from "../../data/portfolioData";
import Project from './Project';

class ProjectList extends Component {
   state = {
      // this.state.projects = portfolioData (toute l'array == notre base de données)
      projects: portfolioData,
      radios: [
         { id: 1, value: "javascript" },
         { id: 2, value: "css" },
         { id: 3, value: "react" },
         { id: 4, value: "php" }
      ],
      // de bas il faut un radio selectioné on met js en defaut
      selectedRadio: 'javascript'
   };

   // on cree la fonction qui va prendre en charge l'evolution de la radio
   // quand on clique sur un autre radio la valeur de selectRadio va donc evoluer et changer
   handleRadio = (event) => {
      console.log(event.target.value); // == css si on clique sur css par exemple idem pour les autres

      let radio = event.target.value;
      this.setState({ selectedRadio: radio })
   }

   render() {
      //on fait le destructring des familles
      // donc quand on faot this.state.projects == projects
      // c-a-s this.state.projects.id = projects.id ....
      let { projects, radios, selectedRadio } = this.state;

      return (
         <div className="portfolioContent">
            <ul className="radioDisplay">
               {
                  radios.map((radio) => {
                     return (
                        <li key={radio.id}>
                           <input
                              type="radio"
                              name="radio"
                              checked={radio.value === selectedRadio}
                              value={radio.value}
                              id={radio.value}
                              onChange={this.handleRadio}
                           />
                           <label htmlFor={radio.value}>{radio.value}</label>
                        </li>
                     )
                  })
               }
            </ul>

            <div className="projects">
               {/* on met tout entre 2 crochets {} pour ecrire du js dasn jsx  */}
               {
                  //  item peut etre remplacer par nimporte quel mot coucou bonjour pas importatn
                  projects
                  
                     .filter(item => item.languages.includes(selectedRadio))

                     .map(item => {
                        return (
                           <Project
                              // si on defenie oas la cle key={} il va retourner une erreur
                              key={item.id}
                              item={item}
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
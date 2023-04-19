import React, { Component } from 'react';

class Project extends Component {

   state = {
      showInfo: false
   }

   handleInfo = () => {
      // setState interagir de facon dynamique avec les state sur react
      this.setState({
         // cette ligne de code nous donne l'inverse de la valeur de swhoInfo
         // dans ce cas elle renvoi true car shwoInfo est a false au depart
         // c'est la logique utiliser pour faire notre toogle su les button radio
         showInfo: !this.state.showInfo
      })
   }

   render() {
      console.log(this.props);
      // on fera on sorte que name=this.props.item.name
      let { name, languagesIcons, source, info, picture } = this.props.item;


      return (
         <div className="project">
            <div className="icons">
               {languagesIcons.map(icon =>
                  // de façon dynamique le <i> prend le nom de icon qu'on a mapper a chaque fois et idem pour la cle key
                  <i className={icon} key={icon}></i>
               )}
            </div>
            <h3>{name}</h3>
            <img src={picture} alt="" onClick={this.handleInfo} />
            <span className="infos" onClick={this.handleInfo}>
               <i className="fas fa-plus-circle"></i>
            </span>

            {
               // si this.state.showInfo == true && 2eme condition
               this.state.showInfo && (
                  <div className="showInfos">
                     <div className="infosContent">
                        <div className="head">
                           <h2>{name}</h2>
                           <div className="sourceCode">
                              <a href={source} rel='noopener noreferrer' className='button' target="_blank">Code source</a>
                           </div>
                        </div>

                        <p className="text">{info}</p>

                        <div className="button return" onClick={this.handleInfo}>Retourner sur la page</div>
                     </div>
                  </div>
               )
            }

         </div>
      );
   }
}

export default Project;
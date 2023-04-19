import React, { Component } from 'react';

class Project extends Component {


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
                <img src={picture} alt="" />
                <span className="infos">
                    <i className="fas fa-plus-circle"></i>
                </span>

            </div>
        );
    }
}

export default Project;
import React from 'react';

const OtherSkills = () => {
   return (
      <div className="otherSkills">
         <h3>Autres compétences</h3>
         <div className="list">
            <ul>
               <li>
                  <i className="fas fa-check-square"></i>
                  Français courant
               </li>
               <li>
                  <i className="fas fa-check-square"></i>
                  Anglais bon niveau
               </li>

               <li>
                  <i className="fas fa-check-square"></i>
                  Git
               </li>
               <li>
                  <i className="fas fa-check-square"></i>
                  MySql, PostgreSql, SQLite
               </li>
            </ul>
            <ul>
               <li>
                  <i className="fas fa-check-square"></i>
                  Github
               </li>
               <li>
                  <i className="fas fa-check-square"></i>
                  Architecture MVC
               </li>
               <li>
                  <i className="fas fa-check-square"></i>
                  JAVA
               </li>
            </ul>
         </div>
      </div>
   );
};

export default OtherSkills;
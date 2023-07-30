import React from 'react';

const OtherSkills = () => {
   return (
      <div className="otherSkills">
         <h3>Autres compétences</h3>
         <div className="list">
            <ul>
               <li>
                  <i className="fas fa-check-square"></i>
                  <span>Français courant</span>
               </li>
               <li>
                  <i className="fas fa-check-square"></i>
                  <span>Anglais bon niveau</span>
               </li>

               <li>
                  <i className="fas fa-check-square"></i>
                   <span>Git</span>
               </li>
               <li>
                  <i className="fas fa-check-square"></i>
                  <span>MySql, PostgreSql</span> 
               </li>
            </ul>
            <ul>
               <li>
                  <i className="fas fa-check-square"></i>
                  <span>Github</span> 
               </li>
               <li>
                  <i className="fas fa-check-square"></i>
                  <span> Architecture MVC</span>
               </li>
               <li>
                  <i className="fas fa-check-square"></i>
                   <span>JAVA</span>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default OtherSkills;
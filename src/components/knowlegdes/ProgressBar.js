import React from 'react';

const ProgressBar = (props) => {
   console.log(props);

   return (
      <div className={props.className}>
         <h3>{props.title}</h3>
         <div className="years">
            <span>Expérience</span>
            <span></span>
            <span>level</span> 
         </div>

         {/* cette syntaxe 
                <div> 
                    {

                    }      
                </div>
                c'est pour ecrire du javascript dans le jsx 
            */}
         <div>
            {
               // chaque elem du tableau dev1 un item individuel 
               // qu'on pourra afficher
               props.languages.map((item) => {
                  let xpYears = 1;
                  let progressBar = item.xp / xpYears * 100 + '%';

                  return (
                     <div key={item.id} className="languagesList">
                        <li>{item.value}</li>
                        <div className="progressBar" style={
                           {width:progressBar}}></div>
                     </div>
                  )
               })
            }
         </div>
      </div>
   );
};

export default ProgressBar;
import React from 'react';
import Experiences from '../components/knowlegdes/Experiences';
import Hobbies from '../components/knowlegdes/Hobbies';
import Languages from '../components/knowlegdes/Languages';
import OtherSkills from '../components/knowlegdes/OtherSkills';
import Navigation from '../components/Navigation';

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation />
            <div className="knowledgesContent">
                <Languages/>
                <Experiences/>
                <OtherSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledges;
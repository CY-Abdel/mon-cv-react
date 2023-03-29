import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Gym</span>
                </li>
                <li className="hobby">
                    <i class="fas fa-book-reader"></i>
                    <span>Mangas</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-laptop-code"></i>
                    <span>Coding</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-plane"></i>
                    <span>Voyage</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;
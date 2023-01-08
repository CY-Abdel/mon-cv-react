import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import Notfound from './pages/Notfound';

const App = () => {
  return (
    // LES BALISES C'EST DU HTML DANS REACT === JSX.
    // c'est IMPOSSIBLE D'AVOIR DEUX ELEMENTS FRERES IL FAUT TOUJOURS UN PARENT
    <>
      <Router>
        {/* Routes avant Switch: le principe et des qu'une route est valide tu t'arretes sinon on dernier lieu tu fais not found */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/competences" element={<Knowledges />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
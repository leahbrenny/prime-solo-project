import React from 'react';
import './AboutPage.css'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div className="container">
    <div>
      <h1>About Planter</h1>
      <h4>A House Plant Planner</h4>
      <p>
        Planter is an application to help house plant owners keep track
        of their various plants. Favorite plants to save for later or find
        new plants to get on the search page.
      </p>
      <h3>Enjoy!</h3>
    </div>
  </div>
);

export default AboutPage;

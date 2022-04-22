import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from './constants/routes';

import { Home } from './components/Home/Home';

export const App = () => {
    return (

      <Router>
          <Routes>
              {ROUTES.map((route) => (
                <Route key={route.path} {...route} />
              ))}
          </Routes>
      </Router>

    );
}

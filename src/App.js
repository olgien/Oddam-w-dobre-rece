import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from './components/Home/Home';

export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/contact' element={<Home/>} />
            <Route path='/login' element={<div>LOGIN</div>} />
        </Routes>
    </BrowserRouter>;
};

export default App;
import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Link HashRouter, Switch, NavLink,} from "react-router-dom";
import Home from './components/Home/Home';
import {BrowserRouter} from "react-router-dom";

class Main extends Component {
    render() {
        return <BrowserRouter>
            <>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
            </>
        </BrowserRouter>;
    }
}
class Contact extends Component {
    render() {
        return <h1>Contact us at contact@example.com</h1>;
    }
}
class App extends Component {
    render() {
        return <Main />;
    }
}



export default App;
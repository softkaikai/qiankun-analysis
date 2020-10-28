import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import English from './pages/English'
import History from './pages/History'
import Chemistry from "./pages/Chemistry"

function App() {
    return (
        <Router>
            <div>
                <p>this is react-app</p>
                <ul>
                    <li>
                        <Link to="/history">history</Link>
                    </li>
                    <li>
                        <Link to="/chemistry">chemistry</Link>
                    </li>
                    <li>
                        <Link to="/english">english</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/history">
                        <History />
                    </Route>
                    <Route path="/chemistry">
                        <Chemistry />
                    </Route>
                    <Route path="/english">
                        <English />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

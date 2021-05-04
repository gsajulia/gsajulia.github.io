import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Component */
import MainPage from "./pages/main-page/main-page.component";

/* Styles */
import './App.css';

import './i18n/config';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={MainPage}/>
            </Switch>
        </Router>
    )
}

export default App;

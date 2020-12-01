import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UserContext from '../contexts/userContext';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import MainPage from '../pages/MainPage';
import EntryPage from '../pages/EntryPage';
import OutflowPage from '../pages/OutflowPage';

export default function App() {

    const localData = localStorage.data !== undefined ? JSON.parse(localStorage.data) : {};
    const [userInfo, setUserInfo] = useState(localData);

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            <Router>
                <Switch>
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/main-page" component={MainPage} />
                    <Route path="/entry-page" component={EntryPage} />
                    <Route path="/outflow-page" component={OutflowPage} />
                    <Route path="/" component={SignIn} />
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}
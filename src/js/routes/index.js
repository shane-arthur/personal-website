import React from 'react';
import { Router, Route } from 'react-router';
import MainpageContainer from '../containers/MainpageContainer';
import Resume from '../containers/resume';

export default function (history) {
    return (
        <Router history={history}>
        <Route path="resume" component={Resume}/>
        <Route path="/" component={MainpageContainer}>
            </Route>
        </Router>
    );
}
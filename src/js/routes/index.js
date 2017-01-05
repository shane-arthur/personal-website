import React from 'react';
import { Router, Route } from 'react-router';
import MainpageContainer from '../containers/MainpageContainer';
import ResumeContainer from '../containers/ResumeContainer';

export default function (history) {
    return (
        <Router history={history}>
        <Route path="resume" component={ResumeContainer}/>
        <Route path="/" component={MainpageContainer}>
            </Route>
        </Router>
    );
}
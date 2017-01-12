import React, { Component } from 'react';
import EmailGrid from '../components/EmailGrid';

export default class EmailPageContainer extends Component {

    render() {
        return (
            <EmailGrid
            errorMessage={"Error Man!"}/>
        );
    }
}
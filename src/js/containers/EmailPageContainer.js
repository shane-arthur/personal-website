import React, { Component } from 'react';
import EmailGrid from '../components/EmailGrid';
import { sendData }  from '../data/dataFetcher';

export default class EmailPageContainer extends Component {


    _handleSubmit(actions, email, name, message) {
        let errors = [];
        (function validate(validations){
            (() => {
                Object.keys(validations).forEach(value => {
                    if (!validations[value]) {
                        errors.push(`${value} cannot be empty`);
                    }
                    else if (validations[value].length < 5) {
                        errors.push(`${value} must be at least 5 characters long`);
                    }
                });
            })();

            (() => {
                const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                const reName = /^[a-z ,.'-]+$/i;

                if (validations.Email && validations.Email.length >= 5 && !(reEmail.test(validations.Email))) {
                    errors.push(`A valid email address must be entered`);
                }
                if (validations.Name && validations.Name.length >= 5 && !(reName.test(validations.Name))) {
                    errors.push(`Name must consist of only characters`);;
                }
            })();

            if (errors.length > 0) {
              actions.setEmailErrorMessage(errors.join(', '));
            }
            else {
                sendData('sendMail', validations).then(result => {
                    actions.toggleSuccessMessagePopup();
                }).catch(error => {
                     actions.setEmailErrorMessage(error);
                })
            }
        })({ Name: name, Email: email, Message: message });
    }


    render() {
        return (
            <EmailGrid
                actions= {this.props.actions}
                errorMessage= {this.props.markerProps.errorMessage}
                handleSubmit = {this._handleSubmit}
                popup = {this.props.markerProps.showSuccessPopup}/>
        );
    }
}
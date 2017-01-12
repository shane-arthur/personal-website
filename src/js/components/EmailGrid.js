import React, {Component, PropTypes} from 'react';
import {CARD_STYLE} from '../constants/styles/Card-Styles';
import  { sendData }  from '../data/dataFetcher';

export default class EmailGrid extends Component {

    componentWillMount() {
        this.setState({ errorMessage: null });
    }

    _handleSubmit() {
        let errors = [];
        const validateInput = (validations) => {
            const checkForNulls = () => {
                Object.keys(validations).forEach(value => {
                    if (!validations[value]) {
                        errors.push(`${value} cannot be empty`);
                    }
                    else if (validations[value].length < 5) {
                        errors.push(`${value} must be at least 5 characters long`);
                    }
                });
            }
            const validateFields = () => {
                const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                const reText = /^[a-zA-Z]*$/

                if (validations.Email && validations.Email.length >= 5 && !(reEmail.test(validations.Email))) {
                    errors.push(`A valid email address must be entered`);
                }
                if (validations.Name && validations.Name.length >= 5 && !(reText.test(validations.Name))) {
                    errors.push(`Name must consist of only characters`);;
                }
            };
            checkForNulls();
            validateFields();
            if (errors.length > 0) {
                this.setState({ errorMessage: errors.join(', ') });
            }
            else {
                sendData('sendMail', validations);
            }
        };

        const nameInput = this.refs.nameInput.value;
        const emailInput = this.refs.emailInput.value;
        const textInput = this.refs.textAreaInput.value;

        validateInput({ Name: nameInput, Email: emailInput, Message: textInput });


    }


    render() {
        const newStyle = Object.assign({}, CARD_STYLE);
        newStyle.background = 'white';
        newStyle.display = 'flex',
            newStyle.flexWrap = 'wrap',
            newStyle.justifyContent = 'space-around'


        const childItems = {
            marginTop: '25px'
        };


        return (
            <div style={newStyle}>

                <label style={childItems}>
                    Name:
                    <input ref="nameInput" type="text" name="name"/>
                </label>
                <label style={childItems}>
                    Email:
                    <input ref="emailInput" type="text" name="name" />
                </label>
                <textarea ref="textAreaInput" id="noter-text-area" name="textarea" style= {{ marginTop: '10px', height: '300px', resize: "none", width: '800px' }}></textarea>
                <div style={{ width: '50%', marginLeft: '45px' }} ref="errorPanel"> {this.state.errorMessage} </div>
                <input type="submit" onClick={this._handleSubmit.bind(this) } value="Submit" style={{ marginTop: '10px', marginRight: '45px', height: '50px', width: '150px', marginLeft: 'auto' }} />

            </div>
        );
    }
}
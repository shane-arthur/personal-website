import React, {Component, PropTypes} from 'react';
import {CARD_STYLE} from '../constants/styles/Card-Styles';
import MessagePopup from './MessagePopup';
import Formatter from '../utils/Formatter';
import BackButton from './BackButton';
const ValueFormatter = new Formatter();

export default class EmailGrid extends Component {

    _formSuccessPopup() {
        const email = this.refs.emailInput ? this.refs.emailInput.value : null;
        const newInnerStyle = Object.assign({}, CARD_STYLE);
        newInnerStyle.background = 'white';
        delete newInnerStyle.top;
        delete newInnerStyle.left;
        return this.props.popup ? <div style={ newInnerStyle }><MessagePopup
            style={{ 'opacity': 1, textAlign: 'center', 'height': ValueFormatter.shrinkPixelsByFactor(CARD_STYLE.height, 2), 'width': ValueFormatter.shrinkPixelsByFactor(CARD_STYLE.width, 2), borderRadius: '75px', border: '0.5px solid black', 'background': 'white', 'position': 'absolute', left: ValueFormatter.shrinkPixelsByFactor(CARD_STYLE.left, 2), top: ValueFormatter.shrinkPixelsByFactor(CARD_STYLE.top, 2) }}
            email={email}/></div> : null
    }

    _formBackArrow() {
        return this.props.popup ? <div style={{ margin: '0 0 50px 50px', left: 0, bottom: 0, position: 'absolute' }}><BackButton
            backAction={() => this.props.actions.selectedCard(0) } /></div> : null;
    }

    _submitEmailForValidation() {
        let email = this.refs.emailInput.value;
        let name = this.refs.nameInput.value;
        let text = this.refs.textAreaInput.value;
        let actions = this.props.actions;
        this.props.handleSubmit(actions, email, name, text);
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

        const successPopup = this._formSuccessPopup();
        const backArrow = this._formBackArrow();

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
                <div style={{ width: '50%', marginLeft: '45px' }} ref="errorPanel"> {this.props.errorMessage} </div>
                <input type="submit" onClick={this._submitEmailForValidation.bind(this)} value="Submit" style={{ marginTop: '10px', marginRight: '45px', height: '50px', width: '150px', marginLeft: 'auto' }} />
                {successPopup}
                {backArrow}
            </div>
        );
    }
}
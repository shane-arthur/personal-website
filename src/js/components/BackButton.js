import React, { PropTypes, Component } from 'react';

export default class BackButton extends Component {

 _formBackButton() {
        const image = require('../../../assets/images/BackArrow.png');
        return (
            <img src={image}/>
        );
    }

    render() {
        const backAction = this.props.backAction ? this.props.backAction : null;

        return(
            <div onClick={backAction}>{this._formBackButton()}</div>
        )
    }
}
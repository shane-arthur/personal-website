import React, { PropTypes, Component } from 'react';

export default class MessagePopup extends Component {


    render() {
        return (
            <div style = {this.props.style}>
                <p style={{ fontSize: '18px' }}>Email Sucessfully Sent</p>
                <p style={{ fontSize: '28px' }}>From</p>
                <p style={{ fontSize: '40px',  wordWrap : 'break-word', margin:'0 25px 0 25px' }}>{this.props.email}</p>
                <div style={{position: 'relative', top: 0, left: 0}}>
                </div>
            </div>
        );
    }
}  
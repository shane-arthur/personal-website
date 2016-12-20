import React, {PropTypes, Component} from 'react';
import {SELFIE_STYLE, PICTURE_FRAME_STYLE, PICTURE_FRAME_HEADER_STYLE} from '../constants/styles/Card-Styles';

export default class PictureWithFrame extends Component {

    _getFrame() {
        var image = require('../../../assets/images/shane.jpg');
        return (
            <img style={SELFIE_STYLE} src={image}/>
        );
    }

    render() {
        const pictureWithFrame = this._getFrame();

        return (<div style={PICTURE_FRAME_STYLE("460px", "700px", "815px", "185px")}>
            <h1 style={PICTURE_FRAME_HEADER_STYLE}> Shane Arthur </h1>
            {pictureWithFrame}
        </div>);
    }
}
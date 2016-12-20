import React, {PropTypes, Component} from 'react';


export default class ContentPreview extends React.Component {

    _formToolTipStyle() {
        return {...this.props.style, height: "100px", width: "100px", backgroundColor: "black", zIndex: 10, backgroundImage: this._formInnerPictureStyle(), borderRadius: "25px", opacity: 0.5 };
    }

    _formInnerPictureStyle() {
        function image(url) {
            return 'url(' + url + ')'
        }
        return image(this.props.icon);
    }

    render() {
        return (
            <div>
                <div style={this._formToolTipStyle() } onClick = {this.props.onMarkerClick.bind(this) }>
                </div>
            </div>)
    }
}
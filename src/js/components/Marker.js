import React, {PropTypes, Component} from 'react';
import Radium from 'radium';
import ContentPreview from './ContentPreview';
import Formatter from '../utils/Formatter';
const ValueFormatter = new Formatter();


@Radium
export default class Marker extends Component {

    componentDidMount() {
        this.setState({
            hovered: false
        });
    }

    _onMarkerClick() {
        this.props.actions.selectedCard(this.props.markerId);
    }

    _chooseMarkerType() {
        return this.props.selected ? require('../../../assets/images/marker-selected.png') : require('../../../assets/images/marker.png');
    }

    _toggleHover(value) {
        this.setState({ hovered: value });
        let newStyle = value ? this._mutateMarkerStyle({ transform: "scale(1.2)" }) : delete this.props.style.transform;
    }

    _mutateMarkerStyle(mutatedStylesObject) {
        let newStyles = this.props.style;
        Object.keys(mutatedStylesObject).forEach(key => {
            newStyles[key] = mutatedStylesObject[key];
        });
    }

    _formTooltipStyle(parentStyle) {
        let style = {};
        style.position = "absolute";

        function extractProperties(propertyOne, propertyTwo) {
            parentStyle[propertyOne] ? style[propertyOne] = parentStyle[propertyOne] : style[propertyTwo] = parentStyle[propertyTwo];
        }

        function furtherAdjustStyles(params) {
            Object.keys(params).forEach(key => {
                if (key in style) {
                    style[key] = ValueFormatter.addTwoPixelValues(style[key], params[key]);
                }
            });
        }

        extractProperties('left', 'right');
        extractProperties('top', 'bottom');
        furtherAdjustStyles({ left: "80px", right: "75px" });
        furtherAdjustStyles({ top: "15px" });

        return style;
    }

    _renderToolTip(hoveredState) {
        return hoveredState ? <ContentPreview style={this._formTooltipStyle(this.props.style) } onMarkerClick = {this._onMarkerClick} actions={this.props.actions} markerId={this.props.markerId} selectedMarkerId = {this.props.selectedMarkerId} icon = {this.props.hoverIcon}/> : null;
    }

    render() {
        const marker = this._chooseMarkerType();
        const toolTip = this._renderToolTip(this.state.hovered)
        return (
            <div onMouseEnter={this._toggleHover.bind(this, true) } onMouseLeave={this._toggleHover.bind(this, false) }>{toolTip}<img src={marker} style={this.props.style} onClick={this._onMarkerClick.bind(this) }/>
            </div>);
    }
}

Marker.propTypes = {
    style: PropTypes.object.isRequired,
    markerId: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired,
    selected: PropTypes.bool.isRequired
};
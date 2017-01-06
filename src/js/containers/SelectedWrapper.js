import React, { Component, PropTypes } from 'react';
import Card from '../components/Card';
import ResumeContainer from '../containers/ResumeContainer';
import EmailPageContainer from '../containers/EmailPageContainer';

export default class SelectedWrapper extends Component {
    constructor(props, context) {
        super(props);
        this.componentMappings = {
            "card": { "component": Card },
            "resume": { "action": this.performActionAsNeeded },
            "mail": { "component": EmailPageContainer }
        };
    }

    performActionAsNeeded() {
        window.location.href = '/resume';
    }

    _resetSelectedMarker() {
        this.props.actions.selectedCard(0);
    }


    render() {
        if (this.componentMappings[this.props.component].component) {
            let ComponentToRender = this.componentMappings[this.props.component].component;
            return (
                <ComponentToRender/>
            );
        }
        else {
            this.componentMappings[this.props.component].action();
            return (
                null
            );
        }
    }
}

SelectedWrapper.PropTypes = {
    actions: React.PropTypes.object.isRequired
}
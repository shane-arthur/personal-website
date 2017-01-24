import React, { Component, PropTypes } from 'react';
import Card from '../components/Card';
import EmailPageContainer from '../containers/EmailPageContainer';
import ProfileCard from '../components/ProfileCard';

export default class SelectedWrapper extends Component {
    constructor(props, context) {
        super(props);
        this.componentMappings = {
            "card": { "component": <Card/> },
            "resume": { "action": this.performActionAsNeeded},
            "mail": { "component": <EmailPageContainer actions={this.props.actions} markerProps={this.props.component}/> },
            "profile": { component: <ProfileCard /> }
        };
    }

    performActionAsNeeded() {
        window.location.href = '/resume';
    }

    _resetSelectedMarker() {
        this.props.actions.selectedCard(0);
    }


    render() {
        if (this.componentMappings[this.props.component.component].component) {
            let ComponentToRender = this.componentMappings[this.props.component.component].component;
            return (
                ComponentToRender
            );
        }
        else {
            this.componentMappings[this.props.component.component].action();
            return (
                null
            );
        }
    }
}

SelectedWrapper.PropTypes = {
    actions: React.PropTypes.object.isRequired
}
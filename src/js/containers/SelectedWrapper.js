import React, { Component, PropTypes } from 'react';
import Card from '../components/Card';
import EmailPageContainer from '../containers/EmailPageContainer';
import ProfileCard from '../components/ProfileCard/ProfileCard';

export default class SelectedWrapper extends Component {
    _initializeComponentMappings() {
        this.componentMappings = {
            "card": { "component": <Card/> },
            "resume": { "action": this.performActionAsNeeded },
            "mail": { "component": <EmailPageContainer actions={this.props.actions} markerProps={this.props.component}/> },
            "profile": { reload: true, component: <ProfileCard actions={this.props.actions} selectedTab={this.props.selectedTab}/> }
        };
    }

    performActionAsNeeded() {
        window.location.href = '/resume';
    }

    _resetSelectedMarker() {
        this.props.actions.selectedCard(0);
    }


    render() {
        this._initializeComponentMappings();
        const componentMapping = this.componentMappings[this.props.component.component];
        if (componentMapping.component) {
            let ComponentToRender = componentMapping.component;
            return (
                ComponentToRender
            );
        }
        else if (componentMapping.action) {
            componentMapping.action();
            return (
                null
            );
        }
    }
}

SelectedWrapper.PropTypes = {
    actions: React.PropTypes.object.isRequired
}
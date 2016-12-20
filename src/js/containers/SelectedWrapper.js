import React, { Component, PropTypes } from 'react';
import Card from '../components/Card';
import Resume from '../containers/resume';


export default class SelectedWrapper extends Component {
    constructor(props, context) {
        super(props);
        this.router = context.router;
        this.componentMappings = {
            "card": { "component": Card },
            "resume": { "component": Resume, "action": this.performActionAsNeeded }
        };
    }

    componentDidMount() {
        if (this.componentMappings[this.props.component].action) {
            this.componentMappings[this.props.component].action.bind(this)();
        }
    }

    performActionAsNeeded() {
        this._resetSelectedMarker();
        this.router.push('/resume');
    }

    _resetSelectedMarker() {
        this.props.actions.selectedCard(0);
    }


    render() {
        let ComponentToRender = this.componentMappings[this.props.component].component;
        return (
            <ComponentToRender />
        );
    }
}

SelectedWrapper.contextTypes = {
    router: React.PropTypes.object.isRequired
}

SelectedWrapper.PropTypes = {
    actions: React.PropTypes.object.isRequired
}
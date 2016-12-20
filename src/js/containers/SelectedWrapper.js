import React, {Component, PropTypes} from 'react';
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

    performActionAsNeeded() {
        setTimeout(() => this.router.push('/resume'), 2000);
    }

    render() {
        let ComponentToRender = this.componentMappings[this.props.component].component;
        if (this.componentMappings[this.props.component].action) {
            this.componentMappings[this.props.component].action.bind(this)();
        }
        return (
            <ComponentToRender/>
        );
    }
}

SelectedWrapper.contextTypes = {
    router: React.PropTypes.object.isRequired
}
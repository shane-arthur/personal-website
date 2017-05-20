import React, { Proptypes, Component } from 'react';
import LinkableImage from '../LinkableImage/LinkableImage';

export default class TabContent extends Component {
    constructor(props) {
        super(props);
        this.componentMappings = {
            linkedIn: null
        };
    }

    render() {
        return (
            <div>  <LinkableImage
                selected={this.props.selectedTab}
            /> </div>
        );
    }
}
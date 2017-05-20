import React, { PropTypes, Component } from 'react';

export default class LinkableImage extends Component {
    constructor(props){
        super(props);
        this.linkItems = {
            LinkedIn : { image : null, url : 'http://www.linkedin.ca'},
            Github : { image : null, url: 'http://www.github.com/shane-arthur'},
            Other: {image : null, url: 'http://www.worldstarhiphop.com'}
        }
    }
    render() {
        return (<div>yo, even my goons got goons!</div>);;
    }
}
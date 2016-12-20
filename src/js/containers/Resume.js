import React, { Component } from 'react';
import {connect} from 'react-redux';

class Resume extends Component {

    static fetchData({ store, params, history }) {
        return store.dispatch('goons!');
    }

    render() {
        return (
            <div> Shane is King !# @1 </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Resume);
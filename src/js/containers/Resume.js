import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index';

class Resume extends Component {

    static fetchData({ store, params, history }) {
        return store.dispatch(fetchData('resumeApi'));
    }

    render() {
        var vince = this.props;
        return (
            <div> Shane is King !# @1 </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        resume: state.resume
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ViewActions, dispatch)
    }
}

export default connect(mapStateToProps)(Resume);
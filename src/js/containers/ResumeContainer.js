import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../data/dataFetcher';

class Resume extends Component {

   static fetchData() {
        return getData('resumeApi');
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
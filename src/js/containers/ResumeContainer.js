import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../data/dataFetcher';

class Resume extends Component {

    static fetchData() {
        return getData('resumeApi');
    }


    returnStyle() {
        return {
            width: '500px',
            height: '500px',
            border: '2px solid black',
            position: 'absolute',
            left: '25%',
            top: '25%'
        };
    }

    render() {
        var vince = this.props;
        return (
            <div style={this.returnStyle() }> Shane is King !# @1 </div>
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
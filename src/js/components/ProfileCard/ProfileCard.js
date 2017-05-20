import React, { PropTypes, Component } from 'react';
import { Style } from './Style';
import TabHeaderContainer from '../../containers/TabHeaderContainer';
import TabContent from '../TabContent/TabContent';

export default class ProfileCard extends Component {

    render() {
        return (
            <div style={Style.Wrapper}><TabHeaderContainer
                actions={this.props.actions}
                selectedTab={this.props.selectedTab}
                tabItems={['LinkedIn', 'Github', 'Other']}/>

                <div style={Style.Content}><TabContent
                selectedTab={this.props.selectedTab} /></div>
            </div >
        );
    }
}
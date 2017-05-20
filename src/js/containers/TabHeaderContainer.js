import React, { PropTypes, Component } from 'react';
import TabHeader from '../components/TabHeader/TabHeader';
export default class TabHeaderContainer extends Component {

_setSelectedTab(tabItem) {
   this.props.actions.setSelectedTab(tabItem);
}

    render() {
        return (
            <TabHeader
            selectedTab = {this.props.selectedTab} 
            actions = {this.props.actions}
            tabItems = {this.props.tabItems}
            onTabItemClicked = {this._setSelectedTab} />
        );
    }

}
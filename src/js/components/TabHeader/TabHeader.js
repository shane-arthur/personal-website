import React, { PropTypes, Component } from 'react';
import { Style } from './Style';

export default class TabHeader extends Component {

    _formTabItems() {
       const tabItemStyle = { display : 'inline-block'};

       const formTabItemContent = (tabItem) => {
           return tabItem === this.props.selectedTab ? { ...tabItemStyle, background : 'red'} : tabItemStyle;
       };

    
        return this.props.tabItems.map(tabItem => {
            return <div key={tabItem} style={tabItemStyle}><div key={tabItem} style={formTabItemContent(tabItem)} onClick={this.props.onTabItemClicked.bind(this, tabItem) }>  {tabItem}</div> <div style={tabItemStyle}> |&nbsp;</div></div>;
        });
    }

    render() {
        const tabItems = this._formTabItems();

        return (
            <div>{tabItems}</div>
        );
    }
}
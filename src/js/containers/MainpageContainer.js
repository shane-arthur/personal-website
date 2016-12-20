import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ViewActions from '../actions';
import Marker from '../components/Marker';
import Card from '../components/Card';
import SelectedWrapper from '../containers/SelectedWrapper';
import PictureWithFrame from '../components/PictureWithFrame';
import {MAINPAGE_STYLE, MAINPAGE_WRAPPER_STYLE} from '../constants/styles/Mainpage-Styles';
import {CARD_STYLE} from '../constants/styles/Card-Styles';
import {MARKER_STYLES} from '../constants/styles/Marker-Styles';
import Radium, { StyleRoot} from 'radium';
import { iconMappings } from '../constants/iconMappings';
import { fetchData } from '../actions/index';

@Radium
class MainpageContainer extends Component {

    static fetchData({ store, params, history }) {
        return store.dispatch(fetchData('cards'));
    }

    _renderCards() {
        const selectedCardId = this._extractSelectedCard(this.props.views.items);
        if (this._extractCardIds(this.props.views.items).indexOf(selectedCardId) > -1) {
            return (<SelectedWrapper
                component={this.props.views.items[selectedCardId -1].component}/>);
        }
        else {
            return (<PictureWithFrame/>);
        }
    }

    _renderMarkers() {
        return (this.props.views.items.map(item => <Marker key={item.id} markerId={item.id}
            actions={this.props.actions}
            selected={item.selected}
            style={MARKER_STYLES[item.id]}
            hoverIcon={this._generateHoverIcon(item.icon) }/>));
    }

    _generateHoverIcon(iconKey) {
        return iconMappings[iconKey];
    }

    _extractSelectedCard(cards) {
        const selectedCard = cards.find(card => {
            return card.selected === true;
        });
        return selectedCard ? selectedCard.id : 0;
    }

    _extractCardIds(cards) {
        return cards.map(card => {
            return card.id;
        })
    }


    render() {
        const markers = this._renderMarkers();
        const cards = this._renderCards();

        return (<StyleRoot><div style={MAINPAGE_STYLE}>
            <div style={MAINPAGE_WRAPPER_STYLE}>
                {markers}
                {cards}
            </div>
        </div>
        </StyleRoot>
        );
    }
}

MainpageContainer
    .propTypes = {
        views: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    }

function
mapStateToProps(state) {
    return {
        views: state.views
    }
}

function
mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ViewActions, dispatch)
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps)(MainpageContainer)

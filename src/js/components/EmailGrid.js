import React, {Component, PropTypes} from 'react';
import {CARD_STYLE} from '../constants/styles/Card-Styles'

export default class EmailGrid extends Component {

    render() {
        const newStyle = Object.assign({}, CARD_STYLE);
        newStyle.background = 'white';
        newStyle.display = 'flex';
        newStyle.flexDirection = 'row';
        newStyle.flexWrap = 'wrap';
        newStyle.justifyContnt = 'flex-end';
        console.log(newStyle);

        var flexItem = { flex: 3 };
        var flexItem1 = { flex: 6 };

        return (
            <div style={newStyle}>
                <form>
                    <label>
                        Name:
                        <input type="text" style={flexItem} name="name" />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="name" style={flexItem1} />
                    </label>
                    <textarea id="noter-text-area" name="textarea" style= {{ resize: "none" }}></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
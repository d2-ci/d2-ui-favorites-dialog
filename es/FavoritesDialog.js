import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Favorites from './Favorites';
import configureStore from './configureStore';
import { setFavoriteType, setD2 } from './actions';

var store = configureStore();

var FavoritesDialog = function (_Component) {
    _inherits(FavoritesDialog, _Component);

    function FavoritesDialog(props) {
        _classCallCheck(this, FavoritesDialog);

        // sync type prop with state
        var _this = _possibleConstructorReturn(this, (FavoritesDialog.__proto__ || _Object$getPrototypeOf(FavoritesDialog)).call(this, props));

        if (props.type) {
            store.dispatch(setFavoriteType(props.type));
        }

        if (props.d2) {
            store.dispatch(setD2(props.d2));
        } else {
            console.error('no d2');
        }
        return _this;
    }

    _createClass(FavoritesDialog, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                d2: this.props.d2
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                open = _props.open,
                type = _props.type,
                onFavoriteSelect = _props.onFavoriteSelect,
                onRequestClose = _props.onRequestClose;


            return React.createElement(
                Provider,
                { store: store },
                React.createElement(Favorites, {
                    open: open,
                    type: type,
                    onFavoriteSelect: onFavoriteSelect,
                    onRequestClose: onRequestClose
                })
            );
        }
    }]);

    return FavoritesDialog;
}(Component);

FavoritesDialog.childContextTypes = {
    d2: PropTypes.object.isRequired
};

export default FavoritesDialog;
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';

import EnhancedToolbar from './EnhancedToolbar';
import EnhancedTable from './EnhancedTable';

import { fetchData } from './actions';

var Favorites = function (_Component) {
    _inherits(Favorites, _Component);

    function Favorites() {
        _classCallCheck(this, Favorites);

        return _possibleConstructorReturn(this, (Favorites.__proto__ || _Object$getPrototypeOf(Favorites)).apply(this, arguments));
    }

    _createClass(Favorites, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // fetch data only the first time the dialog is open
            if (nextProps.open && !nextProps.dataIsLoaded) {
                this.props.fetchData();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                open = _props.open,
                onRequestClose = _props.onRequestClose,
                onFavoriteSelect = _props.onFavoriteSelect;


            var handleOnFavoriteSelect = function handleOnFavoriteSelect(id) {
                onFavoriteSelect(id);
                // XXX should this be in the favoriteSelect callback?
                onRequestClose();
            };

            return React.createElement(
                Dialog,
                { open: open, onClose: onRequestClose, disableEnforceFocus: true, maxWidth: 'md' },
                React.createElement(
                    DialogContent,
                    null,
                    React.createElement(EnhancedToolbar, null),
                    React.createElement(EnhancedTable, { onFavoriteSelect: handleOnFavoriteSelect })
                ),
                React.createElement(
                    DialogActions,
                    null,
                    React.createElement(
                        Button,
                        { onClick: onRequestClose },
                        'Close'
                    )
                )
            );
        }
    }]);

    return Favorites;
}(Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        dataIsLoaded: state.data.totalRecords > 0
    };
};

var mapDispatchToProps = {
    fetchData: fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
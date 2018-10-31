'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _styles = require('@material-ui/core/styles');

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Select = require('@material-ui/core/Select');

var _Select2 = _interopRequireDefault(_Select);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Toolbar = require('@material-ui/core/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Tooltip = require('@material-ui/core/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toolbarStyles = function toolbarStyles() {
    return {
        search: {
            flex: '0 0 auto'
        },
        spacer: {
            flex: '1 1 100%'
        }
    };
};

var EnhancedToolbar = function EnhancedToolbar(props) {
    var classes = props.classes,
        createdByValue = props.createdByValue,
        searchValue = props.searchValue,
        searchData = props.searchData,
        filterData = props.filterData;


    return _react2.default.createElement(
        _Toolbar2.default,
        null,
        _react2.default.createElement(_TextField2.default, {
            type: 'search',
            label: 'Search by name',
            className: classes.search,
            value: searchValue,
            onChange: searchData
        }),
        _react2.default.createElement('div', { className: classes.spacer }),
        _react2.default.createElement(
            _Tooltip2.default,
            { title: 'Filter list' },
            _react2.default.createElement(
                _Select2.default,
                {
                    disableUnderline: true,
                    value: createdByValue,
                    onChange: filterData
                },
                _react2.default.createElement(
                    _MenuItem2.default,
                    { value: 'all' },
                    'Show all'
                ),
                _react2.default.createElement(
                    _MenuItem2.default,
                    { value: 'byme' },
                    'Created by me'
                ),
                _react2.default.createElement(
                    _MenuItem2.default,
                    { value: 'byothers' },
                    'Created by others'
                )
            )
        )
    );
};

EnhancedToolbar = (0, _styles.withStyles)(toolbarStyles)(EnhancedToolbar);

var mapStateToProps = function mapStateToProps(state) {
    return {
        createdByValue: state.filtering.createdByValue,
        searchValue: state.filtering.searchValue
    };
};

var mapDispatchToProps = {
    searchData: _actions.searchData,
    filterData: _actions.filterData
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EnhancedToolbar);
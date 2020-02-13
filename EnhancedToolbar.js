"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require("babel-runtime/core-js/object/entries");

var _entries2 = _interopRequireDefault(_entries);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _styles = require("@material-ui/core/styles");

var _MenuItem = require("@material-ui/core/MenuItem");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Select = require("@material-ui/core/Select");

var _Select2 = _interopRequireDefault(_Select);

var _TextField = require("@material-ui/core/TextField");

var _TextField2 = _interopRequireDefault(_TextField);

var _Toolbar = require("@material-ui/core/Toolbar");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _d2I18n = require("@dhis2/d2-i18n");

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _actions = require("./actions");

var _visTypes = require("./visTypes");

var _visTypes2 = _interopRequireDefault(_visTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toolbarStyles = function toolbarStyles() {
    return {
        search: {
            flex: "0 0 auto"
        },
        spacer: {
            flex: "1 1 100%"
        },
        filter: {
            marginLeft: 8
        },
        menuItem: {
            display: 'flex',
            alignItems: 'center'
        },
        menuIcon: {
            marginRight: 8,
            height: 16
        }
    };
};

var EnhancedToolbar = function EnhancedToolbar(props) {
    var classes = props.classes,
        createdByValue = props.createdByValue,
        searchValue = props.searchValue,
        visTypeValue = props.visTypeValue,
        searchData = props.searchData,
        filterData = props.filterData,
        showTypeFilter = props.showTypeFilter;


    return _react2.default.createElement(
        _Toolbar2.default,
        null,
        _react2.default.createElement(_TextField2.default, {
            type: "search",
            label: _d2I18n2.default.t("Search by name"),
            className: classes.search,
            value: searchValue,
            onChange: searchData
        }),
        _react2.default.createElement("div", { className: classes.spacer }),
        _react2.default.createElement(
            _react.Fragment,
            null,
            showTypeFilter ? _react2.default.createElement(
                _Select2.default,
                {
                    className: classes.filter,
                    disableUnderline: true,
                    value: visTypeValue,
                    onChange: function onChange(event) {
                        return filterData('visType', event.target.value);
                    }
                },
                _react2.default.createElement(
                    _MenuItem2.default,
                    { value: "all" },
                    _d2I18n2.default.t('All types')
                ),
                (0, _entries2.default)(_visTypes2.default).map(function (_ref) {
                    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                        key = _ref2[0],
                        value = _ref2[1];

                    return _react2.default.createElement(
                        _MenuItem2.default,
                        { key: key, value: key },
                        _react2.default.createElement(
                            "span",
                            { className: classes.menuItem },
                            _react2.default.createElement(
                                "span",
                                { className: classes.menuIcon },
                                value.icon
                            ),
                            " ",
                            value.label
                        )
                    );
                })
            ) : null,
            _react2.default.createElement(
                _Select2.default,
                {
                    className: classes.filter,
                    disableUnderline: true,
                    value: createdByValue,
                    onChange: function onChange(event) {
                        return filterData('owner', event.target.value);
                    }
                },
                _react2.default.createElement(
                    _MenuItem2.default,
                    { value: "all" },
                    _d2I18n2.default.t('All owners')
                ),
                _react2.default.createElement(
                    _MenuItem2.default,
                    { value: "byme" },
                    _d2I18n2.default.t('Created by you')
                ),
                _react2.default.createElement(
                    _MenuItem2.default,
                    { value: "byothers" },
                    _d2I18n2.default.t('Created by others')
                )
            )
        )
    );
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        createdByValue: state.filtering.createdByValue,
        searchValue: state.filtering.searchValue,
        visTypeValue: state.filtering.visTypeValue
    };
};

var mapDispatchToProps = {
    searchData: _actions.searchData,
    filterData: _actions.filterData
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _styles.withStyles)(toolbarStyles)(EnhancedToolbar));
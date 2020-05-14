"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

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

var _Divider = require("@material-ui/core/Divider");

var _Divider2 = _interopRequireDefault(_Divider);

var _d2I18n = require("@dhis2/d2-i18n");

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _actions = require("./actions");

var _visTypes = require("./visTypes");

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

var VisTypeFilterMenuItem = (0, _styles.withStyles)(toolbarStyles)(function (_ref) {
    var classes = _ref.classes,
        type = _ref.type,
        _ref$icon = _ref.icon,
        icon = _ref$icon === undefined ? undefined : _ref$icon,
        _ref$label = _ref.label,
        label = _ref$label === undefined ? undefined : _ref$label;
    return _react2.default.createElement(
        "span",
        { className: classes.menuItem },
        _react2.default.createElement(
            "span",
            { className: classes.menuIcon },
            icon || _visTypes.visTypeIcons[type]
        ),
        label || (0, _visTypes.getVisTypeLabel)(type)
    );
});

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
                _react2.default.createElement(_Divider2.default, null),
                _react2.default.createElement(
                    _MenuItem2.default,
                    { value: _visTypes.CHART },
                    _react2.default.createElement(VisTypeFilterMenuItem, {
                        type: _visTypes.CHART,
                        icon: _visTypes.visTypeIcons[_visTypes.COLUMN],
                        label: _d2I18n2.default.t('All chart types')
                    })
                ),
                _react2.default.createElement(
                    _MenuItem2.default,
                    { value: _visTypes.PIVOT_TABLE },
                    _react2.default.createElement(VisTypeFilterMenuItem, { type: _visTypes.PIVOT_TABLE })
                ),
                _react2.default.createElement(_Divider2.default, null),
                (0, _keys2.default)(_visTypes.visTypeIcons).filter(function (type) {
                    return type !== _visTypes.PIVOT_TABLE;
                }).map(function (type) {
                    return _react2.default.createElement(
                        _MenuItem2.default,
                        { key: type, value: type },
                        _react2.default.createElement(VisTypeFilterMenuItem, { type: type })
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
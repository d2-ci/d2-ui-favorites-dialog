"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require("babel-runtime/core-js/object/entries");

var _entries2 = _interopRequireDefault(_entries);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

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

var _Tooltip = require("@material-ui/core/Tooltip");

var _Tooltip2 = _interopRequireDefault(_Tooltip);

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
            flex: "0 0 auto"
        },
        menuItem: {
            display: 'flex',
            alignItems: 'center'
        },
        menuIcon: {
            marginRight: 8
        }
    };
};

var EnhancedToolbar = function (_Component) {
    (0, _inherits3.default)(EnhancedToolbar, _Component);

    function EnhancedToolbar() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, EnhancedToolbar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedToolbar.__proto__ || (0, _getPrototypeOf2.default)(EnhancedToolbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            filterTooltipOpen: false
        }, _this.showFilterTooltip = function () {
            _this.setState({ filterTooltipOpen: true });
        }, _this.hideFilterTooltip = function () {
            _this.setState({ filterTooltipOpen: false });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(EnhancedToolbar, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                createdByValue = _props.createdByValue,
                searchValue = _props.searchValue,
                visTypeValue = _props.visTypeValue,
                searchData = _props.searchData,
                filterData = _props.filterData,
                showTypeFilter = _props.showTypeFilter;


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
                    _Tooltip2.default,
                    {
                        className: classes.filter,
                        title: _d2I18n2.default.t("Filter list"),
                        open: this.state.filterTooltipOpen
                    },
                    _react2.default.createElement(
                        _react.Fragment,
                        null,
                        showTypeFilter ? _react2.default.createElement(
                            _Select2.default,
                            {
                                disableUnderline: true,
                                value: visTypeValue,
                                onChange: function onChange(event) {
                                    return filterData('visType', event.target.value);
                                },
                                onMouseEnter: this.showFilterTooltip,
                                onMouseLeave: this.hideFilterTooltip,
                                MenuProps: {
                                    onEnter: this.hideFilterTooltip
                                }
                            },
                            _react2.default.createElement(
                                _MenuItem2.default,
                                { value: "all" },
                                _d2I18n2.default.t('All types')
                            ),
                            (0, _entries2.default)(_visTypes2.default).map(function (_ref2) {
                                var _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
                                    key = _ref3[0],
                                    value = _ref3[1];

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
                                disableUnderline: true,
                                value: createdByValue,
                                onChange: function onChange(event) {
                                    return filterData('owner', event.target.value);
                                },
                                onMouseEnter: this.showFilterTooltip,
                                onMouseLeave: this.hideFilterTooltip,
                                MenuProps: {
                                    onEnter: this.hideFilterTooltip
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
                                _d2I18n2.default.t('Created by me')
                            ),
                            _react2.default.createElement(
                                _MenuItem2.default,
                                { value: "byothers" },
                                _d2I18n2.default.t('Created by others')
                            )
                        )
                    )
                )
            );
        }
    }]);
    return EnhancedToolbar;
}(_react.Component);

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
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _actions = require("./actions");

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
                searchData = _props.searchData,
                filterData = _props.filterData;


            return _react2.default.createElement(
                _Toolbar2.default,
                null,
                _react2.default.createElement(_TextField2.default, {
                    type: "search",
                    label: "Search by name",
                    className: classes.search,
                    value: searchValue,
                    onChange: searchData
                }),
                _react2.default.createElement("div", { className: classes.spacer }),
                _react2.default.createElement(
                    _Tooltip2.default,
                    {
                        className: classes.filter,
                        title: "Filter list",
                        open: this.state.filterTooltipOpen
                    },
                    _react2.default.createElement(
                        _Select2.default,
                        {
                            disableUnderline: true,
                            value: createdByValue,
                            onChange: filterData,
                            onMouseEnter: this.showFilterTooltip,
                            onMouseLeave: this.hideFilterTooltip,
                            MenuProps: {
                                onEnter: this.hideFilterTooltip
                            }
                        },
                        _react2.default.createElement(
                            _MenuItem2.default,
                            { value: "all" },
                            "Show all"
                        ),
                        _react2.default.createElement(
                            _MenuItem2.default,
                            { value: "byme" },
                            "Created by me"
                        ),
                        _react2.default.createElement(
                            _MenuItem2.default,
                            { value: "byothers" },
                            "Created by others"
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
        searchValue: state.filtering.searchValue
    };
};

var mapDispatchToProps = {
    searchData: _actions.searchData,
    filterData: _actions.filterData
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _styles.withStyles)(toolbarStyles)(EnhancedToolbar));
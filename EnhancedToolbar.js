import _Object$getPrototypeOf from "babel-runtime/core-js/object/get-prototype-of";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _createClass from "babel-runtime/helpers/createClass";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";

import { filterData, searchData } from "./actions";

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
    _inherits(EnhancedToolbar, _Component);

    function EnhancedToolbar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EnhancedToolbar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EnhancedToolbar.__proto__ || _Object$getPrototypeOf(EnhancedToolbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            filterTooltipOpen: false
        }, _this.showFilterTooltip = function () {
            _this.setState({ filterTooltipOpen: true });
        }, _this.hideFilterTooltip = function () {
            _this.setState({ filterTooltipOpen: false });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EnhancedToolbar, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                createdByValue = _props.createdByValue,
                searchValue = _props.searchValue,
                searchData = _props.searchData,
                filterData = _props.filterData;


            return React.createElement(
                Toolbar,
                null,
                React.createElement(TextField, {
                    type: "search",
                    label: "Search by name",
                    className: classes.search,
                    value: searchValue,
                    onChange: searchData
                }),
                React.createElement("div", { className: classes.spacer }),
                React.createElement(
                    Tooltip,
                    {
                        className: classes.filter,
                        title: "Filter list",
                        open: this.state.filterTooltipOpen
                    },
                    React.createElement(
                        Select,
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
                        React.createElement(
                            MenuItem,
                            { value: "all" },
                            "Show all"
                        ),
                        React.createElement(
                            MenuItem,
                            { value: "byme" },
                            "Created by me"
                        ),
                        React.createElement(
                            MenuItem,
                            { value: "byothers" },
                            "Created by others"
                        )
                    )
                )
            );
        }
    }]);

    return EnhancedToolbar;
}(Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        createdByValue: state.filtering.createdByValue,
        searchValue: state.filtering.searchValue
    };
};

var mapDispatchToProps = {
    searchData: searchData,
    filterData: filterData
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(toolbarStyles)(EnhancedToolbar));
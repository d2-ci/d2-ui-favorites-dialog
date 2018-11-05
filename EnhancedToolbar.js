import React from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';

import { filterData, searchData } from './actions';

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


    return React.createElement(
        Toolbar,
        null,
        React.createElement(TextField, {
            type: 'search',
            label: 'Search by name',
            className: classes.search,
            value: searchValue,
            onChange: searchData
        }),
        React.createElement('div', { className: classes.spacer }),
        React.createElement(
            Tooltip,
            { title: 'Filter list' },
            React.createElement(
                Select,
                {
                    disableUnderline: true,
                    value: createdByValue,
                    onChange: filterData
                },
                React.createElement(
                    MenuItem,
                    { value: 'all' },
                    'Show all'
                ),
                React.createElement(
                    MenuItem,
                    { value: 'byme' },
                    'Created by me'
                ),
                React.createElement(
                    MenuItem,
                    { value: 'byothers' },
                    'Created by others'
                )
            )
        )
    );
};

EnhancedToolbar = withStyles(toolbarStyles)(EnhancedToolbar);

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

export default connect(mapStateToProps, mapDispatchToProps)(EnhancedToolbar);
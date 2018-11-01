import React from 'react';
import { connect } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import ActionsMenu from './ActionsMenu';

import { changePage, setRowsPerPage, sortData, toggleActionsMenu, setActionsMenuAnchorEl, selectFavorite } from './actions';

var Time = function Time(_ref) {
    var date = _ref.date;

    var d = new Date(date);
    var time = d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);

    return React.createElement(
        'time',
        { dateTime: d.toISOString() },
        time
    );
};

var EnhancedTableHead = function EnhancedTableHead(props) {
    var order = props.order,
        column = props.column,
        sortData = props.sortData;
    // TODO i18n on labels

    var columns = [{ id: 'displayName', label: 'Name' }, { id: 'created', label: 'Created' }, { id: 'lastUpdated', label: 'Last updated' }];

    var createSortHandler = function createSortHandler(column) {
        return function (event) {
            sortData(event, column);
        };
    };

    return React.createElement(
        TableHead,
        null,
        React.createElement(
            TableRow,
            null,
            columns.map(function (c) {
                return React.createElement(
                    TableCell,
                    { key: c.id },
                    React.createElement(
                        TableSortLabel,
                        {
                            active: column === c.id,
                            direction: order,
                            onClick: createSortHandler(c.id)
                        },
                        c.label
                    )
                );
            }),
            React.createElement(TableCell, null)
        )
    );
};

var EnhancedTable = function EnhancedTable(props) {
    var data = props.data,
        rowsPerPage = props.rowsPerPage,
        totalRecords = props.totalRecords,
        page = props.page,
        changePage = props.changePage,
        order = props.order,
        column = props.column,
        sortData = props.sortData,
        toggleActionsMenu = props.toggleActionsMenu,
        setActionsMenuAnchorEl = props.setActionsMenuAnchorEl,
        selectFavorite = props.selectFavorite,
        onFavoriteSelect = props.onFavoriteSelect;


    var actionsMenuHandler = function actionsMenuHandler(model) {
        return function (event) {
            selectFavorite(model);
            setActionsMenuAnchorEl(event.currentTarget);
            toggleActionsMenu();
        };
    };

    var clickHandler = function clickHandler(id) {
        return function (event) {
            onFavoriteSelect(id);
        };
    };

    return React.createElement(
        'div',
        null,
        React.createElement(
            Table,
            null,
            React.createElement(EnhancedTableHead, { order: order, column: column, sortData: sortData }),
            React.createElement(
                TableBody,
                null,
                data.map(function (favorite) {
                    return React.createElement(
                        TableRow,
                        { hover: true, key: favorite.id },
                        React.createElement(
                            TableCell,
                            {
                                padding: 'dense',
                                onClick: clickHandler(favorite.id),
                                style: { width: '60%', cursor: 'pointer' }
                            },
                            favorite.displayName
                        ),
                        React.createElement(
                            TableCell,
                            { padding: 'dense' },
                            React.createElement(Time, { date: favorite.created })
                        ),
                        React.createElement(
                            TableCell,
                            { padding: 'dense' },
                            React.createElement(Time, { date: favorite.lastUpdated })
                        ),
                        React.createElement(
                            TableCell,
                            { padding: 'dense' },
                            favorite.access.update && favorite.access.manage && favorite.access.delete ? React.createElement(
                                Tooltip,
                                { title: 'Actions', placement: 'bottom' },
                                React.createElement(
                                    IconButton,
                                    { onClick: actionsMenuHandler(favorite) },
                                    React.createElement(MoreVertIcon, null)
                                )
                            ) : React.createElement(
                                IconButton,
                                { disabled: true },
                                React.createElement(MoreVertIcon, { color: 'disabled' })
                            )
                        )
                    );
                })
            ),
            React.createElement(
                TableFooter,
                null,
                React.createElement(
                    TableRow,
                    null,
                    React.createElement(TablePagination, {
                        count: totalRecords,
                        rowsPerPage: rowsPerPage,
                        page: page,
                        onChangePage: changePage
                        //onChangeRowsPerPage={setRowsPerPage}
                        //rowsPerPageOptions={[5, 10, 15, 20]}
                        , rowsPerPageOptions: []
                    })
                )
            )
        ),
        React.createElement(ActionsMenu, null)
    );
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        order: state.sorting.order,
        column: state.sorting.column,
        page: state.pagination.page,
        rowsPerPage: state.pagination.rowsPerPage,
        totalRecords: state.data.totalRecords,
        data: state.data.records
    };
};

var mapDispatchToProps = {
    setRowsPerPage: setRowsPerPage,
    changePage: changePage,
    sortData: sortData,
    toggleActionsMenu: toggleActionsMenu,
    setActionsMenuAnchorEl: setActionsMenuAnchorEl,
    selectFavorite: selectFavorite
};

export default connect(mapStateToProps, mapDispatchToProps)(EnhancedTable);
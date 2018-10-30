'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Table = require('@material-ui/core/Table');

var _Table2 = _interopRequireDefault(_Table);

var _TableBody = require('@material-ui/core/TableBody');

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = require('@material-ui/core/TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableFooter = require('@material-ui/core/TableFooter');

var _TableFooter2 = _interopRequireDefault(_TableFooter);

var _TableHead = require('@material-ui/core/TableHead');

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TablePagination = require('@material-ui/core/TablePagination');

var _TablePagination2 = _interopRequireDefault(_TablePagination);

var _TableRow = require('@material-ui/core/TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableSortLabel = require('@material-ui/core/TableSortLabel');

var _TableSortLabel2 = _interopRequireDefault(_TableSortLabel);

var _Tooltip = require('@material-ui/core/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _MoreVert = require('@material-ui/icons/MoreVert');

var _MoreVert2 = _interopRequireDefault(_MoreVert);

var _ActionsMenu = require('./ActionsMenu');

var _ActionsMenu2 = _interopRequireDefault(_ActionsMenu);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Time = function Time(_ref) {
    var date = _ref.date;

    var d = new Date(date);
    var time = d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);

    return _react2.default.createElement(
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

    return _react2.default.createElement(
        _TableHead2.default,
        null,
        _react2.default.createElement(
            _TableRow2.default,
            null,
            columns.map(function (c) {
                return _react2.default.createElement(
                    _TableCell2.default,
                    { key: c.id },
                    _react2.default.createElement(
                        _TableSortLabel2.default,
                        {
                            active: column === c.id,
                            direction: order,
                            onClick: createSortHandler(c.id)
                        },
                        c.label
                    )
                );
            }),
            _react2.default.createElement(_TableCell2.default, null)
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

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _Table2.default,
            null,
            _react2.default.createElement(EnhancedTableHead, { order: order, column: column, sortData: sortData }),
            _react2.default.createElement(
                _TableBody2.default,
                null,
                data.map(function (favorite) {
                    return _react2.default.createElement(
                        _TableRow2.default,
                        { hover: true, key: favorite.id },
                        _react2.default.createElement(
                            _TableCell2.default,
                            {
                                padding: 'dense',
                                onClick: clickHandler(favorite.id),
                                style: { width: '60%', cursor: 'pointer' }
                            },
                            favorite.displayName
                        ),
                        _react2.default.createElement(
                            _TableCell2.default,
                            { padding: 'dense' },
                            _react2.default.createElement(Time, { date: favorite.created })
                        ),
                        _react2.default.createElement(
                            _TableCell2.default,
                            { padding: 'dense' },
                            _react2.default.createElement(Time, { date: favorite.lastUpdated })
                        ),
                        _react2.default.createElement(
                            _TableCell2.default,
                            { padding: 'dense' },
                            favorite.access.update && favorite.access.manage && favorite.access.delete ? _react2.default.createElement(
                                _Tooltip2.default,
                                { title: 'Actions', placement: 'bottom' },
                                _react2.default.createElement(
                                    _IconButton2.default,
                                    { onClick: actionsMenuHandler(favorite) },
                                    _react2.default.createElement(_MoreVert2.default, null)
                                )
                            ) : _react2.default.createElement(
                                _IconButton2.default,
                                { disabled: true },
                                _react2.default.createElement(_MoreVert2.default, { color: 'disabled' })
                            )
                        )
                    );
                })
            ),
            _react2.default.createElement(
                _TableFooter2.default,
                null,
                _react2.default.createElement(
                    _TableRow2.default,
                    null,
                    _react2.default.createElement(_TablePagination2.default, {
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
        _react2.default.createElement(_ActionsMenu2.default, null)
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
    setRowsPerPage: _actions.setRowsPerPage,
    changePage: _actions.changePage,
    sortData: _actions.sortData,
    toggleActionsMenu: _actions.toggleActionsMenu,
    setActionsMenuAnchorEl: _actions.setActionsMenuAnchorEl,
    selectFavorite: _actions.selectFavorite
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EnhancedTable);
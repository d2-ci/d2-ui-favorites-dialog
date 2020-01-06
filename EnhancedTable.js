'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

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

var _d2I18n = require('@dhis2/d2-i18n');

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _BarIcon = require('./icons/BarIcon');

var _BarIcon2 = _interopRequireDefault(_BarIcon);

var _StackedBarIcon = require('./icons/StackedBarIcon');

var _StackedBarIcon2 = _interopRequireDefault(_StackedBarIcon);

var _ColumnIcon = require('./icons/ColumnIcon');

var _ColumnIcon2 = _interopRequireDefault(_ColumnIcon);

var _StackedColumnIcon = require('./icons/StackedColumnIcon');

var _StackedColumnIcon2 = _interopRequireDefault(_StackedColumnIcon);

var _LineIcon = require('./icons/LineIcon');

var _LineIcon2 = _interopRequireDefault(_LineIcon);

var _AreaIcon = require('./icons/AreaIcon');

var _AreaIcon2 = _interopRequireDefault(_AreaIcon);

var _PieIcon = require('./icons/PieIcon');

var _PieIcon2 = _interopRequireDefault(_PieIcon);

var _RadarIcon = require('./icons/RadarIcon');

var _RadarIcon2 = _interopRequireDefault(_RadarIcon);

var _GaugeIcon = require('./icons/GaugeIcon');

var _GaugeIcon2 = _interopRequireDefault(_GaugeIcon);

var _YearOverYearLineIcon = require('./icons/YearOverYearLineIcon');

var _YearOverYearLineIcon2 = _interopRequireDefault(_YearOverYearLineIcon);

var _YearOverYearColumnIcon = require('./icons/YearOverYearColumnIcon');

var _YearOverYearColumnIcon2 = _interopRequireDefault(_YearOverYearColumnIcon);

var _SingleValueIcon = require('./icons/SingleValueIcon');

var _SingleValueIcon2 = _interopRequireDefault(_SingleValueIcon);

var _PivotTableIcon = require('./icons/PivotTableIcon');

var _PivotTableIcon2 = _interopRequireDefault(_PivotTableIcon);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var visTypeMap = {
    BAR: { label: _d2I18n2.default.t('Bar'), icon: _BarIcon2.default },
    STACKED_BAR: { label: _d2I18n2.default.t('Stacked bar'), icon: _StackedBarIcon2.default },
    COLUMN: { label: _d2I18n2.default.t('Column'), icon: _ColumnIcon2.default },
    STACKED_COLUMN: { label: _d2I18n2.default.t('Stacked column'), icon: _StackedColumnIcon2.default },
    LINE: { label: _d2I18n2.default.t('Line'), icon: _LineIcon2.default },
    AREA: { label: _d2I18n2.default.t('Area'), icon: _AreaIcon2.default },
    PIE: { label: _d2I18n2.default.t('Pie'), icon: _PieIcon2.default },
    RADAR: { label: _d2I18n2.default.t('Radar'), icon: _RadarIcon2.default },
    GAUGE: { label: _d2I18n2.default.t('Gauge'), icon: _GaugeIcon2.default },
    YEAR_OVER_YEAR_LINE: { label: _d2I18n2.default.t('Year over year (line)'), icon: _YearOverYearLineIcon2.default },
    YEAR_OVER_YEAR_COLUMN: { label: _d2I18n2.default.t('Year over year (column)'), icon: _YearOverYearColumnIcon2.default },
    SINGLE_VALUE: { label: _d2I18n2.default.t('Single value'), icon: _SingleValueIcon2.default },
    PIVOT_TABLE: { label: _d2I18n2.default.t('Pivot table'), icon: _PivotTableIcon2.default }
};

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

    var columns = [{ id: 'displayName', label: _d2I18n2.default.t('Name') }, { id: 'type', label: _d2I18n2.default.t('Type') }, { id: 'created', label: _d2I18n2.default.t('Created') }, { id: 'lastUpdated', label: _d2I18n2.default.t('Last updated') }];

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
            })
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
        onFavoriteSelect = props.onFavoriteSelect;


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
                    var visType = visTypeMap[favorite.type];

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
                            {
                                padding: 'dense' },
                            _react2.default.createElement(
                                _Tooltip2.default,
                                { title: visType.label },
                                visType.icon
                            )
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
        )
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
    selectFavorite: _actions.selectFavorite
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EnhancedTable);
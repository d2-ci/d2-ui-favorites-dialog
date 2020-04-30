'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getVisTypeLabel = exports.visTypeIcons = exports.PIVOT_TABLE = exports.CHART = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CHART = exports.CHART = 'CHART';
var PIVOT_TABLE = exports.PIVOT_TABLE = 'PIVOT_TABLE';

var visTypeIcons = exports.visTypeIcons = (0, _defineProperty3.default)({
    COLUMN: _ColumnIcon2.default,
    STACKED_COLUMN: _StackedColumnIcon2.default,
    BAR: _BarIcon2.default,
    STACKED_BAR: _StackedBarIcon2.default,
    LINE: _LineIcon2.default,
    AREA: _AreaIcon2.default,
    PIE: _PieIcon2.default,
    RADAR: _RadarIcon2.default,
    GAUGE: _GaugeIcon2.default,
    YEAR_OVER_YEAR_LINE: _YearOverYearLineIcon2.default,
    YEAR_OVER_YEAR_COLUMN: _YearOverYearColumnIcon2.default,
    SINGLE_VALUE: _SingleValueIcon2.default
}, PIVOT_TABLE, _PivotTableIcon2.default);

var getVisTypeLabel = exports.getVisTypeLabel = function getVisTypeLabel(type) {
    var visTypeLabels = (0, _defineProperty3.default)({
        COLUMN: _d2I18n2.default.t("Column"),
        STACKED_COLUMN: _d2I18n2.default.t("Stacked column"),
        BAR: _d2I18n2.default.t("Bar"),
        STACKED_BAR: _d2I18n2.default.t("Stacked bar"),
        LINE: _d2I18n2.default.t("Line"),
        AREA: _d2I18n2.default.t("Area"),
        PIE: _d2I18n2.default.t("Pie"),
        RADAR: _d2I18n2.default.t("Radar"),
        GAUGE: _d2I18n2.default.t("Gauge"),
        YEAR_OVER_YEAR_LINE: _d2I18n2.default.t("Year over year (line)"),
        YEAR_OVER_YEAR_COLUMN: _d2I18n2.default.t("Year over year (column)"),
        SINGLE_VALUE: _d2I18n2.default.t("Single value")
    }, PIVOT_TABLE, _d2I18n2.default.t("Pivot table"));

    return visTypeLabels[type];
};
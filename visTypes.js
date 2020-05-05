'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getVisTypeLabel = exports.visTypeIcons = exports.COLUMN = exports.PIVOT_TABLE = exports.CHART = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _visTypeIcons;

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
var COLUMN = exports.COLUMN = 'COLUMN';

var visTypeIcons = exports.visTypeIcons = (_visTypeIcons = {}, (0, _defineProperty3.default)(_visTypeIcons, COLUMN, _ColumnIcon2.default), (0, _defineProperty3.default)(_visTypeIcons, 'STACKED_COLUMN', _StackedColumnIcon2.default), (0, _defineProperty3.default)(_visTypeIcons, 'BAR', _BarIcon2.default), (0, _defineProperty3.default)(_visTypeIcons, 'STACKED_BAR', _StackedBarIcon2.default), (0, _defineProperty3.default)(_visTypeIcons, 'LINE', _LineIcon2.default), (0, _defineProperty3.default)(_visTypeIcons, 'AREA', _AreaIcon2.default), (0, _defineProperty3.default)(_visTypeIcons, 'PIE', _PieIcon2.default), (0, _defineProperty3.default)(_visTypeIcons, 'RADAR', _RadarIcon2.default), (0, _defineProperty3.default)(_visTypeIcons, 'GAUGE', _GaugeIcon2.default), (0, _defineProperty3.default)(_visTypeIcons, 'YEAR_OVER_YEAR_LINE', _YearOverYearLineIcon2.default), (0, _defineProperty3.default)(_visTypeIcons, 'YEAR_OVER_YEAR_COLUMN', _YearOverYearColumnIcon2.default), (0, _defineProperty3.default)(_visTypeIcons, 'SINGLE_VALUE', _SingleValueIcon2.default), (0, _defineProperty3.default)(_visTypeIcons, PIVOT_TABLE, _PivotTableIcon2.default), _visTypeIcons);

var getVisTypeLabel = exports.getVisTypeLabel = function getVisTypeLabel(type) {
    var _visTypeLabels;

    var visTypeLabels = (_visTypeLabels = {}, (0, _defineProperty3.default)(_visTypeLabels, COLUMN, _d2I18n2.default.t("Column")), (0, _defineProperty3.default)(_visTypeLabels, 'STACKED_COLUMN', _d2I18n2.default.t("Stacked column")), (0, _defineProperty3.default)(_visTypeLabels, 'BAR', _d2I18n2.default.t("Bar")), (0, _defineProperty3.default)(_visTypeLabels, 'STACKED_BAR', _d2I18n2.default.t("Stacked bar")), (0, _defineProperty3.default)(_visTypeLabels, 'LINE', _d2I18n2.default.t("Line")), (0, _defineProperty3.default)(_visTypeLabels, 'AREA', _d2I18n2.default.t("Area")), (0, _defineProperty3.default)(_visTypeLabels, 'PIE', _d2I18n2.default.t("Pie")), (0, _defineProperty3.default)(_visTypeLabels, 'RADAR', _d2I18n2.default.t("Radar")), (0, _defineProperty3.default)(_visTypeLabels, 'GAUGE', _d2I18n2.default.t("Gauge")), (0, _defineProperty3.default)(_visTypeLabels, 'YEAR_OVER_YEAR_LINE', _d2I18n2.default.t("Year over year (line)")), (0, _defineProperty3.default)(_visTypeLabels, 'YEAR_OVER_YEAR_COLUMN', _d2I18n2.default.t("Year over year (column)")), (0, _defineProperty3.default)(_visTypeLabels, 'SINGLE_VALUE', _d2I18n2.default.t("Single value")), (0, _defineProperty3.default)(_visTypeLabels, PIVOT_TABLE, _d2I18n2.default.t("Pivot table")), _visTypeLabels);

    return visTypeLabels[type];
};
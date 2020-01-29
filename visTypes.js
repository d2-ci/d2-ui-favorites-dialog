'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

exports.default = visTypeMap;
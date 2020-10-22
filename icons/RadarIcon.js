'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _SvgIcon2.default,
    { viewBox: '0 0 16 16', style: { fontSize: 16 } },
    _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        _react2.default.createElement('circle', { stroke: '#7B8998', cx: '8', cy: '8', r: '6' }),
        _react2.default.createElement('circle', { stroke: '#7B8998', cx: '8', cy: '8', r: '3' }),
        _react2.default.createElement('circle', { fill: '#7B8998', cx: '8', cy: '2', r: '2' }),
        _react2.default.createElement('circle', { fill: '#7B8998', cx: '3', cy: '12', r: '2' })
    )
);
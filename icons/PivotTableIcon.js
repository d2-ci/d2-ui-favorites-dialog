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
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('polygon', { fill: '#7B8998', points: '1 11 15 11 15 12 1 12' }),
            _react2.default.createElement('polygon', { fill: '#7B8998', points: '6 1 7 1 7 15 6 15' }),
            _react2.default.createElement('polygon', { fill: '#7B8998', points: '1 6 15 6 15 7 1 7' }),
            _react2.default.createElement('rect', { stroke: '#7B8998', x: '0.5', y: '0.5', width: '15', height: '15' })
        )
    )
);
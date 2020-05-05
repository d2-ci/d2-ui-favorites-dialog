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
            { fill: '#7B8998' },
            _react2.default.createElement('rect', { x: '0', y: '15', width: '16', height: '1' }),
            _react2.default.createElement('rect', { x: '0', y: '0', width: '1', height: '16' }),
            _react2.default.createElement('rect', { x: '1', y: '10', width: '13', height: '3' }),
            _react2.default.createElement('rect', { x: '1', y: '5', width: '10', height: '3' }),
            _react2.default.createElement('rect', { x: '1', y: '0', width: '5', height: '3' })
        )
    )
);
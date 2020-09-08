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
        _react2.default.createElement('path', { d: 'm0 0h1v15h15v1h-16z', fill: '#4a5768' }),
        _react2.default.createElement('path', { d: 'm15 9v5h-13v-3l4-2 4 3zm-5-6 5 2v2l-5 3-4-3-4 2v-6l4 2z', fill: '#7b8998' })
    )
);
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
    { viewBox: '0 0 16 16', style: { marginRight: 8 } },
    _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
                'mask',
                { id: 'mask-2', fill: 'white' },
                _react2.default.createElement('rect', { id: 'path-1', x: '0', y: '0', width: '16', height: '16' })
            ),
            _react2.default.createElement('rect', { fill: '#7B8998', mask: 'url(#mask-2)', x: '0', y: '15', width: '16', height: '1' }),
            _react2.default.createElement('rect', { fill: '#7B8998', mask: 'url(#mask-2)', x: '0', y: '0', width: '1', height: '16' }),
            _react2.default.createElement('polyline', { stroke: '#7B8998', strokeWidth: '1.5', mask: 'url(#mask-2)', points: '0 5 5 10 10 6 15 12' }),
            _react2.default.createElement('polyline', { stroke: '#7B8998', strokeWidth: '1.5', mask: 'url(#mask-2)', points: '0 10 5 2 10 12 15 4' })
        )
    )
);
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
                { fill: 'white' },
                _react2.default.createElement('polygon', { points: '0 0 16 0 16 16 0 16' })
            )
        ),
        _react2.default.createElement('path', { d: 'M15,12 C15,8.13400675 11.8659932,5 8,5 C4.13400675,5 1,8.13400675 1,12', stroke: '#7B8998' }),
        _react2.default.createElement(
            'g',
            { transform: 'translate(1.000000, 6.000000)' },
            _react2.default.createElement('path', { d: 'M7,0 C9.14,0 11.13,1.14 12.2,3 C13.27,4.86 13.27,7.14 12.2,9 C11.13,10.86 9.14,12 7,12 C4.86,12 2.87,10.86 1.8,9 C0.73,7.14 0.73,4.86 1.8,3 C2.87,1.14 4.86,0 7,0 L7,3 C5.93,3 4.94,3.57 4.4,4.5 C3.86,5.43 3.86,6.57 4.4,7.5 C4.94,8.43 5.93,9 7,9 C8.07,9 9.06,8.43 9.6,7.5 C10.14,6.57 10.14,5.43 9.6,4.5 C9.06,3.57 8.07,3 7,3 L7,0 Z', fillOpacity: '0.002', fill: '#455A64' }),
            _react2.default.createElement('path', { d: 'M1,6 C1,3.86 2.14,1.87 4,0.8 C4.91,0.27 5.95,0 7,0 L7,3 C5.93,3 4.94,3.57 4.4,4.5 C4.14,4.96 4,5.47 4,6 L1,6 Z', fill: '#7B8998' })
        )
    )
);
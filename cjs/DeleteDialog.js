'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dialog = require('@material-ui/core/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogActions = require('@material-ui/core/DialogActions');

var _DialogActions2 = _interopRequireDefault(_DialogActions);

var _DialogContent = require('@material-ui/core/DialogContent');

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogTitle = require('@material-ui/core/DialogTitle');

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeleteDialog = function DeleteDialog(props) {
    var open = props.open,
        onRequestClose = props.onRequestClose,
        onRequestDelete = props.onRequestDelete;


    return _react2.default.createElement(
        _Dialog2.default,
        { open: open, onClose: onRequestClose, maxWidth: 'xs' },
        _react2.default.createElement(
            _DialogTitle2.default,
            null,
            'Delete favorite'
        ),
        _react2.default.createElement(
            _DialogContent2.default,
            null,
            'This favorite will be deleted. Continue?'
        ),
        _react2.default.createElement(
            _DialogActions2.default,
            null,
            _react2.default.createElement(
                _Button2.default,
                { onClick: onRequestClose, color: 'primary' },
                'Cancel'
            ),
            _react2.default.createElement(
                _Button2.default,
                { onClick: onRequestDelete, color: 'primary' },
                'Delete'
            )
        )
    );
};

exports.default = DeleteDialog;
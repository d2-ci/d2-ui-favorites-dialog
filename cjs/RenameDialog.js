'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

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

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RenameDialog = function (_React$Component) {
    (0, _inherits3.default)(RenameDialog, _React$Component);

    function RenameDialog(props) {
        (0, _classCallCheck3.default)(this, RenameDialog);

        var _this = (0, _possibleConstructorReturn3.default)(this, (RenameDialog.__proto__ || (0, _getPrototypeOf2.default)(RenameDialog)).call(this, props));

        _this.handleSubmit = function (event) {
            event.preventDefault();

            _this.props.renameFavorite(_this.state);
        };

        _this.handleChange = function (field) {
            return function (event) {
                event.preventDefault();

                _this.setState((0, _defineProperty3.default)({}, field, event.target.value));
            };
        };

        _this.state = {
            newName: '',
            newDescription: ''
        };
        return _this;
    }

    (0, _createClass3.default)(RenameDialog, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // reset form to initial value when reopening the rename dialog
            if (nextProps.open === true) {
                this.setState({
                    newName: nextProps.favoriteModel.displayName || '',
                    newDescription: nextProps.favoriteModel.displayDescription || ''
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                open = _props.open,
                toggleRenameDialog = _props.toggleRenameDialog,
                renameFavorite = _props.renameFavorite;


            return _react2.default.createElement(
                _Dialog2.default,
                { open: open, onClose: toggleRenameDialog, maxWidth: 'md' },
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    _react2.default.createElement(
                        _DialogTitle2.default,
                        null,
                        'Rename favorite'
                    ),
                    _react2.default.createElement(
                        _DialogContent2.default,
                        null,
                        _react2.default.createElement(
                            _FormControl2.default,
                            { fullWidth: true },
                            _react2.default.createElement(_TextField2.default, {
                                label: 'Name',
                                value: this.state.newName,
                                required: true,
                                margin: 'normal',
                                onChange: this.handleChange('newName')
                            })
                        ),
                        _react2.default.createElement(
                            _FormControl2.default,
                            { fullWidth: true },
                            _react2.default.createElement(_TextField2.default, {
                                label: 'Description',
                                value: this.state.newDescription,
                                margin: 'normal',
                                multiline: true,
                                rowsMax: 4,
                                onChange: this.handleChange('newDescription')
                            })
                        )
                    ),
                    _react2.default.createElement(
                        _DialogActions2.default,
                        null,
                        _react2.default.createElement(
                            _Button2.default,
                            { onClick: toggleRenameDialog, color: 'primary' },
                            'Cancel'
                        ),
                        _react2.default.createElement(
                            _Button2.default,
                            { type: 'submit', onClick: this.handleSubmit, color: 'primary' },
                            'Rename'
                        )
                    )
                )
            );
        }
    }]);
    return RenameDialog;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        open: state.actions.rename.dialogIsOpen,
        favoriteModel: state.actions.select.favoriteModel
    };
}, { renameFavorite: _actions.renameFavorite, toggleRenameDialog: _actions.toggleRenameDialog })(RenameDialog);
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _EnhancedToolbar = require('./EnhancedToolbar');

var _EnhancedToolbar2 = _interopRequireDefault(_EnhancedToolbar);

var _EnhancedTable = require('./EnhancedTable');

var _EnhancedTable2 = _interopRequireDefault(_EnhancedTable);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Favorites = function (_Component) {
    (0, _inherits3.default)(Favorites, _Component);

    function Favorites() {
        (0, _classCallCheck3.default)(this, Favorites);
        return (0, _possibleConstructorReturn3.default)(this, (Favorites.__proto__ || (0, _getPrototypeOf2.default)(Favorites)).apply(this, arguments));
    }

    (0, _createClass3.default)(Favorites, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // fetch data only the first time the dialog is open
            if (nextProps.open && !nextProps.dataIsLoaded) {
                this.props.fetchData();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                open = _props.open,
                onRequestClose = _props.onRequestClose,
                onFavoriteSelect = _props.onFavoriteSelect;


            var handleOnFavoriteSelect = function handleOnFavoriteSelect(id) {
                onFavoriteSelect(id);
                // XXX should this be in the favoriteSelect callback?
                onRequestClose();
            };

            return _react2.default.createElement(
                _Dialog2.default,
                { open: open, onClose: onRequestClose, disableEnforceFocus: true, maxWidth: 'md' },
                _react2.default.createElement(
                    _DialogContent2.default,
                    null,
                    _react2.default.createElement(_EnhancedToolbar2.default, null),
                    _react2.default.createElement(_EnhancedTable2.default, { onFavoriteSelect: handleOnFavoriteSelect })
                ),
                _react2.default.createElement(
                    _DialogActions2.default,
                    null,
                    _react2.default.createElement(
                        _Button2.default,
                        { onClick: onRequestClose },
                        'Close'
                    )
                )
            );
        }
    }]);
    return Favorites;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        dataIsLoaded: state.data.totalRecords > 0
    };
};

var mapDispatchToProps = {
    fetchData: _actions.fetchData
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Favorites);
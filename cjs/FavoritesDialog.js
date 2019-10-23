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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Favorites = require('./Favorites');

var _Favorites2 = _interopRequireDefault(_Favorites);

var _configureStore = require('./configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore2.default)();

var FavoritesDialog = function (_Component) {
    (0, _inherits3.default)(FavoritesDialog, _Component);

    function FavoritesDialog(props) {
        (0, _classCallCheck3.default)(this, FavoritesDialog);

        // sync type prop with state
        var _this = (0, _possibleConstructorReturn3.default)(this, (FavoritesDialog.__proto__ || (0, _getPrototypeOf2.default)(FavoritesDialog)).call(this, props));

        if (props.type) {
            store.dispatch((0, _actions.setFavoriteType)(props.type));
        }

        if (props.d2) {
            store.dispatch((0, _actions.setD2)(props.d2));
        } else {
            console.error('no d2');
        }
        return _this;
    }

    (0, _createClass3.default)(FavoritesDialog, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                d2: this.props.d2
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                open = _props.open,
                type = _props.type,
                onFavoriteSelect = _props.onFavoriteSelect,
                onRequestClose = _props.onRequestClose;


            return _react2.default.createElement(
                _reactRedux.Provider,
                { store: store },
                _react2.default.createElement(_Favorites2.default, {
                    open: open,
                    type: type,
                    onFavoriteSelect: onFavoriteSelect,
                    onRequestClose: onRequestClose
                })
            );
        }
    }]);
    return FavoritesDialog;
}(_react.Component);

FavoritesDialog.childContextTypes = {
    d2: _propTypes2.default.object.isRequired
};

exports.default = FavoritesDialog;
import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

import { renameFavorite, toggleRenameDialog } from './actions';

var RenameDialog = function (_React$Component) {
    _inherits(RenameDialog, _React$Component);

    function RenameDialog(props) {
        _classCallCheck(this, RenameDialog);

        var _this = _possibleConstructorReturn(this, (RenameDialog.__proto__ || _Object$getPrototypeOf(RenameDialog)).call(this, props));

        _this.handleSubmit = function (event) {
            event.preventDefault();

            _this.props.renameFavorite(_this.state);
        };

        _this.handleChange = function (field) {
            return function (event) {
                event.preventDefault();

                _this.setState(_defineProperty({}, field, event.target.value));
            };
        };

        _this.state = {
            newName: '',
            newDescription: ''
        };
        return _this;
    }

    _createClass(RenameDialog, [{
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


            return React.createElement(
                Dialog,
                { open: open, onClose: toggleRenameDialog, maxWidth: 'md' },
                React.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    React.createElement(
                        DialogTitle,
                        null,
                        'Rename favorite'
                    ),
                    React.createElement(
                        DialogContent,
                        null,
                        React.createElement(
                            FormControl,
                            { fullWidth: true },
                            React.createElement(TextField, {
                                label: 'Name',
                                value: this.state.newName,
                                required: true,
                                margin: 'normal',
                                onChange: this.handleChange('newName')
                            })
                        ),
                        React.createElement(
                            FormControl,
                            { fullWidth: true },
                            React.createElement(TextField, {
                                label: 'Description',
                                value: this.state.newDescription,
                                margin: 'normal',
                                multiline: true,
                                rowsMax: 4,
                                onChange: this.handleChange('newDescription')
                            })
                        )
                    ),
                    React.createElement(
                        DialogActions,
                        null,
                        React.createElement(
                            Button,
                            { onClick: toggleRenameDialog, color: 'primary' },
                            'Cancel'
                        ),
                        React.createElement(
                            Button,
                            { type: 'submit', onClick: this.handleSubmit, color: 'primary' },
                            'Rename'
                        )
                    )
                )
            );
        }
    }]);

    return RenameDialog;
}(React.Component);

export default connect(function (state) {
    return {
        open: state.actions.rename.dialogIsOpen,
        favoriteModel: state.actions.select.favoriteModel
    };
}, { renameFavorite: renameFavorite, toggleRenameDialog: toggleRenameDialog })(RenameDialog);
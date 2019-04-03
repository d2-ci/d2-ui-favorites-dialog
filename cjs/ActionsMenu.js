'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Menu = require('@material-ui/core/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _ListItemIcon = require('@material-ui/core/ListItemIcon');

var _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);

var _ListItemText = require('@material-ui/core/ListItemText');

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _d2UiSharingDialog = require('@dhis2/d2-ui-sharing-dialog');

var _d2UiSharingDialog2 = _interopRequireDefault(_d2UiSharingDialog);

var _Edit = require('@material-ui/icons/Edit');

var _Edit2 = _interopRequireDefault(_Edit);

var _Share = require('@material-ui/icons/Share');

var _Share2 = _interopRequireDefault(_Share);

var _Delete = require('@material-ui/icons/Delete');

var _Delete2 = _interopRequireDefault(_Delete);

var _DeleteDialog = require('./DeleteDialog');

var _DeleteDialog2 = _interopRequireDefault(_DeleteDialog);

var _RenameDialog = require('./RenameDialog');

var _RenameDialog2 = _interopRequireDefault(_RenameDialog);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionsMenu = function ActionsMenu(props, context) {
    var open = props.open,
        anchorEl = props.anchorEl,
        toggleActionsMenu = props.toggleActionsMenu,
        toggleDeleteDialog = props.toggleDeleteDialog,
        deleteDialogIsOpen = props.deleteDialogIsOpen,
        toggleShareDialog = props.toggleShareDialog,
        toggleRenameDialog = props.toggleRenameDialog,
        shareDialogIsOpen = props.shareDialogIsOpen,
        deleteFavorite = props.deleteFavorite,
        selectedFavoriteModel = props.selectedFavoriteModel;


    var deleteActionHandler = function deleteActionHandler() {
        toggleActionsMenu();
        toggleDeleteDialog();
    };

    var renameActionHandler = function renameActionHandler() {
        toggleActionsMenu();
        toggleRenameDialog();
    };

    var shareActionHandler = function shareActionHandler() {
        toggleActionsMenu();
        toggleShareDialog();
    };

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _Menu2.default,
            { open: open, onClose: toggleActionsMenu, anchorEl: anchorEl },
            _react2.default.createElement(
                _MenuItem2.default,
                {
                    onClick: renameActionHandler,
                    disabled: selectedFavoriteModel && !selectedFavoriteModel.access.update
                },
                _react2.default.createElement(
                    _ListItemIcon2.default,
                    null,
                    _react2.default.createElement(_Edit2.default, null)
                ),
                _react2.default.createElement(_ListItemText2.default, { primary: 'Rename' })
            ),
            _react2.default.createElement(
                _MenuItem2.default,
                {
                    onClick: shareActionHandler,
                    disabled: selectedFavoriteModel && !selectedFavoriteModel.access.manage
                },
                _react2.default.createElement(
                    _ListItemIcon2.default,
                    null,
                    _react2.default.createElement(_Share2.default, null)
                ),
                _react2.default.createElement(_ListItemText2.default, { primary: 'Share' })
            ),
            _react2.default.createElement(
                _MenuItem2.default,
                {
                    onClick: deleteActionHandler,
                    disabled: selectedFavoriteModel && !selectedFavoriteModel.access.delete
                },
                _react2.default.createElement(
                    _ListItemIcon2.default,
                    null,
                    _react2.default.createElement(_Delete2.default, null)
                ),
                _react2.default.createElement(_ListItemText2.default, { primary: 'Delete' })
            )
        ),
        _react2.default.createElement(_RenameDialog2.default, null),
        selectedFavoriteModel ? _react2.default.createElement(_d2UiSharingDialog2.default, {
            open: shareDialogIsOpen,
            id: selectedFavoriteModel.id,
            type: selectedFavoriteModel.modelDefinition.name,
            onRequestClose: toggleShareDialog,
            d2: context.d2
        }) : null,
        _react2.default.createElement(_DeleteDialog2.default, {
            open: deleteDialogIsOpen,
            onRequestClose: toggleDeleteDialog,
            onRequestDelete: deleteFavorite
        })
    );
};

ActionsMenu.contextTypes = {
    d2: _propTypes2.default.object.isRequired
};

exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        open: state.actions.menuIsOpen,
        anchorEl: state.actions.menuAnchorEl,
        deleteDialogIsOpen: state.actions.remove.dialogIsOpen,
        shareDialogIsOpen: state.actions.share.dialogIsOpen,
        selectedFavoriteModel: state.actions.select.favoriteModel
    };
}, {
    toggleActionsMenu: _actions.toggleActionsMenu,
    toggleRenameDialog: _actions.toggleRenameDialog,
    toggleDeleteDialog: _actions.toggleDeleteDialog,
    toggleShareDialog: _actions.toggleShareDialog,
    deleteFavorite: _actions.deleteFavorite
})(ActionsMenu);
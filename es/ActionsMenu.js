import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SharingDialog from '@dhis2/d2-ui-sharing-dialog';
import EditIcon from '@material-ui/icons/Edit';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteDialog from './DeleteDialog';
import RenameDialog from './RenameDialog';

import { toggleActionsMenu, toggleDeleteDialog, toggleRenameDialog, toggleShareDialog, deleteFavorite } from './actions';

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

    return React.createElement(
        'div',
        null,
        React.createElement(
            Menu,
            { open: open, onClose: toggleActionsMenu, anchorEl: anchorEl },
            React.createElement(
                MenuItem,
                {
                    onClick: renameActionHandler,
                    disabled: selectedFavoriteModel && !selectedFavoriteModel.access.update
                },
                React.createElement(
                    ListItemIcon,
                    null,
                    React.createElement(EditIcon, null)
                ),
                React.createElement(ListItemText, { primary: 'Rename' })
            ),
            React.createElement(
                MenuItem,
                {
                    onClick: shareActionHandler,
                    disabled: selectedFavoriteModel && !selectedFavoriteModel.access.manage
                },
                React.createElement(
                    ListItemIcon,
                    null,
                    React.createElement(ShareIcon, null)
                ),
                React.createElement(ListItemText, { primary: 'Share' })
            ),
            React.createElement(
                MenuItem,
                {
                    onClick: deleteActionHandler,
                    disabled: selectedFavoriteModel && !selectedFavoriteModel.access.delete
                },
                React.createElement(
                    ListItemIcon,
                    null,
                    React.createElement(DeleteIcon, null)
                ),
                React.createElement(ListItemText, { primary: 'Delete' })
            )
        ),
        React.createElement(RenameDialog, null),
        selectedFavoriteModel ? React.createElement(SharingDialog, {
            open: shareDialogIsOpen,
            id: selectedFavoriteModel.id,
            type: selectedFavoriteModel.modelDefinition.name,
            onRequestClose: toggleShareDialog,
            d2: context.d2
        }) : null,
        React.createElement(DeleteDialog, {
            open: deleteDialogIsOpen,
            onRequestClose: toggleDeleteDialog,
            onRequestDelete: deleteFavorite
        })
    );
};

ActionsMenu.contextTypes = {
    d2: PropTypes.object.isRequired
};

export default connect(function (state) {
    return {
        open: state.actions.menuIsOpen,
        anchorEl: state.actions.menuAnchorEl,
        deleteDialogIsOpen: state.actions.remove.dialogIsOpen,
        shareDialogIsOpen: state.actions.share.dialogIsOpen,
        selectedFavoriteModel: state.actions.select.favoriteModel
    };
}, {
    toggleActionsMenu: toggleActionsMenu,
    toggleRenameDialog: toggleRenameDialog,
    toggleDeleteDialog: toggleDeleteDialog,
    toggleShareDialog: toggleShareDialog,
    deleteFavorite: deleteFavorite
})(ActionsMenu);
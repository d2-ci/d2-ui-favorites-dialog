import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

var DeleteDialog = function DeleteDialog(props) {
    var open = props.open,
        onRequestClose = props.onRequestClose,
        onRequestDelete = props.onRequestDelete;


    return React.createElement(
        Dialog,
        { open: open, onClose: onRequestClose, maxWidth: 'xs' },
        React.createElement(
            DialogTitle,
            null,
            'Delete favorite'
        ),
        React.createElement(
            DialogContent,
            null,
            'This favorite will be deleted. Continue?'
        ),
        React.createElement(
            DialogActions,
            null,
            React.createElement(
                Button,
                { onClick: onRequestClose, color: 'primary' },
                'Cancel'
            ),
            React.createElement(
                Button,
                { onClick: onRequestDelete, color: 'primary' },
                'Delete'
            )
        )
    );
};

export default DeleteDialog;
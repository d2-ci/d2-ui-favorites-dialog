'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sorting = exports.actionTypes = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actionTypes = exports.actionTypes = {
    SET_D2: 'SET_D2',
    SET_FAVORITE_TYPE: 'SET_FAVORITE_TYPE',
    SET_ACTIONS_MENU_ANCHOR_EL: 'SET_ACTIONS_MENU_ANCHOR_EL',
    SET_SORT_ORDER: 'SET_SORT_ORDER',
    SET_SORT_COLUMN: 'SET_SORT_COLUMN',
    SET_DATA: 'SET_DATA',
    SET_SEARCH_VALUE: 'SET_SEARCH_VALUE',
    SET_FILTER_VALUE: 'SET_FILTER_VALUE',
    SET_CREATEDBY_VALUE: 'SET_CREATEDBY_VALUE',
    SET_PAGE: 'SET_PAGE',
    SET_ROWS_PER_PAGE: 'SET_ROWS_PER_PAGE',
    SET_TOTAL_RECORDS: 'SET_TOTAL_RECORDS',
    SET_SELECTED_FAVORITE: 'SET_SELECTED_FAVORITE',
    TOGGLE_LOADING: 'TOGGLE_LOADING',
    TOGGLE_DELETE_DIALOG: 'TOGGLE_DELETE_DIALOG',
    TOGGLE_RENAME_DIALOG: 'TOGGLE_RENAME_DIALOG',
    TOGGLE_SHARE_DIALOG: 'TOGGLE_SHARE_DIALOG',
    TOGGLE_ACTIONS_MENU: 'TOGGLE_ACTIONS_MENU'
};

var initialState = {
    d2: null,
    isLoading: false,
    actions: {
        menuIsOpen: false,
        menuAnchorEl: null,
        remove: {
            dialogIsOpen: false
        },
        rename: {
            dialogIsOpen: false
        },
        share: {
            dialogIsOpen: false
        },
        select: {
            favoriteModel: null
        }
    },
    data: {
        records: [],
        totalRecords: 0,
        filtering: {
            type: 'chart',
            searchValue: '',
            createdByValue: 'all'
        },
        sorting: {
            order: 'asc',
            column: 'displayName'
        },
        pagination: {
            page: 0,
            rowsPerPage: 10
        }
    }
};

var loading = function loading() {
    var isLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.isLoading;
    var action = arguments[1];

    switch (action.type) {
        case actionTypes.TOGGLE_LOADING:
            return !isLoading;
        default:
            return isLoading;
    }
};

var d2 = function d2() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.d2;
    var action = arguments[1];

    switch (action.type) {
        case actionTypes.SET_D2:
            return action.payload;
        default:
            return state;
    }
};

var actions = function actions() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.actions;
    var action = arguments[1];

    switch (action.type) {
        case actionTypes.TOGGLE_ACTIONS_MENU:
            return (0, _extends3.default)({}, state, { menuIsOpen: !state.menuIsOpen });
        case actionTypes.SET_ACTIONS_MENU_ANCHOR_EL:
            return (0, _extends3.default)({}, state, { menuAnchorEl: action.payload });
        case actionTypes.TOGGLE_SHARE_DIALOG:
            return (0, _extends3.default)({}, state, {
                share: (0, _extends3.default)({}, state.share, {
                    dialogIsOpen: !state.share.dialogIsOpen
                })
            });
        case actionTypes.TOGGLE_DELETE_DIALOG:
            return (0, _extends3.default)({}, state, {
                remove: (0, _extends3.default)({}, state.remove, {
                    dialogIsOpen: !state.remove.dialogIsOpen
                })
            });
        case actionTypes.TOGGLE_RENAME_DIALOG:
            return (0, _extends3.default)({}, state, {
                rename: (0, _extends3.default)({}, state.rename, {
                    dialogIsOpen: !state.rename.dialogIsOpen
                })
            });
        case actionTypes.SET_SELECTED_FAVORITE:
            return (0, _extends3.default)({}, state, { select: { favoriteModel: action.payload } });
        default:
            return state;
    }
};

var sorting = exports.sorting = function sorting() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.data.sorting;
    var action = arguments[1];

    switch (action.type) {
        case actionTypes.SET_SORT_ORDER:
            return (0, _extends3.default)({}, state, { order: action.payload });
        case actionTypes.SET_SORT_COLUMN:
            return (0, _extends3.default)({}, state, { column: action.payload });
        default:
            return state;
    }
};

var data = function data() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.data;
    var action = arguments[1];

    switch (action.type) {
        case actionTypes.SET_DATA:
            return (0, _extends3.default)({}, state, { records: action.payload });
        case actionTypes.SET_TOTAL_RECORDS:
            return (0, _extends3.default)({}, state, { totalRecords: action.payload });
        default:
            return state;
    }
};

var pagination = function pagination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.data.pagination;
    var action = arguments[1];

    switch (action.type) {
        case actionTypes.SET_PAGE:
            return (0, _extends3.default)({}, state, { page: action.payload });
        case actionTypes.SET_ROWS_PER_PAGE:
            return (0, _extends3.default)({}, state, { rowsPerPage: action.payload });
        default:
            return state;
    }
};

var filtering = function filtering() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.data.filtering;
    var action = arguments[1];

    switch (action.type) {
        case actionTypes.SET_FAVORITE_TYPE:
            return (0, _extends3.default)({}, state, { type: action.payload });
        case actionTypes.SET_CREATEDBY_VALUE:
            return (0, _extends3.default)({}, state, { createdByValue: action.payload });
        case actionTypes.SET_SEARCH_VALUE:
            return (0, _extends3.default)({}, state, { searchValue: action.payload });
        default:
            return state;
    }
};

exports.default = (0, _redux.combineReducers)({
    loading: loading,
    actions: actions,
    pagination: pagination,
    sorting: sorting,
    data: data,
    filtering: filtering,
    d2: d2
});
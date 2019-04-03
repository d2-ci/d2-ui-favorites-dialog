import _extends from 'babel-runtime/helpers/extends';
import { combineReducers } from 'redux';

export var actionTypes = {
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
            return _extends({}, state, { menuIsOpen: !state.menuIsOpen });
        case actionTypes.SET_ACTIONS_MENU_ANCHOR_EL:
            return _extends({}, state, { menuAnchorEl: action.payload });
        case actionTypes.TOGGLE_SHARE_DIALOG:
            return _extends({}, state, {
                share: _extends({}, state.share, {
                    dialogIsOpen: !state.share.dialogIsOpen
                })
            });
        case actionTypes.TOGGLE_DELETE_DIALOG:
            return _extends({}, state, {
                remove: _extends({}, state.remove, {
                    dialogIsOpen: !state.remove.dialogIsOpen
                })
            });
        case actionTypes.TOGGLE_RENAME_DIALOG:
            return _extends({}, state, {
                rename: _extends({}, state.rename, {
                    dialogIsOpen: !state.rename.dialogIsOpen
                })
            });
        case actionTypes.SET_SELECTED_FAVORITE:
            return _extends({}, state, { select: { favoriteModel: action.payload } });
        default:
            return state;
    }
};

export var sorting = function sorting() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.data.sorting;
    var action = arguments[1];

    switch (action.type) {
        case actionTypes.SET_SORT_ORDER:
            return _extends({}, state, { order: action.payload });
        case actionTypes.SET_SORT_COLUMN:
            return _extends({}, state, { column: action.payload });
        default:
            return state;
    }
};

var data = function data() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.data;
    var action = arguments[1];

    switch (action.type) {
        case actionTypes.SET_DATA:
            return _extends({}, state, { records: action.payload });
        case actionTypes.SET_TOTAL_RECORDS:
            return _extends({}, state, { totalRecords: action.payload });
        default:
            return state;
    }
};

var pagination = function pagination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.data.pagination;
    var action = arguments[1];

    switch (action.type) {
        case actionTypes.SET_PAGE:
            return _extends({}, state, { page: action.payload });
        case actionTypes.SET_ROWS_PER_PAGE:
            return _extends({}, state, { rowsPerPage: action.payload });
        default:
            return state;
    }
};

var filtering = function filtering() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.data.filtering;
    var action = arguments[1];

    switch (action.type) {
        case actionTypes.SET_FAVORITE_TYPE:
            return _extends({}, state, { type: action.payload });
        case actionTypes.SET_CREATEDBY_VALUE:
            return _extends({}, state, { createdByValue: action.payload });
        case actionTypes.SET_SEARCH_VALUE:
            return _extends({}, state, { searchValue: action.payload });
        default:
            return state;
    }
};

export default combineReducers({
    loading: loading,
    actions: actions,
    pagination: pagination,
    sorting: sorting,
    data: data,
    filtering: filtering,
    d2: d2
});
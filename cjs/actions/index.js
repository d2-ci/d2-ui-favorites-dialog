'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.changePage = exports.setRowsPerPage = exports.setPage = exports.fetchData = exports.sortData = exports.filterData = exports.searchData = exports.setCreatedByValue = exports.setTotalRecords = exports.setSearchValue = exports.setSortColumn = exports.setSortOrder = exports.setData = exports.setFavoriteType = exports.toggleShareDialog = exports.setD2 = exports.renameFavorite = exports.toggleRenameDialog = exports.deleteFavorite = exports.toggleDeleteDialog = exports.selectFavorite = exports.setActionsMenuAnchorEl = exports.toggleActionsMenu = exports.toggleLoading = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _reducers = require('../reducers');

var _loglevel = require('loglevel');

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toggleLoading = exports.toggleLoading = function toggleLoading() {
    return { type: _reducers.actionTypes.TOGGLE_LOADING };
};

// actions context menu
var toggleActionsMenu = exports.toggleActionsMenu = function toggleActionsMenu() {
    return {
        type: _reducers.actionTypes.TOGGLE_ACTIONS_MENU
    };
};

var setActionsMenuAnchorEl = exports.setActionsMenuAnchorEl = function setActionsMenuAnchorEl(el) {
    return {
        type: _reducers.actionTypes.SET_ACTIONS_MENU_ANCHOR_EL,
        payload: el
    };
};

// select
var selectFavorite = exports.selectFavorite = function selectFavorite(model) {
    return {
        type: _reducers.actionTypes.SET_SELECTED_FAVORITE,
        payload: model
    };
};

// delete
var toggleDeleteDialog = exports.toggleDeleteDialog = function toggleDeleteDialog() {
    return {
        type: _reducers.actionTypes.TOGGLE_DELETE_DIALOG
    };
};

var deleteFavorite = exports.deleteFavorite = function deleteFavorite(event) {
    return function (dispatch, getState) {
        var state = getState();
        var selectedFavorite = state.actions.select.favoriteModel;

        if (selectedFavorite) {
            selectedFavorite.delete().then(function () {
                dispatch(toggleDeleteDialog());
                dispatch(fetchData());
            }).catch(function (error) {
                return _loglevel2.default.error('favorites: delete error', error);
            });
        }
    };
};

// rename
var toggleRenameDialog = exports.toggleRenameDialog = function toggleRenameDialog() {
    return {
        type: _reducers.actionTypes.TOGGLE_RENAME_DIALOG
    };
};

var renameFavorite = exports.renameFavorite = function renameFavorite(form) {
    return function (dispatch, getState) {
        var state = getState();
        var favoriteModel = state.actions.select.favoriteModel;
        var newName = form.newName;
        var newDescription = form.newDescription;
        var api = void 0;

        if (favoriteModel) {
            api = state.d2.Api.getApi();

            // the whole model is required for validation
            state.d2.models[state.filtering.type].get(favoriteModel.id).then(function (model) {
                model.name = newName;
                model.description = newDescription;

                model.validate().then(function (validationStatus) {
                    if (validationStatus.status === true) {
                        var payload = {
                            // can be empty
                            description: newDescription
                        };

                        if (newName) {
                            payload.name = newName;
                        }

                        if (payload.name) {
                            api.request('PATCH', model.href, (0, _stringify2.default)(payload)).then(function (response) {
                                dispatch(toggleRenameDialog());
                                // refresh data
                                dispatch(fetchData());
                            }).catch(function (error) {
                                _loglevel2.default.error('favorites: rename error', error);
                                dispatch(toggleRenameDialog());
                            });
                        }
                    }
                });
            }).catch(function (error) {
                _loglevel2.default.error('favorites: favorite (' + favoriteModel.id + ') not found (' + error + ')');
            });
        }
    };
};

// d2
var setD2 = exports.setD2 = function setD2(d2) {
    return {
        type: _reducers.actionTypes.SET_D2,
        payload: d2
    };
};

// share
var toggleShareDialog = exports.toggleShareDialog = function toggleShareDialog() {
    return {
        type: _reducers.actionTypes.TOGGLE_SHARE_DIALOG
    };
};
var setFavoriteType = exports.setFavoriteType = function setFavoriteType(type) {
    return {
        type: _reducers.actionTypes.SET_FAVORITE_TYPE,
        payload: type
    };
};

// data
var setData = exports.setData = function setData(data) {
    return {
        type: _reducers.actionTypes.SET_DATA,
        payload: data
    };
};
var setSortOrder = exports.setSortOrder = function setSortOrder(order) {
    return {
        type: _reducers.actionTypes.SET_SORT_ORDER,
        payload: order
    };
};
var setSortColumn = exports.setSortColumn = function setSortColumn(column) {
    return {
        type: _reducers.actionTypes.SET_SORT_COLUMN,
        payload: column
    };
};
var setSearchValue = exports.setSearchValue = function setSearchValue(search) {
    return {
        type: _reducers.actionTypes.SET_SEARCH_VALUE,
        payload: search
    };
};
var setTotalRecords = exports.setTotalRecords = function setTotalRecords(total) {
    return {
        type: _reducers.actionTypes.SET_TOTAL_RECORDS,
        payload: total
    };
};
var setCreatedByValue = exports.setCreatedByValue = function setCreatedByValue(filter) {
    return {
        type: _reducers.actionTypes.SET_CREATEDBY_VALUE,
        payload: filter
    };
};
var searchData = exports.searchData = function searchData(event) {
    var searchValue = event.target.value;

    return function (dispatch, getState) {
        dispatch(setSearchValue(searchValue));
        dispatch(fetchData());
    };
};
var filterData = exports.filterData = function filterData(event) {
    var createdByValue = event.target.value;

    return function (dispatch, getState) {
        dispatch(setCreatedByValue(createdByValue));
        dispatch(fetchData());
    };
};
var sortData = exports.sortData = function sortData(event, column) {
    return function (dispatch, getState) {
        var state = getState();

        var order = 'desc';

        if (state.sorting.column !== column) {
            order = state.sorting.order;
        } else if (state.sorting.order === 'desc') {
            order = 'asc';
        }

        var data = order === 'desc' ? state.data.records.sort(function (a, b) {
            return b[column] < a[column] ? -1 : 1;
        }) : state.data.records.sort(function (a, b) {
            return a[column] < b[column] ? -1 : 1;
        });

        dispatch(setSortOrder(order));
        dispatch(setSortColumn(column));
        dispatch(setData(data));
    };
};
var fetchData = exports.fetchData = function fetchData() {
    return function (dispatch, getState) {
        var state = getState();

        dispatch(toggleLoading());

        var favoriteModel = state.d2.models[state.filtering.type];

        if (state.filtering.createdByValue) {
            var currentUserId = state.d2.currentUser.id;

            switch (state.filtering.createdByValue) {
                case 'byme':
                    favoriteModel = favoriteModel.filter().on('user.id').equals(currentUserId);
                    break;
                case 'byothers':
                    favoriteModel = favoriteModel.filter().on('user.id').notEqual(currentUserId);
                    break;
                case 'all':
                default:
                    break;
            }
        }

        if (state.filtering.searchValue) {
            favoriteModel = favoriteModel.filter().on('displayName').ilike(state.filtering.searchValue);
        }

        favoriteModel.list({
            fields: 'id,displayName,title,displayDescription,created,lastUpdated,user,access,href',
            order: 'name:asc',
            pageSize: state.pagination.rowsPerPage,
            page: state.pagination.page + 1
        }).then(function (collection) {
            dispatch(setTotalRecords(collection.pager.total));
            dispatch(setData(collection.toArray()));
            dispatch(toggleLoading());
        }).catch(function (error) {
            return _loglevel2.default.error('favorites: fetch error', error);
        });
    };
};

// pagination
var setPage = exports.setPage = function setPage(page) {
    return {
        type: _reducers.actionTypes.SET_PAGE,
        payload: page
    };
};
var setRowsPerPage = exports.setRowsPerPage = function setRowsPerPage(event) {
    return {
        type: _reducers.actionTypes.SET_ROWS_PER_PAGE,
        payload: event.target.value
    };
};
var changePage = exports.changePage = function changePage(event, page) {
    return function (dispatch, getState) {
        dispatch(setPage(page));
        dispatch(fetchData());
    };
};
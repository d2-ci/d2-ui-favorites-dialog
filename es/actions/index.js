import _JSON$stringify from 'babel-runtime/core-js/json/stringify';
import { actionTypes } from '../reducers';
import log from 'loglevel';

export var toggleLoading = function toggleLoading() {
    return { type: actionTypes.TOGGLE_LOADING };
};

// actions context menu
export var toggleActionsMenu = function toggleActionsMenu() {
    return {
        type: actionTypes.TOGGLE_ACTIONS_MENU
    };
};

export var setActionsMenuAnchorEl = function setActionsMenuAnchorEl(el) {
    return {
        type: actionTypes.SET_ACTIONS_MENU_ANCHOR_EL,
        payload: el
    };
};

// select
export var selectFavorite = function selectFavorite(model) {
    return {
        type: actionTypes.SET_SELECTED_FAVORITE,
        payload: model
    };
};

// delete
export var toggleDeleteDialog = function toggleDeleteDialog() {
    return {
        type: actionTypes.TOGGLE_DELETE_DIALOG
    };
};

export var deleteFavorite = function deleteFavorite(event) {
    return function (dispatch, getState) {
        var state = getState();
        var selectedFavorite = state.actions.select.favoriteModel;

        if (selectedFavorite) {
            selectedFavorite.delete().then(function () {
                dispatch(toggleDeleteDialog());
                dispatch(fetchData());
            }).catch(function (error) {
                return log.error('favorites: delete error', error);
            });
        }
    };
};

// rename
export var toggleRenameDialog = function toggleRenameDialog() {
    return {
        type: actionTypes.TOGGLE_RENAME_DIALOG
    };
};

export var renameFavorite = function renameFavorite(form) {
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
                            api.request('PATCH', model.href, _JSON$stringify(payload)).then(function (response) {
                                dispatch(toggleRenameDialog());
                                // refresh data
                                dispatch(fetchData());
                            }).catch(function (error) {
                                log.error('favorites: rename error', error);
                                dispatch(toggleRenameDialog());
                            });
                        }
                    }
                });
            }).catch(function (error) {
                log.error('favorites: favorite (' + favoriteModel.id + ') not found (' + error + ')');
            });
        }
    };
};

// d2
export var setD2 = function setD2(d2) {
    return {
        type: actionTypes.SET_D2,
        payload: d2
    };
};

// share
export var toggleShareDialog = function toggleShareDialog() {
    return {
        type: actionTypes.TOGGLE_SHARE_DIALOG
    };
};
export var setFavoriteType = function setFavoriteType(type) {
    return {
        type: actionTypes.SET_FAVORITE_TYPE,
        payload: type
    };
};

// data
export var setData = function setData(data) {
    return {
        type: actionTypes.SET_DATA,
        payload: data
    };
};
export var setSortOrder = function setSortOrder(order) {
    return {
        type: actionTypes.SET_SORT_ORDER,
        payload: order
    };
};
export var setSortColumn = function setSortColumn(column) {
    return {
        type: actionTypes.SET_SORT_COLUMN,
        payload: column
    };
};
export var setSearchValue = function setSearchValue(search) {
    return {
        type: actionTypes.SET_SEARCH_VALUE,
        payload: search
    };
};
export var setTotalRecords = function setTotalRecords(total) {
    return {
        type: actionTypes.SET_TOTAL_RECORDS,
        payload: total
    };
};
export var setCreatedByValue = function setCreatedByValue(filter) {
    return {
        type: actionTypes.SET_CREATEDBY_VALUE,
        payload: filter
    };
};
export var searchData = function searchData(event) {
    var searchValue = event.target.value;

    return function (dispatch, getState) {
        dispatch(setSearchValue(searchValue));
        dispatch(fetchData());
    };
};
export var filterData = function filterData(event) {
    var createdByValue = event.target.value;

    return function (dispatch, getState) {
        dispatch(setCreatedByValue(createdByValue));
        dispatch(fetchData());
    };
};
export var sortData = function sortData(event, column) {
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
export var fetchData = function fetchData() {
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
            return log.error('favorites: fetch error', error);
        });
    };
};

// pagination
export var setPage = function setPage(page) {
    return {
        type: actionTypes.SET_PAGE,
        payload: page
    };
};
export var setRowsPerPage = function setRowsPerPage(event) {
    return {
        type: actionTypes.SET_ROWS_PER_PAGE,
        payload: event.target.value
    };
};
export var changePage = function changePage(event, page) {
    return function (dispatch, getState) {
        dispatch(setPage(page));
        dispatch(fetchData());
    };
};
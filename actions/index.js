import { actionTypes } from '../reducers';
import log from 'loglevel';

export var toggleLoading = function toggleLoading() {
    return { type: actionTypes.TOGGLE_LOADING };
};

// select
export var selectFavorite = function selectFavorite(model) {
    return {
        type: actionTypes.SET_SELECTED_FAVORITE,
        payload: model
    };
};

// d2
export var setD2 = function setD2(d2) {
    return {
        type: actionTypes.SET_D2,
        payload: d2
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
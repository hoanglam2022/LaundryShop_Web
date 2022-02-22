import {
    PRODUCT_FETCH,
    PRODUCT_FETCH_LOADING,
    PRODUCT_CREATE,
    PRODUCT_CREATE_LOADING,
    PRODUCT_DETAIL,
    PRODUCT_DETAIL_LOADING,
    PRODUCT_UPDATE,
    PRODUCT_UPDATE_LOADING,
    PRODUCT_REMOVE,
    PRODUCT_REMOVE_LOADING,
} from "./constants";
import {apiGet, apiPost, CODE_SUCCESS, fetchPaginate} from "../../../common/crud/actions";
import {pushMessageError, pushMessageSuccess} from "../../../layouts";

export function fetchTableProduct(params) {
    return dispatch => {
        dispatch(fetchActionLoading())
        dispatch(fetchPaginate('admin/products/', params, fetchAction))
    };
}

export function fetchActionLoading() {
    return {
        type   : PRODUCT_FETCH_LOADING,
        payload: {}
    }
}

export function fetchAction(response) {
    return {
        type   : PRODUCT_FETCH,
        payload: response
    };
}

export function createProduct(params) {
    return dispatch => {
        dispatch(createActionLoading())
        dispatch(apiPost('admin/products/', params, {}, createAction))
    };
}

export function createActionLoading() {
    return {
        type   : PRODUCT_CREATE_LOADING,
        payload: null
    }
}

export function createAction(response) {
    return {
        type   : PRODUCT_CREATE,
        payload: response
    };
}

export function detailProduct(id) {
    return dispatch => {
        dispatch(detailActionLoading())
        dispatch(apiGet('admin/products/' + id, {}, {}, detailAction))
    };
}

export function detailAction(response) {
    return {
        type   : PRODUCT_DETAIL,
        payload: response
    };
}

export function detailActionLoading() {
    return {
        type   : PRODUCT_DETAIL_LOADING,
        payload: null
    };
}

export function updateProduct(id, params) {
    return dispatch => {
        dispatch(updateActionLoading())
        dispatch(apiPost('admin/products/' + id, params, {}, updateAction))
    };
}

export function updateAction(response) {
    console.log(response)
    if (response.code === CODE_SUCCESS){
        pushMessageSuccess();
    }
    return {
        type   : PRODUCT_UPDATE,
        payload: response
    };
}

export function updateActionLoading() {
    return {
        type   : PRODUCT_UPDATE_LOADING,
        payload: null
    };
}

export function removeAction(response) {
    return {
        type   : PRODUCT_REMOVE,
        payload: response
    };
}
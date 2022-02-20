import {
    PRODUCT_FETCH,
    PRODUCT_FETCH_LOADING,
    PRODUCT_CREATE,
    PRODUCT_CREATE_LOADING,
    PRODUCT_DETAIL,
    PRODUCT_DETAIL_LOADING,
    PRODUCT_UPDATE,
    PRODUCT_UPDATE_LOADING,
    PRODUCT_DELETE,
    PRODUCT_DELETE_LOADING,
} from "./constants";
import {apiPost, fetchPaginate} from "../../../common/crud/actions";

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

export function detailAction(response) {
    return {
        type   : PRODUCT_DETAIL,
        payload: response
    };
}

export function detailLoadingAction(response) {
    return {
        type   : PRODUCT_DETAIL_LOADING,
        payload: null
    };
}


export function updateAction(response) {
    return {
        type   : PRODUCT_UPDATE,
        payload: response
    };
}

export function deleteAction(response) {
    return {
        type   : PRODUCT_DELETE,
        payload: response
    };
}
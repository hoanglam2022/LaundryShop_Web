import {
    PRODUCT_FETCH,
    PRODUCT_FETCH_LOADING,
    PRODUCT_CREATE,
    PRODUCT_CREATE_LOADING,
    PRODUCT_FIND,
    PRODUCT_FIND_LOADING,
    PRODUCT_UPDATE,
    PRODUCT_UPDATE_LOADING,
    PRODUCT_DELETE,
    PRODUCT_DELETE_LOADING,
} from "./constants";
import {fetchPaginate} from "../../../common/crud/actions";

export function fetchTableProduct(params){
    return dispatch => {
        dispatch(fetchActionLoading())
        dispatch(fetchPaginate('admin/products/', params, fetchAction))
    };
}

export function fetchActionLoading() {
    return {
        type   : PRODUCT_FETCH_LOADING,
        payload: null
    }
}

export function fetchAction(response) {
    return {
        type   : PRODUCT_FETCH,
        payload: response.payload
    };
}

export function findAction(response) {
    return {
        type   : PRODUCT_FIND,
        payload: response.payload
    };
}

export function updateAction(response) {
    return {
        type   : PRODUCT_UPDATE,
        payload: response.payload
    };
}

export function deleteAction(response) {
    return {
        type   : PRODUCT_DELETE,
        payload: response.payload
    };
}
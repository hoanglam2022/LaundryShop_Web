import initialState from "./initialState";
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

export function reducer(state = initialState, action) {
    let payload = action.payload;
    switch (action.type) {
        case PRODUCT_FETCH:
            let data = payload.data !== undefined ? payload.data : [];
            return {
                ...state,
                list: {
                    data      : data.data,
                    pagination: {
                        current : payload.current_page,
                        pageSize: payload.per_page,
                        total   : payload.total,
                    },
                    loading   : false,
                },
            };
        case PRODUCT_FETCH_LOADING:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: true,
                }
            }
        case PRODUCT_CREATE:
            return {
                ...state,
                create: {
                    ...state.create,
                    loading: false,
                    errors : payload.errors,
                    data   : payload.data,
                }
            };
        case PRODUCT_CREATE_LOADING:
            return {
                ...state,
                create: {
                    ...state.create,
                    loading: true,
                }
            }
        case PRODUCT_DETAIL:
            return {
                ...state,
                detail: {
                    ...state.detail,
                    loading: false,
                    errors : payload.errors,
                    data   : payload.data,
                }
            };
        case PRODUCT_DETAIL_LOADING:
            return {
                ...state,
                detail: {
                    ...state.detail,
                    loading: true,
                }
            }
        case PRODUCT_UPDATE:
            return {
                ...state,
                update: {
                    ...state.update,
                    loading: false,
                    errors : payload.errors,
                    data   : payload.data,
                }
            };
        case PRODUCT_UPDATE_LOADING:
            return {
                ...state,
                update: {
                    ...state.update,
                    loading: true,
                }
            }
        case PRODUCT_REMOVE:
            return {
                ...state,
                delete: {
                    ...state.remove,
                    loading: false,
                    errors : payload.errors,
                    data   : payload.data,
                }
            };
        case PRODUCT_REMOVE_LOADING:
            return {
                ...state,
                delete: {
                    ...state.remove,
                    loading: true,
                }
            }
        default:
            return state
    }
}
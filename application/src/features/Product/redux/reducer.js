import initialState from "./initialState";
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

export function reducer(state = initialState, action) {
    let payload = action.payload;
    switch (action.type) {
        case PRODUCT_FETCH:
            return {
                ...state,
                list: {
                    data      : payload.data,
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
                    ...state.table,
                    loading: true,
                }
            }
        case PRODUCT_CREATE:
            return {
                ...state,
                create: {

                },
            };
        case PRODUCT_CREATE_LOADING:
            return {
                ...state,
                table: {
                    ...state.table,
                    loading: true,
                }
            }
        case PRODUCT_FIND:
            return {
                ...state,
                product: payload
            };
        case PRODUCT_FIND_LOADING:
            return {
                ...state,
                product: {
                    ...state.table,
                    loading: true,
                }
            }
        case PRODUCT_UPDATE:
            return {
                ...state,
                product: payload
            };
        case PRODUCT_UPDATE_LOADING:
            return {
                ...state,
                product: payload
            };
        case PRODUCT_DELETE:
            return {
                ...state,
                product: payload
            };
        case PRODUCT_DELETE_LOADING:
            return {
                ...state,
                product: payload
            };
        default:
            return state;
    }
}
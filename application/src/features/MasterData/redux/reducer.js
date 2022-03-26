import initialState from "./initialState";
import {
    MASTER_DATA_CUSTOMERS,
    MASTER_DATA_CUSTOMERS_LOADING,
    MASTER_DATA_SERVICES,
    MASTER_DATA_SERVICES_LOADING,
} from "./constants";

export function reducer(state = initialState, action) {
    let payload = action.payload;
    let data    = payload.data !== undefined ? payload.data : [];
    switch (action.type) {
        case MASTER_DATA_CUSTOMERS:
            return {
                ...state,
                customers: {
                    data   : data.data,
                    loading: false,
                },
            };
        case MASTER_DATA_CUSTOMERS_LOADING:
            return {
                ...state,
                customers: {
                    loading: true,
                },
            }
        case MASTER_DATA_SERVICES:
            return {
                ...state,
                services: {
                    data   : data.data,
                    loading: false,
                },
            };
        case MASTER_DATA_SERVICES_LOADING:
            return {
                ...state,
                services: {
                    loading: true,
                },
            };
        default:
            return state
    }
}
import initialState from "./initialState";
import {
    SET_TOKEN_ACTION,
    CLEAR_TOKEN_ACTION,
    ARG_TOKEN, LOGIN_LOADING
} from "./constants";

export function reducer(state = initialState, action) {
    const stateLocal = loadStateFromLocal();
    switch (action.type) {
        case LOGIN_LOADING:
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: true
                }
            };
        case SET_TOKEN_ACTION:
        case CLEAR_TOKEN_ACTION:
            return {
                ...state,
                ...stateLocal,
                login: {
                    loading: false
                }
            };
        default:
            return {
                ...state,
                ...stateLocal,
            };
    }
}

export function loadStateFromLocal() {
    let stateFromLocal;
    try {
        // Load data from local
        let data = JSON.parse(localStorage.getItem(ARG_TOKEN));

        // Load data auth
        const {payload, meta, role} = data

        stateFromLocal = {
            user: {
                username    : payload.username,
                first_name  : payload.first_name,
                last_name   : payload.last_name,
                email       : payload.email,
                phone_number: payload.phone_number,
                created_user: payload.created_user,
            },
            meta: {
                token: meta.token
            },
            role: role
        }

    } catch (e) {
        localStorage.removeItem(ARG_TOKEN)
        stateFromLocal = {
            user: {
                username    : null,
                first_name  : null,
                last_name   : null,
                email       : null,
                phone_number: null,
                created_user: null,
            },
            meta: {
                token: null
            },
            role: null
        }
    }
    return stateFromLocal;
}
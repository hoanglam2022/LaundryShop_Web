import initialState from "./initialState";
import {

} from "./constants";

export function reducer(state = initialState, action) {
    let payload = action.payload;
    switch (action.type) {
        default:
            return state
    }
}
import types from "../actions/types";

const DEFAULT_STATE = { location: null };

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.LOCATION:
            return { ...state, location: action.location }
        default:
            return state;
    }
}
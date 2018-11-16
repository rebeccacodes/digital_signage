import types from "../actions/types";

const DEFAULT_STATE = { location: null };

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.LOCATION:
            return { ...state, location: 'need to figure out where to get this from' }
        default:
            return state;
    }
}
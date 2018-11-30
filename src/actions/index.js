//this file holds all of the action creators

import types from './types';

export function location() {

    return {
        type: types.LOCATION,
        location
    }
}
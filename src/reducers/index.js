//this file combines all of our reducers into a single root reducer

import { combineReducers } from 'redux';
import locationReducer from './location_reducer';

export default combineReducers(
    {
        location: locationReducer
    }
);
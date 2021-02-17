import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    fans: [],
    fansCompare: [],
    // conditions: null,
    loading: false, 
    success: false, 
    fail: false 
};

const fetchFansStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchFansSuccess = (state, action) => {
    return updateObject(state, {
        fans: action.fans,
        loading: false, 
        success: true
    });
};

const fetchFansFail = (state, action) => {
    return updateObject(state, { 
        loading: false,
        fail: true 
    });
};

const clearFans = (state, action) => {
    return updateObject(state, { 
        fans: [],
        loading: false, 
        success: false, 
        fail: false
    });
};

const findFansSuccess = (state, action) => {
    return updateObject(state, {
        fans: action.fans,
        loading: false, 
        success: true
    });
};

const compareFans = (state, action) => {
    // let tmpFans = [...state.fansCompare, action.fan];

    return updateObject(state, {
        fansCompare: [...state.fansCompare, action.fan]
    });
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FANS_START: return fetchFansStart(state, action);
        case actionTypes.FETCH_FANS_SUCCESS: return fetchFansSuccess(state, action);
        case actionTypes.FETCH_FANS_FAIL: return fetchFansFail(state, action);
        case actionTypes.CLEAR_FANS: return clearFans(state, action);
        case actionTypes.FIND_FANS_SUCCESS: return findFansSuccess(state, action);
        case actionTypes.COMPARE_FANS: return compareFans(state, action);
        // case actionTypes.FIND_FANS_CONDITIONS: return findFansCondidtions(state, action);
        default:
            return state;
    }
};

export default reducer;
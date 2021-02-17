import axios from 'axios';

import * as actionTypes from './actionTypes';

export const fetchFansSuccess = ( fans ) => {
    return {
        type: actionTypes.FETCH_FANS_SUCCESS,
        fans: fans
    };
};

export const fetchFansFail = ( error ) => {
    return {
        type: actionTypes.FETCH_FANS_FAIL,
        error: error
    };
};

export const fetchFansStart = () => {
    return {
        type: actionTypes.FETCH_FANS_START
    };
};

export const clearFans = () => {
    return {
        type: actionTypes.CLEAR_FANS
    };
};

export const findFansSuccess = ( fans ) => {
    return {
        type: actionTypes.FIND_FANS_SUCCESS,
        fans: fans
    };
};

export const storeComparedFan = ( fan ) => {
    return {
        type: actionTypes.COMPARE_FANS,
        fan: fan
    };
};

export const fetchFans = (token) => {
    return dispatch => {
        dispatch(fetchFansStart());
        let url = 'http://localhost:8080/fans/list';
        axios.get(url, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then( response => {
                console.log("Get response from server", response);
                const fetchedFans = [];
                for ( let key in response.data ) {
                    fetchedFans.push( {
                        ...response.data[key],
                        id: key
                    } );
                }
                dispatch(fetchFansSuccess(fetchedFans));
            } )
            .catch( err => {
                dispatch(fetchFansFail(err));
            } );
    };
};

export const findFans = (token, conditions) => {
    return dispatch => {
        // dispatch(fetchFansStart());
        console.log("findFans: ", conditions);
        let url = 'http://localhost:8080/fans/search';
        const queryParams = '?useType=' + conditions['use-type'] + 
        '&application=' + conditions['application'] +
        '&mountLocation=' + conditions['mounting-location'] +
        '&accessories=' + conditions['accessories'] + 
        '&modelYearMin=' + conditions['model-year-min'] + 
        '&modelYearMax=' + conditions['model-year-max'] + 
        '&airflowMin=' + conditions['airflow-min'] + 
        '&airflowMax=' + conditions['airflow-max'] + 
        '&powerMaxMin=' + conditions['power-max-min'] + 
        '&powerMaxMax=' + conditions['power-max-max'] + 
        '&soundMin=' + conditions['sound-min'] + 
        '&soundMax=' + conditions['sound-max'] + 
        '&sweepDiameterMin=' + conditions['sweep-diameter-min'] + 
        '&sweepDiameterMax=' + conditions['sweep-diameter-max'] + 
        '&heightMaxMin=' + conditions['height-max-min'] + 
        '&heightMaxMax=' + conditions['height-max-max'] + 
        '&manufacturer=' + conditions['manufacturer'];

        console.log("queryParams: ", queryParams);
        
        axios.get(url + queryParams, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then( response => {
                console.log("Get response from server", response);
                const foundFans = [];
                for ( let key in response.data ) {
                    foundFans.push( {
                        ...response.data[key],
                        id: key
                    } );
                }
                dispatch(findFansSuccess(foundFans));
            } )
            .catch( err => {
                dispatch(fetchFansFail(err));
            } );
    };
};

export const compareFans = (fan) => {
    return dispatch => {
        console.log("compareFans: ", fan);
        dispatch(storeComparedFan(fan));
    };
};
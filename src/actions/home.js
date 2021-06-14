import axios from 'axios';

export const RECEIVED_HOME_DATA_SUCCESS = 'RECEIVED_HOME_DATA_SUCCESS';
export const RECEIVING_HOME_DATA = 'RECEIVING_HOME_DATA';

export function receiveDataRequestLunar() {
    return (dispatch) => {
        console.log('BEGINNING ACTION LUNAR REQUEST')
        // We check if app runs with backend mode
        dispatch(receivingData());
        axios.get('http://localhost:5000/api/assets/home').then(res => {
            dispatch(receiveDataSuccessLunar(res.data));
        })
    }
}

export function receiveDataSuccessLunar(payload) {
    return {
        type: RECEIVED_HOME_DATA_SUCCESS,
        payload
    }
}

export function receivingData() {
    return {
        type: RECEIVING_HOME_DATA
    }
}





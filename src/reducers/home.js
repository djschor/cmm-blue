import { RECEIVED_HOME_DATA_SUCCESS, RECEIVING_HOME_DATA } from '../actions/home';


const homeState = {
    marketBreakdown: {},
    assetList: [],
    btcMarketCap: {},
    topTenMarketCap: [],
    isReceiving: false
};

export default function lunarReducer(state = homeState, action) {
    switch (action.type) {
        case RECEIVED_HOME_DATA_SUCCESS:
            console.log('LUNAR REDUCER!\n', action.payload)
            const { marketBreakdown, assetList, btcMarketCap, topTenMarketCap} = action.payload;
            console.log('payloaded')
            return Object.assign({}, state, {
                marketBreakdown,
                assetList,
                btcMarketCap,
                topTenMarketCap,
                isReceiving: false
            });
        case RECEIVING_HOME_DATA:
            return Object.assign({}, state, {
                isReceiving: true
            });
        default:
            console.log('default state return')
            return state;
    }
}

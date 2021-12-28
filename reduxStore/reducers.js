import { SET_BTC_DATA, SET_ETH_DATA, SET_BNB_DATA } from './actions';

let initialState = {
   btcData:'',
   ethData:{},
   bnbData:{},
}

function useTheReducer(state = initialState, action){
    switch (action.type) {
        case SET_BTC_DATA:
            return {...state, btcData: action.payload}

        case SET_ETH_DATA:
            return {...state, ethData: action.payload}
    
        case SET_BNB_DATA:
            return {...state, bnbData: action.payload}

        default:
            return state;
    }
}

export default useTheReducer;
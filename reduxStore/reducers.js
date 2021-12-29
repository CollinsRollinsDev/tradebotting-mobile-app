import {
  SET_BTC_DATA,
  SET_ETH_DATA,
  SET_BNB_DATA,
  SELECTED_TRADE,
  HISTRIC_DATA_FOR_TRADE,
  SELECTED_INTERVAL_TD,
  SELECTED_CURRENCY_TD,
} from "./actions";

let initialState = {
  btcData: "",
  ethData: "",
  bnbData: "",
  selectedTrade: "",
  historicDataForTrade: "",
  selectedInterval: "",
  selectedCurrency: "",
};

function useTheReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BTC_DATA:
      return { ...state, btcData: action.payload };

    case SET_ETH_DATA:
      return { ...state, ethData: action.payload };

    case SET_BNB_DATA:
      return { ...state, bnbData: action.payload };

    case SELECTED_TRADE:
      return { ...state, selectedTrade: action.payload };

    case HISTRIC_DATA_FOR_TRADE:
      return { ...state, historicDataForTrade: action.payload };

    case SELECTED_INTERVAL_TD:
      return { ...state, selectedInterval: action.payload };

    case SELECTED_CURRENCY_TD:
      return { ...state, selectedCurrency: action.payload };

    default:
      return state;
  }
}

export default useTheReducer;

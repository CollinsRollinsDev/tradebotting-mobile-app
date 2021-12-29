export const SET_BTC_DATA = "SET_BTC_DATA";
export const SET_ETH_DATA = "SET_ETH_DATA";
export const SET_BNB_DATA = "SET_BNB_DATA";
export const SELECTED_TRADE = "SELECTED_TRADE";
export const HISTRIC_DATA_FOR_TRADE = "HISTRIC_DATA_FOR_TRADE";
export const SELECTED_INTERVAL_TD = "SELECTED_INTERVAL_TD";
export const SELECTED_CURRENCY_TD = "SELECTED_CURRENCY_TD";

export let setBtcData = (payload) => (dispatch) => {
  dispatch({
    type: SET_BTC_DATA,
    payload: payload,
  });
};

export let setEthData = (payload) => (dispatch) => {
  dispatch({
    type: SET_ETH_DATA,
    payload: payload,
  });
};

export let setBnbData = (payload) => (dispatch) => {
  dispatch({
    type: SET_BNB_DATA,
    payload: payload,
  });
};

export let updateSelectedTrade = (payload) => (dispatch) => {
  dispatch({
    type: SELECTED_TRADE,
    payload: payload,
  });
};

export let updateSelectedIntervalTD = (payload) => (dispatch) => {
  dispatch({
    type: SELECTED_INTERVAL_TD,
    payload: payload,
  });
};

export let updateHistoricDateForTrade = (payload) => (dispatch) => {
  dispatch({
    type: HISTRIC_DATA_FOR_TRADE,
    payload: payload,
  });
};

export let updateSelectedCurrencyTD = (payload) => (dispatch) => {
  dispatch({
    type: SELECTED_CURRENCY_TD,
    payload: payload,
  });
};

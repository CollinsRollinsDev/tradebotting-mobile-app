export const SET_BTC_DATA = "SET_BTC_DATA";
export const SET_ETH_DATA = "SET_ETH_DATA";
export const SET_BNB_DATA = "SET_BNB_DATA";


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

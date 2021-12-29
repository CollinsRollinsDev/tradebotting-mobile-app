import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Button,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-community/picker";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectedTrade } from "../../reduxStore/actions";
import { updateSelectedIntervalTD } from "../../reduxStore/actions";
import { updateHistoricDateForTrade } from "../../reduxStore/actions";
import { updateSelectedCurrencyTD } from "../../reduxStore/actions";
import axios from "axios";



const FirstLayer = () => {
    const dispatch = useDispatch();

  const [selectedCoin, setSelectedCoin] = useState("");
  const [selectedInterval, setSelectedInterval] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  let [tradeSelectedCoinData, setTradeSelectedCoinData] = useState();
  let [historicData, setHistoricData] = useState();
  const [btnText, setBtnText] = useState("GO")

  const fetchCryptoDataApi = async () => {
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency}&ids=${selectedCoin}&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C2d%2C3d%2C7d%2C14d%2C30d`
      )
      .then(async (response) => {
        const res = await response.data[0];
        setTradeSelectedCoinData((tradeSelectedCoinData = res));
        // console.log(tradeSelectedCoinData);
        //  setIsLoading(false);
        return res;
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
        //  setIsLoading(false);
        return err.message;
      });
  };

  //   Function to get daily history
  const dialyHistory = async () => {
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=${selectedCurrency}&days=30&interval=daily`
      )
      // await axios.get("history.json")
      // await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily")
      .then((response) => {
        const data = response.data;
        setHistoricData((historicData = data));
        // console.log(historicData);
        // console.log(data);
        // console.log(data.prices)
        // console.log(data.market_caps)
        // console.log(data.total_volumes)
      })
      .catch((err) => {alert("An error occured!")
      setBtnText("GO")});
  };

    const handlePress = async() => {
      if (selectedCoin && selectedInterval && selectedCurrency) {
        console.log("sending states");
        setBtnText("...")
        dispatch(updateSelectedIntervalTD(selectedInterval))
        dispatch(updateSelectedCurrencyTD(selectedCurrency))
        // Run api for history datas
        console.log("fetching datas");
        await dialyHistory();
        dispatch(updateHistoricDateForTrade(historicData));
        // Run api call for selected coin datas
        await fetchCryptoDataApi();
        dispatch(updateSelectedTrade(tradeSelectedCoinData));
        console.log("datas dispatched");
        setBtnText("GO")
      } else{
        alert("Something went wrong! You may have left out some inputs");
      }
    }

  return (
    <View style={styles.container}>
      <View style={styles.picker}>
        <Picker
          selectedValue={selectedCoin}
          style={{ height: "100%", width: "100%" }}
          onValueChange={(itemValue: any, itemIndex) =>
            setSelectedCoin(itemValue)
          }
        >
          <Picker.Item label="Choose Coin" value="" />
          <Picker.Item label="Bitcoin" value="bitcoin" />
          <Picker.Item label="Binance Coin" value="binancecoin" />
          <Picker.Item label="DogeCoin" value="dogecoin" />
          <Picker.Item label="Dash" value="dash" />
          <Picker.Item label="Hive" value="hive" />
        </Picker>
      </View>

      <View style={styles.picker2}>
        <Picker
          selectedValue={selectedInterval}
          style={{ height: "100%", width: "100%" }}
          onValueChange={(itemValue: any, itemIndex) =>
            setSelectedInterval(itemValue)
          }
        >
          <Picker.Item label="Choose Interval" value="" />
          <Picker.Item label="1 day" value="1" />
          <Picker.Item label="7 days" value="7" />
        </Picker>
      </View>

      <View style={styles.picker3}>
        <Picker
          selectedValue={selectedCurrency}
          style={{ height: "100%", width: "100%" }}
          onValueChange={(itemValue: any, itemIndex) =>
            setSelectedCurrency(itemValue)
          }
        >
          <Picker.Item label="Choose Currency" value="" />
          <Picker.Item label="Naira" value="ngn" />
          <Picker.Item label="United State Dollar" value="usd" />
        </Picker>
      </View>

        <TouchableOpacity onPress={handlePress} style={styles.btnCover}>
          {/* <Pressable style={styles.button} > */}
              <Text style={styles.btnText}>{btnText}</Text>
          {/* </Pressable> */}
        </TouchableOpacity>

    </View>
  );
};

export default FirstLayer;

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: "100%",
    backgroundColor: "#070d8a",
    borderRadius: 20,
    overflow: "hidden",
  },
  picker: {
    height: 50,
    maxWidth: 180,
    backgroundColor: "whitesmoke",
    // borderRadius:20,
    // borderTopRightRadius:20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  picker2:{
    height: 50,
    marginTop:20,
    maxWidth: 180,
    backgroundColor: "whitesmoke",
    // borderRadius:20,
    borderTopRightRadius:10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  picker3:{
    height: 50,
    marginTop:20,
    maxWidth: 180,
    backgroundColor: "whitesmoke",
    // borderRadius:20,
    borderTopRightRadius:10,
    // borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnCover:{
      height:50,
      width:50,
      backgroundColor:'white',
      borderRadius:50,
      position:'absolute',
      right:10,
      top:'39%',
      overflow:'hidden',
      alignItems: 'center',
      justifyContent: 'center',
  },

  btnText:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'blue',
  }
});

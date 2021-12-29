import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useSelector } from "react-redux";
import "number-to-locale-string-polyfill";

const SecondLayer = () => {
  const { selectedCurrency, selectedTrade }: any = useSelector(
    (state: any) => state.useTheReducer
  );
  const coinData = selectedTrade;

  let [colorPercent, setColorPercent] = useState("white");
  let [colorPrice, setColorPrice] = useState("white");
  let [currency, setCurrency] = useState("");

  const settingPriceColor = {
    color: colorPrice,
  };
  const settingPercentColor = {
    color: colorPercent,
  };
  const assignColors = () => {
    coinData.price_change_percentage_24h < 0
      ? setColorPercent("red")
      : setColorPercent("green");
    coinData.price_change_24h < 0
      ? setColorPrice("red")
      : setColorPrice("green");
    selectedCurrency == "usd" ? setCurrency("$") : setCurrency("₦");
  };

  useEffect(() => {
    assignColors();
  }, [coinData.price_change_24h, coinData.price_change_percentage_24h]);

  return (
    <View style={styles.container}>
      <View style={styles.identityBox}>
        <Image source={{ uri: coinData.image, width: 50, height: 50 }} />
        <Text style={styles.coinName}>{coinData.name}</Text>
      </View>
      <View style={styles.details}>
        <View style={styles.eachDetail}>
          <Text style={styles.leftText}> Current Price:</Text>
          <Text style={styles.item}>
            {currency}
            {coinData.current_price
              ? coinData.current_price.toLocaleString()
              : null}
          </Text>
        </View>

        <View style={styles.eachDetail}>
          <Text style={styles.leftText}> Market Cap:</Text>
          <Text style={styles.item}>
            {currency}
            {coinData.market_cap ? coinData.market_cap.toLocaleString() : null}
          </Text>
        </View>

        <View style={styles.eachDetail}>
          <Text style={styles.leftText}> 24hr Percent Change:</Text>
          <Text style={[styles.item, settingPriceColor]}>
            {coinData.price_change_percentage_24h
              ? coinData.price_change_percentage_24h.toFixed(2)
              : null}
            %
          </Text>
        </View>

        <View style={styles.eachDetail}>
          <Text style={styles.leftText}> 24hr Price Change:</Text>
          <Text style={[styles.item, settingPercentColor]}>
            {currency}
            {coinData.price_change_24h
              ? coinData.price_change_24h.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : null}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SecondLayer;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: "auto",
    width: "100%",
    backgroundColor: "#070d8a",
    borderRadius: 20,
    overflow: "hidden",
    padding: 10,
  },
  identityBox: {
    height: "auto",
    width: "100%",
    // backgroundColor:'red',
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  coinName: {
    fontSize: 22,
    textShadowColor: "black",
    textShadowRadius: 2,
    marginLeft: 10,
    color: "white",
    fontWeight: "700",
  },
  details: {
    height: "auto",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 15,
  },
  eachDetail: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  item: {
    color: "white",
    position: "absolute",
    right: 20,
  },
  leftText: {
    fontSize: 17,
    fontWeight: "700",
    width: "100%",
    color: "white",
  },
});

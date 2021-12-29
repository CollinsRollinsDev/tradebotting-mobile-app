import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import CalSurface from "./CalSurface";

const ThirdLayer = () => {
  let [displayButtons, setDisplayButtons] = useState(true);
  let [surfaceState, setSurfaceState] = useState(false);
  let [deepState, setDeepState] = useState(false);

  const handleSurface = () => {
    setDisplayButtons(false);
    setSurfaceState(true);
  };
  const handleDeep = () => {
    setDisplayButtons(false);
    setDeepState(true);
  };

  const btns = (
    <View style={styles.scanBtns}>
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: "white",
          borderRadius: 10,
          minWidth: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={handleSurface}
      >
        <Text>Surface Scan</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: "white",
          borderRadius: 10,
          minWidth: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={handleDeep}
      >
        <Text>Deep Scan</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* {btns} */}
      {displayButtons ? btns : <CalSurface />}
    </View>
  );
};

export default ThirdLayer;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: 150,
    marginBottom: 40,
    width: "100%",
    backgroundColor: "#070d8a",
    borderRadius: 20,
    overflow: "hidden",
    padding: 10,
  },
  scanBtns: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
});

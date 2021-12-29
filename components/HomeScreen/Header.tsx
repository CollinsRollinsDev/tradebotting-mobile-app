import React from "react";
import { StyleSheet, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.headContainer}>
      <View style={styles.right}>
        <View style={styles.menu}></View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headContainer: {
    flex: 1,
    maxHeight: 50,
    marginTop: 30,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  left: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  leftText: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },
  right: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bill: {
    height: 35,
    width: 35,
    borderRadius: 35,
    backgroundColor: "grey",
    marginRight: 10,
  },
  profile: {
    height: 35,
    width: 35,
    borderRadius: 35,
    backgroundColor: "grey",
    marginRight: 30,
  },
  menu: {
    height: 35,
    width: 35,
    borderRadius: 35,
    backgroundColor: "grey",
  },
});

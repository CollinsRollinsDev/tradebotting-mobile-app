import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ShowQuickGuide = () => {
  const [display, setDisplay] = useState(false);
  const [guideStatement, setGuideStatement] = useState("Open Guide");

  const handlePress = () => {
    !display ? setDisplay(true) : setDisplay(false);
    !display
      ? setGuideStatement("Close Guide")
      : setGuideStatement("Open Guide");
  };

  const displayGuild = (
    <View style={styles.container}>
      <Text style={styles.heading}>Quick Guide</Text>
      <Text style={styles.paragraph}>
        Welcome to TradeBotting version 1.5. This is the second release of the
        first version. As we all know, crypto currencies are voliatle and can
        not be 100% accurately predictable by humans. Same goes for the bot.
        However, this bot will try predict the best possible outcome of the
        future prices of cryptos based on some factors behind the scenes.
      </Text>

      <Text style={styles.paragraph}>
        Having said this, we are making it clear that we are in no way liable
        for any lost funds of any kind that may be in any way connected to this
        application. You are adviced to trade on with funds you are ready to
        loose to avoid "stories that touches the heart". TRADE AT YOUR OWN RISK!
      </Text>
      <Text style={styles.paragraph}>
        Nevertheless, this bot is promising and can deliver beyond expectations.
        The application is still in better phrase and there may be a lot of bug
        fixings which may affect user-experience. We apologise for any
        incovinences in advance.
      </Text>
      <Text style={styles.heading}>How to use?</Text>
      <Text style={styles.paragraph}>
        Usage is pretty simple as the application is designed to be
        user-friendly. For the meantime, you are limited to some certain
        features of the app and more updatea will roll out soon enough.
      </Text>
      <Text style={styles.paragraph}>
        So, to check for the price of Bitcoin, Ethereum and Binance Coin in a
        glimps, just access the app's dashboard and it is visble there for quick
        grasp. Other interfaces in the dashboard such as records an community
        are going to be functional in the later version prior to their
        development/implementations.
      </Text>
      <Text style={styles.paragraph}>
        To check for the future price and predict, as well as get the advice of
        the system, head over to Trade-Area from the menu and select your coin,
        intervals and currency you wanna get your result.
      </Text>
      <Text style={styles.paragraph}>
        The data of your selected crypto will be out in no time. Then, you have
        two option to get advice fron the system. For now, only surface scan is
        supported as we are working on the deep scan for later updates.
      </Text>
      <Text style={styles.heading}>Is payment involve?</Text>
      <Text style={styles.paragraph}>
        No! We plan to implement such but not anytime soon. All access to the
        site are completly free.
      </Text>
      <Text style={styles.heading}>Adds on</Text>
      <Text style={styles.paragraph}>
        For more informatin, contact the developer: 08039290897
      </Text>
    </View>
  );

  return (
    <View style={{ height: "auto", width: "100%" }}>
      <TouchableOpacity onPress={handlePress}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            color: "white",
            padding: 10,
            backgroundColor: "blue",
          }}
        >
          {guideStatement}
        </Text>
      </TouchableOpacity>
      {display && displayGuild}
    </View>
  );
};

export default ShowQuickGuide;

const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "100%",
    // backgroundColor:'red',
    padding: 10,
  },
  heading: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: "700",
    color: "white",
    textDecorationLine: "underline",
    //   textDecorationColor:'white'
  },
  paragraph: {
    marginTop: 10,
    color: "whitesmoke",
  },
});

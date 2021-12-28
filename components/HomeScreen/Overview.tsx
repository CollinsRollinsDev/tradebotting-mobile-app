import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useLayoutEffect} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { setBtcData } from '../../reduxStore/actions';
import { setEthData } from '../../reduxStore/actions';
import { setBnbData } from '../../reduxStore/actions';
import 'number-to-locale-string-polyfill';


export default function Overview() {
  const dispatch = useDispatch();
  const { btcData, ethData }:any = useSelector((state:any) => state.useTheReducer);

  const [bitcoinData, setBitcoinData] = useState();
  const [ethereumData, setEthereumData] = useState();
  const [binanceData, setBinanceData] = useState();


  const fetchDataOnStartup = async(coin:string, setter:any) => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin}&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C2d%2C3d%2C7d%2C14d%2C30d`
    );
    const data = await res.data[0];
    dispatch(setter(data))
    return data
  }

  useEffect(() => {
    fetchDataOnStartup('bitcoin', setBtcData);
    fetchDataOnStartup('ethereum', setEthData);
    fetchDataOnStartup('binancecoin', setBnbData);
  }, [])


    const display = (
        <View style={styles.box}>
        <View style={styles.top}>
            <View style={styles.imgDiv}>

            </View>
            <Text style={styles.topText}>Bitcoin</Text>
        </View>
        <View style={styles.bottom}>
            <View style={styles.bottomView}>
            <Text style={styles.price}>Current Price: </Text><Text style={styles.item}>${btcData
                ?  btcData.current_price.toLocaleString()
                : "Fetching Data"}</Text>
            </View>
            <View style={styles.bottomView}>
            <Text style={styles.price}>24hr Percent Change:</Text><Text style={styles.item}>{btcData
                ? btcData.price_change_percentage_24h.toFixed(2)
                : null}{" "}%</Text>
            </View>
            <View style={styles.bottomView}>
            <Text style={styles.price}>24hr Price Change:</Text><Text style={styles.item}>$
              {btcData.price_change_24h
                ? btcData.price_change_24h.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
                :"Fetching Data"}</Text>
            </View>
         
        </View>
      </View>
    )

  return (
  
    <View style={styles.bigContainer}>
      <ScrollView horizontal contentContainerStyle={styles.container}>
      {display}
      {display}
      {display}
     </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bigContainer:{
  
  },
  container: {
    // flex: 1,
    maxHeight:300,
    width: 1100,
    // backgroundColor: 'darkblue',
    // justifyContent:'flex-start',
    // alignItems:'center',
    // flexDirection:'row',
    padding:10,
    marginBottom:20,
    // overflow:'scroll'
  },
  box:{
    height:300,
    width: 350,
    backgroundColor: '#090147',
    justifyContent:'flex-start',
    alignItems:'center',
    borderRadius:20,
    marginRight:20,
    overflow:'hidden'
  },
  top:{
    flex:1.5,
    height:'100%',
    width: '100%',
    // backgroundColor: 'green',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingLeft:10,
  },
  imgDiv:{
    height:50,
    width:50,
    borderRadius:50,
    backgroundColor:'red',
    marginRight:10
  },
  topText:{
    fontSize:23,
    fontWeight:'700',
    color:'white',
    fontFamily:'serif',
    textShadowColor:'black',
    textShadowRadius:10

  },
  bottom:{
    flex:2.5,
    height:'100%',
    width: '100%',
    justifyContent:'space-around',
    alignItems:'flex-start',
    paddingLeft:10,
  },
  price:{
    fontSize:17,
    fontWeight:'700',
    width:'100%',
    color:'white'

  },
  bottomView:{
    maxWidth:'100%',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
  },
  item:{
      position:'absolute',
      right:20,
      fontWeight:'700',
      color:'white'
  },
});

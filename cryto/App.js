import { StatusBar } from 'expo-status-bar';
import {  FlatList,StyleSheet, Text, View } from 'react-native';
import React,{useRef,useMemo,useState, useEffect} from 'react';
import Listitem from './components/Listitem';
import Chart from './components/Chart';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';


import {SAMPLE_DATA} from './assets/data/sample'
import { getMarketData } from './services/cryptoService';

export default function App() {
  const [data, setData] = useState([]);
  const [selectedCoinData, setSelectedCoinData ] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
     const marketData = await getMarketData();
     setData(marketData);
  }

  fetchMarketData();
}, [])

const bottomSheetModalRef = useRef(null);

const snapPoints = useMemo(() => ['45%'], []);

const openModal = (item) => {
  setSelectedCoinData(item);
  bottomSheetModalRef.current.present();
}

  return (
    <BottomSheetModalProvider>
    <View style={styles.container}>
      <View style={styles.titlewrap}>
      <Text style={styles.title}>Markets</Text>
      </View>
      <View style ={styles.divider}/>
      


<FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <Listitem
            name={item.name}
            symbol={item.symbol}
            currPrice={item.current_price}
            changePer={item.price_change_percentage_7d_in_currency}
            logoUrl={item.image}
            onPress={() => openModal(item)}

          />
          )}
        
        />
    </View>

    <BottomSheetModal
    ref={bottomSheetModalRef}
    index={0}
    snapPoints={snapPoints}
    style={styles.bottomSheet}
  >
    { selectedCoinData ? (
    <Chart 
      currentPrice = {selectedCoinData.current_price}
      logoUrl = {selectedCoinData.image}
      name = {selectedCoinData.name}
      symbol = {selectedCoinData.symbol}
      priceChangePercentage7d = {selectedCoinData.price_change_percentage_7d_in_currency}
      sparkline = {selectedCoinData.sparkline_in_7d.price}
    />
    )
    : null}

    </BottomSheetModal>

    </BottomSheetModalProvider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  titlewrap: {
    marginTop:80,
    paddingHorizontal:16,
  },
  title: {
    fontSize:24,
    fontWeight:"bold",
  },

  divider: {
   height: 2,
   backgroundColor: '#89CFF0',
   marginHorizontal:16,
   marginTop:16,
  },

  bottomSheet: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
});

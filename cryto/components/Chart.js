import React from 'react'
import { View, Text, StyleSheet, Image,Dimensions} from 'react-native'
//import {ChartDot, ChartPath, ChartPathProvider,ChartYLabel} from '@rainbow-me/animated-charts';

export const {width: SIZE} = Dimensions.get('window');

const Chart = ({ currentPrice, logoUrl, name, symbol, priceChangePercentage7d, sparkline}) => {
    const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';

    const formatUSD = value => {
        'worklet';
        if (value === '') {
          return `$${currentPrice}`;
        }

        const formattedValue = `$${parseFloat(value).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`

        return formattedValue;
      };

    return (
       // <ChartPathProvider data={{ points: sparkline, smoothingStrategy: 'bezier' }}>
        <View style = {styles.chartWrapper}>
            <View style = {styles.titleWrapper}>
                <View style = {styles.upperTitles}>
                    <View style = {styles.upperLeftTitle}>
                        <Image source = {{ url : logoUrl}} style = {styles.image} />
                        <Text style = {styles.subtitle}>{name} ({symbol})</Text>
                    </View>
                    <Text style = {styles.subtitle}>7d</Text>

                </View>
                <View style = {styles.lowerTitles}>
                 {/* <ChartYLabel
                   format={formatUSD}
                   style={styles.boldTitle}
                 /> */}
                    <Text style = {styles.boldTitle}>${currentPrice}</Text>
                    <Text style = {[styles.title, {color: priceChangeColor}]}>{priceChangePercentage7d}%</Text>
                </View>
            </View>
             <View style={styles.chartLineWrapper}>
            {/* <ChartPath height={SIZE / 2} stroke="black" width={SIZE} /> 
            <ChartDot style={{ backgroundColor: 'black' }} /> */}
            </View>
        </View>
        //</ChartPathProvider>
    
    )
}

const styles = StyleSheet.create({
    chartWrapper: {
        marginVertical: 16
    },
    titleWrapper: {
        marginHorizontal: 16
    },
    upperTitles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    upperLeftTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 24,
        height: 24,
        marginRight: 4,
    },
    subtitle: {
        fontSize: 14,
        color: '#A9ABB1',
    },
    lowerTitles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    boldTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    title: {
        fontSize:18,
    },

    chartLineWrapper:{
        marginTop: 40,
    },
})

export default Chart
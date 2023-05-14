import React, { Component } from 'react'
import { StyleSheet,Text, TouchableOpacity, View, Image } from 'react-native'
import img from './btc.png';
const Listitem = ({name, symbol,currPrice, changePer, logoUrl, onPress}) => {
  const priceChangeColor = changePer > 0 ? '#34C759' : '#FF3B30';
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.itemwrap}>
          
        <View style={styles.leftwrap}>
          < Image source={{url: logoUrl}} style= {styles.image}/>
          <View style={styles.titleswrap}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
          </View>
          </View>


          <View style={styles.rightwrap}>
     
          <Text style={styles.title}>${currPrice}</Text>
          <Text style={[styles.subtitle, {color:priceChangeColor}]}>{changePer}%</Text>
          </View>
          

           </View>
      
      </TouchableOpacity>
    )
  
}


const styles = StyleSheet.create({
  itemwrap: {
    paddingHorizontal:16,
    marginTop:24,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",

  },

  leftwrap: {
   flexDirection:"row",
   alignItems:"center",

  },
  titleswrap: {
    marginLeft:8,
  },
  image: {
    height:48,
    width:48,
    
  },
  rightwrap: {
   alignItems:'flex-end',


  },
  subtitle: {
    marginTop:4,
    fontSize: 14,
    color:"#4169E1",
  },
  title: {
 fontSize: 18,
  },
});


export default Listitem

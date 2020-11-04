import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {StatusBar} from 'expo-status-bar'

export const Navbar = ({title}) => {
  return (
    <View style={styles.navbar} >
      <Text style={styles.text}>{title}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    // flex: 2,
    height: '10%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#d24615',
    paddingBottom: 10
  },
  text: {
    color: 'white',
    fontSize: 20
  }
})
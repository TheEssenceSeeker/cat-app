import React, {useContext, useState} from 'react'
import {StyleSheet, Image, ActivityIndicator} from "react-native"
import {Dimensions} from 'react-native'
import {LoadingContext} from "../context/LoadingContext"

export const CatImage = ({cat}) => {
  const {loading, setLoading} = useContext(LoadingContext)

  const windowWidth = Dimensions.get('window').width
  const whRatio = cat.width / cat.height || 1
  const height = windowWidth / whRatio

  return (
    <>
      <Image
        source={{uri: cat.url}}
        style={{width: '100%', height: loading ? 0 : height, maxHeight: loading ? 0 : '70%'}}
        onLoadEnd={() => setLoading(false)}
      />
      {loading && <ActivityIndicator size='large' color='#d24615'/>}
    </>
  )
}


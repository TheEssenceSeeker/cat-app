import React, {useContext} from 'react'
import {StyleSheet, ActivityIndicator, Image, Dimensions} from "react-native"
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
        style={{
          width: loading ? 0 : '100%',
          height: loading ? 0 : height,
          maxHeight: '70%'
        }}
        onLoadEnd={() => setLoading(false)}
      />
      {loading && <ActivityIndicator style={styles.loader} size='large' color='#d24615'/>}
    </>
  )
}

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: '50%'
  }
})
